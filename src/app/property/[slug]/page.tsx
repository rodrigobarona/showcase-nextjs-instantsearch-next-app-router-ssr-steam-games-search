import { PropertyContent } from "@/components/property-content";
import { typesenseConfig } from "@/lib/typesense";
import type { SearchResponse, TypesenseDocument } from "@/types/typesense";
import { Client } from "typesense";

interface PropertyPageProps {
  params: {
    slug: string;
  };
}

async function getProperty(slug: string): Promise<TypesenseDocument> {
  const client = new Client(typesenseConfig);
  const results = (await client
    .collections("properties")
    .documents()
    .search({
      q: "*",
      filter_by: `slug_url:${slug}`,
      per_page: 1,
    })) as unknown as SearchResponse<TypesenseDocument>;

  if (!results.hits?.[0]) {
    throw new Error("Property not found");
  }

  return results.hits[0].document;
}

async function getRelatedProperties(
  property: TypesenseDocument,
): Promise<TypesenseDocument[]> {
  const client = new Client(typesenseConfig);
  const results = (await client
    .collections("properties")
    .documents()
    .search({
      q: "*",
      filter_by: `category_name:${property.category_name} && zone:${property.zone} && id:!=${property.id}`,
      per_page: 4,
    })) as unknown as SearchResponse<TypesenseDocument>;

  return results.hits.map(hit => hit.document);
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getProperty(params.slug);
  const relatedProperties = await getRelatedProperties(property);

  return (
    <main className="container mx-auto px-4 py-8">
      <PropertyContent property={property} relatedProperties={relatedProperties} />
    </main>
  );
}
