import type { propertySchema } from "@/lib/schema";
import type { z } from "zod";

export type TypesenseDocument = z.infer<typeof propertySchema>;

export interface PropertyPhoto {
  url: string;
  main_photo: boolean;
  sequence: number;
}

// According to Typesense docs: https://typesense.org/docs/0.24.0/api/documents.html#search
export interface SearchResponseHit<T> {
  document: T;
  highlights: string[];
  text_match: number;
  text_match_info: {
    score: number;
    tokens_matched: number;
  };
}

export interface SearchResponse<T> {
  found: number;
  hits: SearchResponseHit<T>[];
  page: number;
  search_time_ms: number;
}
