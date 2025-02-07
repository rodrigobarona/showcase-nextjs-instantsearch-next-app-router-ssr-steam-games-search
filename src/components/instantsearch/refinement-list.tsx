"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import type { UseRefinementListProps } from "react-instantsearch";
import { useRefinementList } from "react-instantsearch";

const INITIAL_LIMIT = 10;
const SHOW_MORE_LIMIT = 200;

export function RefinementList(props: UseRefinementListProps) {
  const [showingMore, setShowingMore] = useState(false);
  const { items, refine } = useRefinementList({
    ...props,
    limit: showingMore ? SHOW_MORE_LIMIT : INITIAL_LIMIT,
  });

  // If there are no items and this isn't just an empty result,
  // it likely means there's an issue with the facet
  if (items.length === 0) {
    return null;
  }

  const refinementList = (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.value} className="flex items-center space-x-2">
          <Checkbox
            id={`${props.attribute}-${item.value}`}
            checked={item.isRefined}
            onCheckedChange={() => refine(item.value)}
          />
          <Label
            htmlFor={`${props.attribute}-${item.value}`}
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.label} ({item.count})
          </Label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-2">
      <ScrollArea className="h-[200px] rounded-md">{refinementList}</ScrollArea>
      {items.length > INITIAL_LIMIT && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowingMore(!showingMore)}
          className="w-full text-xs hover:bg-accent hover:text-accent-foreground"
        >
          {showingMore ? "Show less" : `Show more (${items.length - INITIAL_LIMIT} more)`}
        </Button>
      )}
    </div>
  );
}
