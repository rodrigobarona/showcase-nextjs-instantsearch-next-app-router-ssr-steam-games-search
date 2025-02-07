"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToggleRefinement, type UseToggleRefinementProps } from "react-instantsearch";

interface ToggleRefinementProps extends UseToggleRefinementProps {
  label: string;
}

export function ToggleRefinement({ label, ...props }: ToggleRefinementProps) {
  const { refine, value } = useToggleRefinement(props);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={`toggle-${props.attribute}`}
        checked={value.isRefined}
        onCheckedChange={() => refine({ isRefined: !value.isRefined })}
      />
      <Label htmlFor={`toggle-${props.attribute}`}>{label}</Label>
    </div>
  );
}
