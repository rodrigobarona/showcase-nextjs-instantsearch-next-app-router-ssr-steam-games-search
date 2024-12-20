import { z } from "zod";

const propertySchema = z.object({
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
  photos: z.array(
    z.object({
      url: z.string(),
      main_photo: z.boolean(),
      sequence: z.number(),
    })
  ).optional(),
});

const attributeLabelMap: { [K in keyof z.infer<typeof propertySchema>]: string } = {
  code: "Reference",
  price: "Price",
  price_on_application: "Price on Application",
  title: "Title",
  description: "Description",
  category_name: "Category",
  slug_url: "URL",
  last_updated: "Last Updated",
  rooms: "Rooms",
  bathrooms: "Bathrooms",
  parking_spaces: "Parking Spaces",
  outdoor_area: "Outdoor Area",
  land_area: "Land Area",
  gross_build_area: "Gross Build Area",
  county: "County",
  zone: "Zone",
  parish: "Parish",
  cover_photo: "Cover Photo",
  is_exclusive: "Exclusive",
  id: "",
  photos: "Photos",
  surroundings: "Surroundings",
};

const typesenseSchema = z.object({
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

export { attributeLabelMap, propertySchema, typesenseSchema };
