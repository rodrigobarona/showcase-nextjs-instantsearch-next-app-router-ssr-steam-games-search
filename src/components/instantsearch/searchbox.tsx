"use client";
import { Input } from "@/components/ui/input";
import { useFacetSync } from "@/hooks/useFacetState";
import type { SearchBoxProps } from "react-instantsearch";
import { useInstantSearch, useSearchBox } from "react-instantsearch";

export const SearchBox = (props: SearchBoxProps) => {
  const { refine } = useSearchBox(props);
  const { facetState, updateFacets } = useFacetSync();
  const { setIndexUiState } = useInstantSearch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    // Update the Nuqs state, which syncs with the URL
    updateFacets({ q: val });

    // Update InstantSearch state
    setIndexUiState((state) => ({
      ...state,
      query: val,
      // Preserve other refinements
      refinementList: {
        ...state.refinementList,
      },
    }));
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Input
        type="text"
        className="my-4 bg-background border rounded-lg p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        onChange={handleChange}
        placeholder="Search properties..."
        value={facetState.q || ""}
      />
    </form>
  );
};
