"use client";

import { parseAsBoolean, parseAsInteger, parseAsString } from "nuqs";

// Client-side parsers for use with useQueryStates
export const facetParsers = {
  // Search parameters
  q: parseAsString.withDefault(""),
  page: parseAsInteger.withDefault(1),
  hitsPerPage: parseAsInteger.withDefault(12),
  sortBy: parseAsString.withDefault("properties"),

  // Filter parameters
  business_type: parseAsString.withDefault(""),
  rooms: parseAsString.withDefault("all"),
  bathrooms: parseAsString.withDefault("all"),
  price_range: parseAsString.withDefault(""),
  county: parseAsString.withDefault(""),
  zone: parseAsString.withDefault(""),
  parish: parseAsString.withDefault(""),
  category: parseAsString.withDefault(""),
  sub_category: parseAsString.withDefault(""),
  state: parseAsString.withDefault(""),
  equipments: parseAsString.withDefault(""),
  gross_build_area: parseAsString.withDefault(""),
  gross_private_area: parseAsString.withDefault(""),
  parking: parseAsString.withDefault(""),
  is_exclusive: parseAsBoolean.withDefault(false),
  surroundings: parseAsString.withDefault(""),
  published_at: parseAsString.withDefault(""),
} as const;

export type FacetState = {
  [K in keyof typeof facetParsers]: string;
};
