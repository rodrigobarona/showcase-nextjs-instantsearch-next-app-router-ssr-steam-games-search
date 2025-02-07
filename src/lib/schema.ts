import { z } from "zod";

export const propertySchema = z.object({
  id: z.string(),
  code: z.string(),
  price: z.number(),
  price_on_application: z.boolean(),
  title: z.string(),
  description: z.string(),
  category_name: z.string(),
  slug_url: z.string(),
  last_updated: z.string(),
  rooms: z.number(),
  bathrooms: z.number().optional(),
  parking_spaces: z.number().optional(),
  outdoor_area: z.number().optional(),
  land_area: z.number().optional(),
  gross_build_area: z.number().optional(),
  county: z.string().optional(),
  zone: z.string().optional(),
  parish: z.string().optional(),
  cover_photo: z.string().optional(),
  is_exclusive: z.boolean().optional(),
  surroundings: z.array(z.string()).optional(),
  photos: z
    .array(
      z.object({
        url: z.string(),
        main_photo: z.boolean(),
        sequence: z.number(),
      }),
    )
    .optional(),
});

export const attributeLabelMap = {
  business_type_id: "Transaction Type",
  rooms: "Bedrooms",
  price: "Price",
  county: "County",
  zone: "Zone",
  parish: "Parish",
  category_name: "Property Type",
  sub_category_name: "Property Subtype",
  state: "Property State",
  equipments: "Equipment",
  bathrooms: "Bathrooms",
  gross_private_area: "Private Area",
  published_at: "Publication Date",
  parking_spaces: "Parking Spaces",
  is_exclusive: "Exclusive Properties",
  surroundings: "Surroundings",
  // Keep other existing mappings
};

export const typesenseSchema = z.object({
  code: z.string(),
  price: z.number(),
  price_on_application: z.boolean(),
  title: z.string(),
  description: z.string(),
  category_name: z.string(),
  slug_url: z.string(),
  last_updated: z.string(),
  rooms: z.number(),
  bathrooms: z.number().optional(),
  parking_spaces: z.number().optional(),
  outdoor_area: z.number().optional(),
  land_area: z.number().optional(),
  gross_build_area: z.number().optional(),
  county: z.string().optional(),
  zone: z.string().optional(),
  parish: z.string().optional(),
  cover_photo: z.string().optional(),
  is_exclusive: z.boolean().optional(),
  surroundings: z.array(z.string()).optional(),
  photos: z
    .array(
      z.object({
        url: z.string(),
        main_photo: z.boolean(),
        sequence: z.number(),
      }),
    )
    .optional(),
});
