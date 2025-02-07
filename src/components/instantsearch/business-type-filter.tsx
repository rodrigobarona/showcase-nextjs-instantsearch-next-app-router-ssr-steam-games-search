"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useQueryState } from "nuqs";
import { useRefinementList, type UseRefinementListProps } from "react-instantsearch";

const BUSINESS_TYPES = [
  { value: "sale", label: "Buy" },
  { value: "lease", label: "Rent" },
] as const;

export function BusinessTypeFilter(props: UseRefinementListProps) {
  const { items, refine } = useRefinementList({
    ...props,
    attribute: "business_type_id",
    operator: "and", // Ensure strict matching
  });
  const [businessType, setBusinessType] = useQueryState("business_type");

  // Create a map of existing items for easy lookup using lower-case keys
  const itemsMap = new Map(items.map((item) => [item.value.toLowerCase(), item]));

  // Find the currently refined item
  const refinedItem = items.find((item) => item.isRefined);

  // Get current value from URL or refined item, without a default fallback
  const currentValue = businessType || (refinedItem?.value.toLowerCase() ?? "");

  return (
    <ToggleGroup
      type="single"
      className="w-full"
      value={currentValue}
      onValueChange={(value) => {
        if (!value) return;

        // Clear any existing refinement first
        items.forEach((item) => {
          if (item.isRefined) {
            refine(item.value);
          }
        });

        // Only apply new refinement if it's different from what was cleared
        const newItem = items.find((item) => item.value.toLowerCase() === value.toLowerCase());
        if (newItem) {
          refine(newItem.value);
          setBusinessType(value);
        }
      }}
    >
      {BUSINESS_TYPES.map(({ value, label }) => {
        const item = itemsMap.get(value);
        const count = item?.count || 0;
        const isSelected = value === currentValue;
        return (
          <ToggleGroupItem
            key={value}
            value={value}
            className="flex-1 text-sm"
            aria-label={`Filter by ${label}`}
          >
            {label}
            {isSelected && count > 0 ? ` (${count})` : ""}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
