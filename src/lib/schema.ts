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
  price: "Price",
  rooms: "Bedrooms",
  bathrooms: "Bathrooms",
  parking_spaces: "Parking Spaces",
  category_name: "Property Type",
  county: "County",
  zone: "Zone",
  parish: "Parish",
  gross_build_area: "Gross Build Area",
  land_area: "Land Area",
  outdoor_area: "Outdoor Area",
  gross_private_area: "Private Area",
  state: "Property State",
  business_type_id: "Transaction Type",
  availability_ids: "Availability",
  is_exclusive: "Exclusive Listings",
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
