"use client";

import { useFacetSync } from "@/hooks/useFacetState";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import React from "react";
import { useRefinementList, type UseRefinementListProps } from "react-instantsearch";

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
  const { updateFacets } = useFacetSync();
  const initialized = React.useRef(false);

  // Create a map of existing items for easy lookup using lower-case keys
  const itemsMap = new Map(items.map((item) => [item.value.toLowerCase(), item]));

  // Handle initial sync with URL and InstantSearch
  React.useEffect(() => {
    if (!initialized.current && items.length > 0) {
      initialized.current = true;
      const initialValue = businessType || "sale";

      // Clear any existing refinements
      for (const item of items) {
        if (item.isRefined) {
          refine(item.value);
        }
      }

      // Apply the initial value and ensure URL is updated
      const targetItem = items.find(
        (item) => item.value.toLowerCase() === initialValue.toLowerCase(),
      );
      if (targetItem) {
        refine(targetItem.value);
        setBusinessType(initialValue, { shallow: true });
        updateFacets({ business_type: initialValue });
      } else {
        // If no matching item found, default to "sale"
        const saleItem = items.find((item) => item.value.toLowerCase() === "sale");
        if (saleItem) {
          refine(saleItem.value);
          setBusinessType("sale", { shallow: true });
          updateFacets({ business_type: "sale" });
        }
      }
    }
  }, [businessType, items, refine, setBusinessType, updateFacets]);

  // Ensure we always have a current value
  const currentValue = businessType || "sale";

  const handleValueChange = (value: string) => {
    // Don't do anything if clicking the already selected value
    if (value === currentValue) return;

    // Clear any existing refinements
    for (const item of items) {
      if (item.isRefined) {
        refine(item.value);
      }
    }

    // Apply the new refinement
    const newItem = items.find((item) => item.value.toLowerCase() === value.toLowerCase());
    if (newItem) {
      refine(newItem.value);
      setBusinessType(value, { shallow: true });
      updateFacets({ business_type: value });
    }
  };

  return (
    <div className="flex w-full rounded-md bg-muted p-1">
      {BUSINESS_TYPES.map(({ value, label }) => {
        const item = itemsMap.get(value);
        const count = item?.count || 0;
        const isSelected = value === currentValue;

        return (
          <button
            key={value}
            type="button"
            onClick={() => handleValueChange(value)}
            className={cn(
              "inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              isSelected
                ? "bg-background text-foreground shadow-sm"
                : "hover:bg-background/50 hover:text-foreground",
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
