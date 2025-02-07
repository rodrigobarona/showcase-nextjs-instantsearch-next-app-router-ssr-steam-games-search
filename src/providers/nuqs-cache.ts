import { facetParsers } from "@/lib/nuqs-parsers";
import { createSearchParamsCache } from "nuqs/server";

// Create and export the cache instance
export const searchParamsCache = createSearchParamsCache(facetParsers);
