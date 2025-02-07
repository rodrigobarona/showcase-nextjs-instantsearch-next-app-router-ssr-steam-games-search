"use client";

import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import { useRefinementList, type UseRefinementListProps } from "react-instantsearch";
import React from "react";

const BUSINESS_TYPES = [
  { value: "sale", label: "Buy" },
  { value: "lease", label: "Rent" },
] as const;

export function BusinessTypeFilter(props: UseRefinementListProps) {
  const { items, refine } = useRefinementList({
    ...props,
    attribute: "business_type_id",
    operator: "and",
  });
  const [businessType, setBusinessType] = useQueryState("business_type");

  // Create a map of existing items for easy lookup using lower-case keys
  const itemsMap = new Map(items.map((item) => [item.value.toLowerCase(), item]));

  // Default to "sale" if no value is selected
  const currentValue = businessType || "sale";

  // Ensure a value is always selected on mount
  React.useEffect(() => {
    if (!businessType) {
      setBusinessType("sale");
      const saleItem = items.find((item) => item.value.toLowerCase() === "sale");
      if (saleItem && !saleItem.isRefined) {
        refine(saleItem.value);
      }
    }
  }, [businessType, items, refine, setBusinessType]);

  return (
    <div className="flex w-full rounded-md bg-muted p-1">
      {BUSINESS_TYPES.map(({ value, label }) => {
        const item = itemsMap.get(value);
        const count = item?.count || 0;
        const isSelected = value === currentValue;

        return (
          <button
            key={value}
            onClick={() => {
              // Clear any existing refinement first
              for (const item of items) {
                if (item.isRefined) {
                  refine(item.value);
                }
              }

              // Apply the new refinement
              const newItem = items.find((item) => item.value.toLowerCase() === value.toLowerCase());
              if (newItem) {
                refine(newItem.value);
                setBusinessType(value);
              }
            }}
            className={cn(
              "inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              isSelected
                ? "bg-background text-foreground shadow-sm"
                : "hover:bg-background/50 hover:text-foreground"
            )}
          >
            {label}
            {isSelected && count > 0 ? ` (${count})` : ""}
          </button>
        );
      })}
    </div>
  );
}
