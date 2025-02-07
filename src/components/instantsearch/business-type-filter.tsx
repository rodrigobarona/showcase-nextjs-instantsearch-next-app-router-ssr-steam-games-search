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
  });
  const [businessType, setBusinessType] = useQueryState("business_type");

  // Create a map of existing items for easy lookup
  const itemsMap = new Map(items.map((item) => [item.value.toLowerCase(), item]));

  // Get the current value, defaulting to "sale" if none is selected
  const currentValue = businessType || items.find((item) => item.isRefined)?.value || "sale";

  return (
    <ToggleGroup
      type="single"
      className="w-full"
      value={currentValue}
      onValueChange={(value) => {
        // If trying to unselect (value is empty) or selecting the same value, do nothing
        if (!value || value === currentValue) {
          return;
        }

        // Update URL state
        setBusinessType(value);

        // Unrefine the current value if it's different
        const currentItem = items.find((item) => item.isRefined);
        if (currentItem && currentItem.value !== value) {
          refine(currentItem.value);
        }

        // Refine the new value
        const newItem = items.find((item) => item.value === value);
        if (newItem && !newItem.isRefined) {
          refine(newItem.value);
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
