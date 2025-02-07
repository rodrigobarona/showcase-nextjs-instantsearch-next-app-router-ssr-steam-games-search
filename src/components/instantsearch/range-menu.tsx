"use client";

import { Slider } from "@/components/ui/slider";
import { formatNumber } from "@/lib/utils";
import { useRange, type UseRangeProps } from "react-instantsearch";

interface RangeFilterProps extends UseRangeProps {
  attribute: string;
}

export function RangeFilter({ attribute }: RangeFilterProps) {
  const { range, refine, start, canRefine } = useRange({
    attribute,
  });

  if (!canRefine) return null;

  const { min = 0, max = 0 } = range;
  const [minValue, maxValue] = start;

  const handleChange = (values: number[]) => {
    // Ensure we always have exactly two values
    const [newMin = min, newMax = max] = values;
    refine([newMin, newMax]);
  };

  return (
    <div className="px-2">
      <div className="flex justify-between mb-2 text-sm">
        <span>€{formatNumber(minValue || min)}</span>
        <span>€{formatNumber(maxValue || max)}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={1000}
        value={[minValue || min, maxValue || max]}
        onValueChange={handleChange}
        className="my-4"
      />
    </div>
  );
}
