"use client";

import { CurrentRefinements } from "@/components/instantsearch/current-refinements";
import { Facet } from "@/components/instantsearch/facet";
import { HitsPerPageSelect } from "@/components/instantsearch/hits-per-page-select";
import { InfiniteHits } from "@/components/instantsearch/infinite-hits";
import { SearchBox } from "@/components/instantsearch/searchbox";
import { SortBy } from "@/components/instantsearch/sort-by";
import { typesenseConfig } from "@/lib/typesense";
import { useEffect, useState } from "react";
import { Configure, DynamicWidgets } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: typesenseConfig,
  additionalSearchParameters: {
    query_by: "title,description,category_name",
  },
});

const hitsPerPageItems = [
  { label: "12 per page", value: 12, default: true },
  { label: "24 per page", value: 24 },
];

const sortByItems = [
  { label: "Relevance", value: "properties" },
  { label: "Price (Low to High)", value: "properties/sort/price:asc" },
  { label: "Price (High to Low)", value: "properties/sort/price:desc" },
  { label: "Rooms", value: "properties/sort/rooms:desc" },
];

export default function Search() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <InstantSearchNext
      searchClient={typesenseInstantsearchAdapter.searchClient}
      indexName="properties"
      routing
      future={{ preserveSharedStateOnUnmount: true }}
    >
      <Configure
        facets={[
          "category_name",
          "rooms",
          "bathrooms",
          "parking_spaces",
          "zone",
          "county",
          "price",
          "business_type_id",
          "availability_id",
        ]}
        maxValuesPerFacet={1000}
      />
      <div className="flex flex-col px-2 lg:px-0">
        {mounted ? (
          <>
            <div className="flex justify-end gap-3 items-end">
              <CurrentRefinements />
              <SortBy items={sortByItems} />
              <HitsPerPageSelect items={hitsPerPageItems} />
            </div>
            <div className="flex">
              <aside className="xl:flex flex-col gap-3 mr-10 mt-16 hidden">
                <DynamicWidgets fallbackComponent={Facet} />
              </aside>
              <div className="flex-1 flex-col">
                <SearchBox />
                <InfiniteHits />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </InstantSearchNext>
  );
}
