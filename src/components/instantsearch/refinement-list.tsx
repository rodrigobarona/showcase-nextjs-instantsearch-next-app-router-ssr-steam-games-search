"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRefinementList, type UseRefinementListProps } from "react-instantsearch";

export function RefinementList(props: UseRefinementListProps) {
  const { items, refine } = useRefinementList(props);

  // Normalize and merge items with the same name (case-insensitive)
  const normalizedItems = items.reduce(
    (acc, item) => {
      const normalizedLabel = item.label.toLowerCase();
      const existingItem = acc.find((i) => i.normalizedLabel === normalizedLabel);

      if (existingItem) {
        existingItem.count += item.count;
      } else {
        acc.push({
          ...item,
          normalizedLabel,
          // Keep the best-looking version of the label (prefer Title Case)
          label: items
            .filter((i) => i.label.toLowerCase() === normalizedLabel)
            .reduce((best, current) => {
              // Prefer labels that are Title Case or contain 'E' (for Portuguese)
              if (
                current.label.includes(" E ") ||
                (current.label !== current.label.toLowerCase() &&
                  current.label !== current.label.toUpperCase())
              ) {
                return current.label;
              }
              return best;
            }, item.label),
        });
      }
      return acc;
    },
    [] as ((typeof items)[0] & { normalizedLabel: string })[],
  );

  // Sort items if sortBy is provided
  if (props.sortBy?.includes("name:asc")) {
    normalizedItems.sort((a, b) => a.normalizedLabel.localeCompare(b.normalizedLabel));
  }

  return (
    <div className="space-y-2">
      {normalizedItems.map((item) => (
        <div key={item.value} className="flex items-center space-x-2">
          <Checkbox
            id={item.value}
            checked={item.isRefined}
            onCheckedChange={() => refine(item.value)}
          />
          <Label htmlFor={item.value} className="text-sm">
            {item.label} ({item.count})
          </Label>
        </div>
      ))}
    </div>
  );
}
