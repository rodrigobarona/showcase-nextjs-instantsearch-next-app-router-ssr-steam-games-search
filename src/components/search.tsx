"use client";

import { CurrentRefinements } from "@/components/instantsearch/current-refinements";
import { Facet, FACET_ORDER } from "@/components/instantsearch/facet";
import { HitsPerPageSelect } from "@/components/instantsearch/hits-per-page-select";
import { InfiniteHits } from "@/components/instantsearch/infinite-hits";
import { SearchBox } from "@/components/instantsearch/searchbox";
import { SortBy } from "@/components/instantsearch/sort-by";
import { useFacetSync } from "@/hooks/useFacetState";
import { typesenseConfig } from "@/lib/typesense";
import { useEffect, useRef, useState } from "react";
import { Configure, useInstantSearch } from "react-instantsearch";
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
  { label: "Bathrooms", value: "properties/sort/bathrooms:desc" },
  { label: "Area (Low to High)", value: "properties/sort/gross_private_area:asc" },
  { label: "Area (High to Low)", value: "properties/sort/gross_private_area:desc" },
  { label: "Parking Spaces", value: "properties/sort/parking_spaces:desc" },
];

interface SearchProps {
  initialParams?: Record<string, string | number | boolean>;
}

function SearchContent() {
  const { uiState } = useInstantSearch();
  const { updateFacets } = useFacetSync();
  const prevStateRef = useRef<typeof uiState.properties>();

  useEffect(() => {
    const currentState = uiState.properties || {};

    // Skip the first render and if the state hasn't changed
    if (!currentState || JSON.stringify(prevStateRef.current) === JSON.stringify(currentState)) {
      return;
    }

    // Helper function to format range values
    const formatRange = (range: number[] | undefined) => {
      if (!range || range.length !== 2) return "";
      return `${range[0]}-${range[1]}`;
    };

    // Update URL state when search state changes
    updateFacets({
      q: currentState.query || "",
      business_type: currentState.refinementList?.business_type_id?.[0] || "",
      rooms: currentState.refinementList?.rooms?.[0] || "all",
      bathrooms: currentState.refinementList?.bathrooms?.[0] || "all",
      price_range: formatRange(currentState.range?.price as number[] | undefined),
      county: currentState.refinementList?.county?.[0] || "",
      zone: currentState.refinementList?.zone?.[0] || "",
      parish: currentState.refinementList?.parish?.[0] || "",
      category: currentState.refinementList?.category_name?.[0] || "",
      sub_category: currentState.refinementList?.sub_category_name?.[0] || "",
      state: currentState.refinementList?.state_id?.[0] || "",
      equipments: currentState.refinementList?.equipments?.[0] || "",
      gross_build_area: formatRange(currentState.range?.gross_build_area as number[] | undefined),
      gross_private_area: formatRange(
        currentState.range?.gross_private_area as number[] | undefined,
      ),
      parking: currentState.refinementList?.parking_spaces?.[0] || "",
      is_exclusive: currentState.refinementList?.is_exclusive?.[0] === "true",
      surroundings: currentState.refinementList?.surroundings?.[0] || "",
      published_at: formatRange(currentState.range?.published_at as number[] | undefined),
      sortBy: currentState.sortBy || "properties",
      hitsPerPage: currentState.hitsPerPage || 12,
    });

    // Update the ref after the state has been updated
    prevStateRef.current = currentState;
  }, [uiState.properties, updateFacets]);

  return (
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
  );
}

export default function Search({ initialParams }: SearchProps) {
  const [mounted, setMounted] = useState(false);
  const { facetState, setFacetState } = useFacetSync();

  useEffect(() => {
    setMounted(true);
    if (initialParams) {
      setFacetState(initialParams);
    }
  }, [initialParams, setFacetState]);

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
          query: facetState.q || "",
          page: 1,
          hitsPerPage: Number(facetState.hitsPerPage) || 12,
          sortBy: facetState.sortBy || "properties",
          refinementList: {
            business_type_id: facetState.business_type ? [facetState.business_type] : [],
            rooms: facetState.rooms !== "all" ? [facetState.rooms] : [],
            bathrooms: facetState.bathrooms !== "all" ? [facetState.bathrooms] : [],
          },
          range: {},
        },
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
      <SearchContent />
    </InstantSearchNext>
  );
}
