"use client";
import { useHitsPerPage, type UseHitsPerPageProps } from "react-instantsearch";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HitsPerPageSelect(props: UseHitsPerPageProps) {
  const { items, refine } = useHitsPerPage(props);

  return (
    <Select
      onValueChange={(value) => refine(Number(value))}
      value={String(items.find((item) => item.isRefined)?.value || items[0].value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select hits per page" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={String(item.value)}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
