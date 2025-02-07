"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useFacetSync } from "@/hooks/useFacetState";
import { useQueryState } from "nuqs";
import { useNumericMenu, type UseNumericMenuProps } from "react-instantsearch";

interface NumericOption {
  label: string;
  value: string;
  start?: number;
  end?: number;
}

// For rooms we remove "Any" and use "Studio", "1", "2", "3" and "4+"
// "Studio" means properties with 0 rooms (i.e. a studio apartment),
// while leaving the unselected state to show all properties.
const ROOM_OPTIONS: NumericOption[] = [
  { label: "Studio", value: "eq0", start: 0, end: 0 },
  { label: "1", value: "eq1", start: 1, end: 1 },
  { label: "2", value: "eq2", start: 2, end: 2 },
  { label: "3", value: "eq3", start: 3, end: 3 },
  { label: "4+", value: "gte4", start: 4 },
];

// For bathrooms we remove "Any" and use "1+", "2+", "3+", and "4+"
// When nothing is selected the filter is cleared so all results are shown.
const BATHROOM_OPTIONS: NumericOption[] = [
  { label: "1", value: "eq1", start: 1, end: 1 },
  { label: "2", value: "eq2", start: 2, end: 2 },
  { label: "3", value: "eq3", start: 3, end: 3 },
  { label: "4+", value: "gte4", start: 4 },
];

type NumericToggleFilterProps = Omit<UseNumericMenuProps, "items"> & {
  type: "rooms" | "bathrooms";
};

export function NumericToggleFilter({ type, ...props }: NumericToggleFilterProps) {
  const options = type === "rooms" ? ROOM_OPTIONS : BATHROOM_OPTIONS;
  const { items, refine } = useNumericMenu({
    ...props,
    items: options,
  });
  // useQueryState holds the string-based value from the URL.
  const [value, setValue] = useQueryState(type);
  const { updateFacets } = useFacetSync();

  // Determine the controlled value. If no value is set in the querystring,
  // then we check if InstantSearch has any item refined.
  let controlledValue: string | undefined;
  if (typeof value === "string") {
    controlledValue = value;
  } else {
    controlledValue = items.find((item) => item.isRefined)?.value;
  }

  return (
    <ToggleGroup
      type="single"
      className="w-full flex flex-wrap gap-1"
      onValueChange={(newValue) => {
        if (newValue === controlledValue) {
          // If already selected, clear the filter on both sides.
          setValue(undefined);
          updateFacets({ [type]: "all" });
          refine(""); // Passing an empty string clears the numeric filter in InstantSearch.
        } else {
          // Set the new filter and update facet state.
          setValue(newValue);
          updateFacets({ [type]: newValue });
          refine(newValue);
        }
      }}
      value={controlledValue}
    >
      {items.map((item) => (
        <ToggleGroupItem
          key={item.value}
          value={item.value}
          className="flex-1 text-sm min-w-[60px]"
          aria-label={`Filter by ${item.label} ${type}`}
        >
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
