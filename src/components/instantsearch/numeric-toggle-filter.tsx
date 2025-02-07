"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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

const BATHROOM_OPTIONS: NumericOption[] = [
  { label: "Any", value: "all" },
  { label: "1+", value: "gte1", start: 1 },
  { label: "2+", value: "gte2", start: 2 },
  { label: "3+", value: "gte3", start: 3 },
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
  // For rooms, we want the unselected state (showing all results) to be empty.
  const [value, setValue] = useQueryState(type);

  // Determine the controlled value. If no value is set in the querystring,
  // then we check if instantsearch has any item refined.
  // For bathrooms we default to "all" when nothing is refined.
  let controlledValue: string | undefined;
  if (typeof value === "string") {
    controlledValue = value;
  } else {
    controlledValue = items.find((item) => item.isRefined)?.value;
    if (!controlledValue && type === "bathrooms") {
      controlledValue = "all";
    }
  }

  return (
    <ToggleGroup
      type="single"
      className="w-full flex flex-wrap gap-1"
      onValueChange={(newValue) => {
        if (newValue === controlledValue) {
          // If already selected, clear the filter (like unchecking a checkbox)
          setValue(undefined);
          refine(""); // Passing an empty string to clear the numeric filter
        } else {
          setValue(newValue);
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
