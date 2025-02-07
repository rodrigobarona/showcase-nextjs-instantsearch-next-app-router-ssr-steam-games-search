"use client";

import { CurrentRefinements } from "@/components/instantsearch/current-refinements";
import { Facet, FACET_ORDER } from "@/components/instantsearch/facet";
import { HitsPerPageSelect } from "@/components/instantsearch/hits-per-page-select";
import { InfiniteHits } from "@/components/instantsearch/infinite-hits";
import { SearchBox } from "@/components/instantsearch/searchbox";
import { SortBy } from "@/components/instantsearch/sort-by";
import { typesenseConfig } from "@/lib/typesense";
import { useEffect, useState } from "react";
import { Configure } from "react-instantsearch";
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

interface RouteState {
  q?: string;
  p?: number;
  refinementList?: Record<string, string[]>;
  range?: Record<string, string>;
  sortBy?: string;
  hitsPerPage?: number;
}

interface IndexUiState {
  query?: string;
  page?: number;
  refinementList?: Record<string, string[]>;
  range?: Record<string, string>;
  sortBy?: string;
  hitsPerPage?: number;
}

const uiStateMapping = {
  stateToRoute(uiState: { properties?: IndexUiState }): RouteState {
    const indexUiState = uiState.properties || {};
    return {
      q: indexUiState.query,
      p: indexUiState.page,
      refinementList: indexUiState.refinementList,
      range: indexUiState.range,
      sortBy: indexUiState.sortBy,
      hitsPerPage: indexUiState.hitsPerPage,
    };
  },
  routeToState(routeState: RouteState) {
    return {
      properties: {
        query: routeState.q,
        page: routeState.p,
        refinementList: routeState.refinementList,
        range: routeState.range,
        sortBy: routeState.sortBy,
        hitsPerPage: routeState.hitsPerPage,
      },
    };
  },
};

export default function Search() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  return (
    <InstantSearchNext
      searchClient={typesenseInstantsearchAdapter.searchClient}
      indexName="properties"
      future={{
        preserveSharedStateOnUnmount: true,
      }}
      initialUiState={{
        properties: {
          query: "",
          page: 1,
          hitsPerPage: 12,
          sortBy: "properties",
          refinementList: {},
          range: {},
        },
      }}
      routing={{
        stateMapping: uiStateMapping,
      }}
    >
      <Configure
        facets={[...FACET_ORDER]}
        disjunctiveFacets={[
          "county",
          "zone",
          "parish",
          "category_name",
          "sub_category_name",
          "state_id",
          "equipments",
          "surroundings",
          "business_type_id",
        ]}
        maxValuesPerFacet={1000}
        hitsPerPage={12}
      />

      <div className="flex flex-col px-2 lg:px-0">
        <div className="flex justify-end gap-3 items-end">
          <CurrentRefinements />
          <SortBy items={sortByItems} />
          <HitsPerPageSelect items={hitsPerPageItems} />
        </div>
        <div className="flex">
          <aside className="xl:flex flex-col gap-3 mr-10 mt-16 hidden">
            {FACET_ORDER.map((attribute) => (
              <Facet key={attribute} attribute={attribute} />
            ))}
          </aside>
          <div className="flex-1 flex-col">
            <SearchBox placeholder="Search properties..." />
            <InfiniteHits />
          </div>
        </div>
      </div>
    </InstantSearchNext>
  );
}
