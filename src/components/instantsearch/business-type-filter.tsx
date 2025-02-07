"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRefinementList, type UseRefinementListProps } from "react-instantsearch";

const BUSINESS_TYPES = [
  { value: "sale", label: "Buy" },
  { value: "lease", label: "Rent" },
] as const;

export function BusinessTypeFilter(props: UseRefinementListProps) {
  const { items, refine } = useRefinementList(props);

  // Create a map of existing items for easy lookup
  const itemsMap = new Map(items.map((item) => [item.value.toLowerCase(), item]));

  return (
    <ToggleGroup
      type="single"
      className="w-full"
      onValueChange={(value) => {
        // If the same value is clicked, unrefine
        if (!value) {
          for (const item of items) {
            if (item.isRefined) {
              refine(item.value);
            }
          }
          return;
        }
        // Otherwise refine the selected value
        for (const item of items) {
          if (item.isRefined && item.value !== value) {
            refine(item.value);
          }
          if (!item.isRefined && item.value === value) {
            refine(item.value);
          }
        }
      }}
      value={items.find((item) => item.isRefined)?.value || ""}
    >
      {BUSINESS_TYPES.map(({ value, label }) => {
        const item = itemsMap.get(value);
        return (
          <ToggleGroupItem
            key={value}
            value={value}
            className="flex-1 text-sm"
            aria-label={`Filter by ${label}`}
          >
            {label} ({item?.count || 0})
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
