"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { UseRefinementListProps } from "react-instantsearch";
import { useRefinementList } from "react-instantsearch";

export function RefinementList(props: UseRefinementListProps) {
  const { items, refine } = useRefinementList(props);

  // If there are no items and this isn't just an empty result,
  // it likely means there's an issue with the facet
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.value} className="flex items-center space-x-2">
          <Checkbox
            id={`${props.attribute}-${item.value}`}
            checked={item.isRefined}
            onCheckedChange={() => refine(item.value)}
          />
          <Label htmlFor={`${props.attribute}-${item.value}`}>
            {item.label} ({item.count})
          </Label>
        </div>
      ))}
    </div>
  );
}
