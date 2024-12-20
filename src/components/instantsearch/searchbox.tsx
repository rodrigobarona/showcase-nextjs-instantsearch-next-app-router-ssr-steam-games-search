"use client";
import { Input } from "@/components/ui/input";
import type { SearchBoxProps } from "react-instantsearch";
import { useSearchBox } from "react-instantsearch";

export const SearchBox = (props: SearchBoxProps) => {
  const { refine, query } = useSearchBox(props);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Input
        type="text"
        className="my-4 bg-background"
        onChange={(event) => refine(event.currentTarget.value)}
        placeholder="Search properties..."
        value={query}
      />
    </form>
  );
};
