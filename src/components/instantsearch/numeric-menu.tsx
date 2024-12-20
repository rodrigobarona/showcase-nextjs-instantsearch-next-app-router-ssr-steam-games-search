"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNumericMenu, type UseNumericMenuProps } from "react-instantsearch";

export const NumericMenu = (props: UseNumericMenuProps) => {
  const { items, refine } = useNumericMenu(props);

  return (
    <RadioGroup onValueChange={(value) => refine(value)}>
      {items.map((item) => (
        <div className="flex items-center space-x-2" key={item.value}>
          <RadioGroupItem id={item.value} value={item.value} checked={item.isRefined} />
          <Label htmlFor={item.value}>{item.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};
