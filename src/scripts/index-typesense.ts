import { propertySchema, type typesenseSchema } from "@/lib/schema";
import { typesenseConfig } from "@/lib/typesense";
import { getUnixTime, parse } from "date-fns";
import { upAll } from "docker-compose";
import path from "node:path";
import ora from "ora";
import { Client, Errors } from "typesense";
import type { z } from "zod";

// Instantiate the Typesense client
const client = new Client(typesenseConfig);

function parseCustomDate(dateString: string) {
  const date = parse(dateString, "MMM d, yyyy", new Date());
  const unixTime = getUnixTime(date);

  if (Number.isNaN(unixTime)) {
    return 0;
  }

  return unixTime;
}

function parseProperties(): Promise<z.infer<typeof typesenseSchema>[]> {
  const spinner = ora("Fetching properties from Typesense");

  return client
    .collections("properties")
    .documents()
    .export()
    .then((documents) => {
      spinner.succeed("Properties fetched successfully");
      return documents
        .split("\n")
        .filter(Boolean)
        .map((line) => {
          const parsed = propertySchema.safeParse(JSON.parse(line));
          if (!parsed.success) {
            return;
          }
          return {
            ...parsed.data,
            last_updated: parseCustomDate(parsed.data.last_updated).toString(),
          };
        })
        .filter((property): property is z.infer<typeof typesenseSchema> => property !== undefined);
    });
}

async function createCollection() {
  const spinner = ora("Creating collection");
  await client.collections().create({
    name: "properties",
    fields: [
      { name: "code", type: "string" },
      { name: "price", type: "float" },
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "category_name", type: "string" },
      { name: "slug_url", type: "string" },
      { name: "last_updated", type: "string" },
      { name: "rooms", type: "int32" },
      { name: "bathrooms", type: "int32", optional: true },
      { name: "parking_spaces", type: "int32", optional: true },
      { name: "outdoor_area", type: "int32", optional: true },
      { name: "land_area", type: "int32", optional: true },
      { name: "gross_build_area", type: "int32", optional: true },
      { name: "county", type: "string", optional: true },
      { name: "zone", type: "string", optional: true },
      { name: "parish", type: "string", optional: true },
      { name: "cover_photo", type: "string", optional: true },
      { name: "is_exclusive", type: "bool", optional: true },
    ],
    default_sorting_field: "last_updated",
  });
  spinner.succeed("Collection created");
}

async function handleCollection(properties: z.infer<typeof typesenseSchema>[]) {
  const spinner = ora("Checking collection");
  try {
    const collection = await client.collections("properties").retrieve();
    spinner.text = "Collection already exists";
    if (collection.num_documents === properties.length) {
      spinner.succeed("Collection already has the same number of documents");
      return;
    }

    spinner.warn("Collection has a different number of documents");
    await client.collections("properties").delete();
    await createCollection();
  } catch (e: unknown) {
    if (!(e instanceof Errors.ObjectNotFound)) {
      throw e;
    }
    spinner.warn("Collection does not exist");
    await createCollection();
  }
}

// Index the properties into Typesense
async function indexProperties(properties: z.infer<typeof typesenseSchema>[]) {
  await handleCollection(properties);
  await client.collections("properties").documents().import(properties);
}

async function main() {
  const spinner = ora();
  try {
    await upAll({ cwd: path.join(process.cwd()) });
    const properties = await parseProperties();
    await indexProperties(properties);
    spinner.succeed("Script completed successfully.");
  } catch (error) {
    spinner.fail(`An error occurred: ${error}`);
    process.exit(1);
  }
}

// Run the script
main();
