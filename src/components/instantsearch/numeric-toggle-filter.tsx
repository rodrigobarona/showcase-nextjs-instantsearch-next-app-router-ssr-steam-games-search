"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useNumericMenu, type UseNumericMenuProps } from "react-instantsearch";

interface NumericOption {
  label: string;
  value: string;
  start?: number;
  end?: number;
}

const ROOM_OPTIONS: NumericOption[] = [
  { label: "Any", value: "all" },
  { label: "1+", value: "gte1", start: 1 },
  { label: "2+", value: "gte2", start: 2 },
  { label: "3+", value: "gte3", start: 3 },
  { label: "4+", value: "gte4", start: 4 },
  { label: "5+", value: "gte5", start: 5 },
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

  return (
    <ToggleGroup
      type="single"
      className="w-full flex flex-wrap gap-1"
      onValueChange={(value) => {
        const selectedItem = items.find((item) => item.value === value);
        if (selectedItem) {
          refine(selectedItem.value);
        }
      }}
      value={items.find((item) => item.isRefined)?.value || "all"}
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
