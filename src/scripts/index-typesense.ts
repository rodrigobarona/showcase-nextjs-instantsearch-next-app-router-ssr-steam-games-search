import type { Client } from "typesense";
import ora from "ora";
import type { TypesenseDocument } from "@/types/typesense";

export async function exportProperties(client: Client): Promise<TypesenseDocument[]> {
  const spinner = ora("Fetching properties from Typesense").start();

  try {
    const results = await client
      .collections("properties")
      .documents()
      .export();

    // Parse and validate the results
    const properties = results
      .split("\n")
      .filter(Boolean)
      .map(line => JSON.parse(line))
      .filter((doc): doc is TypesenseDocument => {
        return doc && typeof doc === "object" && "id" in doc;
      });

    spinner.succeed(`Successfully exported ${properties.length} properties`);
    return properties;
  } catch (error) {
    spinner.fail("Failed to export properties");
    throw error;
  }
}
