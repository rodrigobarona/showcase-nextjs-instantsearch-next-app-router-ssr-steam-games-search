"use client";

import { BusinessTypeFilter } from "@/components/instantsearch/business-type-filter";
import { DateRangeFilter } from "@/components/instantsearch/date-range-filter";
import { NumericToggleFilter } from "@/components/instantsearch/numeric-toggle-filter";
import { RangeFilter } from "@/components/instantsearch/range-menu";
import { ToggleRefinement } from "@/components/instantsearch/toggle-refinement";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { attributeLabelMap } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { RefinementList } from "react-instantsearch";

// Define the order of facets
export const FACET_ORDER = [
  "business_type_id",
  "rooms",
  "price",
  "county",
  "zone",
  "parish",
  "category_name",
  "sub_category_name",
  "state_id",
  "equipments",
  "bathrooms",
  "gross_build_area",
  "gross_private_area",
  "parking_spaces",
  "is_exclusive",
  "surroundings",
  "published_at",
] as const;

type FacetAttribute = (typeof FACET_ORDER)[number];

// Multi-select facets
const MULTI_SELECT_FACETS = [
  "business_type_id",
  "category_name",
  "sub_category_name",
  "equipments",
  "surroundings",
] as const satisfies readonly FacetAttribute[];

// Single-select facets
const SINGLE_SELECT_FACETS = [
  "state_id",
  "county",
  "zone",
  "parish",
] as const satisfies readonly FacetAttribute[];

// Numeric range filters
const RANGE_FILTERS = [
  "price",
  "gross_build_area",
  "gross_private_area",
] as const satisfies readonly FacetAttribute[];

// Numeric menu attributes
const NUMERIC_MENU_ATTRIBUTES = [
  "rooms",
  "bathrooms",
  "parking_spaces",
] as const satisfies readonly FacetAttribute[];

// Toggle attributes
const TOGGLE_ATTRIBUTES = ["is_exclusive"] as const satisfies readonly FacetAttribute[];

// Date range attributes
const DATE_RANGE_ATTRIBUTES = ["published_at"] as const satisfies readonly FacetAttribute[];

interface FacetProps {
  attribute: FacetAttribute;
}

export function Facet({ attribute }: FacetProps) {
  const [isOpen, setIsOpen] = useState(true);
  // Get the label for the attribute
  const label = attributeLabelMap[attribute as keyof typeof attributeLabelMap] || attribute;

  const renderFacetContent = () => {
    // Business type toggle
    if (attribute === "business_type_id") {
      return <BusinessTypeFilter attribute={attribute} operator="or" />;
    }

    // Rooms toggle
    if (attribute === "rooms") {
      return <NumericToggleFilter attribute={attribute} type="rooms" />;
    }

    // Bathrooms toggle
    if (attribute === "bathrooms") {
      return <NumericToggleFilter attribute={attribute} type="bathrooms" />;
    }

    // Multi-select facets
    if ((MULTI_SELECT_FACETS as readonly string[]).includes(attribute)) {
      return (
        <RefinementList attribute={attribute} operator="or" showMore={true} className="space-y-2" />
      );
    }

    // Single-select facets
    if ((SINGLE_SELECT_FACETS as readonly string[]).includes(attribute)) {
      return (
        <RefinementList
          attribute={attribute}
          operator="and"
          showMore={true}
          className="space-y-2"
        />
      );
    }

    // Range filters
    if ((RANGE_FILTERS as readonly string[]).includes(attribute)) {
      return <RangeFilter attribute={attribute} />;
    }

    // Numeric menu attributes
    if ((NUMERIC_MENU_ATTRIBUTES as readonly string[]).includes(attribute)) {
      return (
        <RefinementList attribute={attribute} operator="or" showMore={true} className="space-y-2" />
      );
    }

    // Toggle attributes
    if ((TOGGLE_ATTRIBUTES as readonly string[]).includes(attribute)) {
      return <ToggleRefinement attribute={attribute} label={label} on="true" off="false" />;
    }

    // Date range attributes
    if ((DATE_RANGE_ATTRIBUTES as readonly string[]).includes(attribute)) {
      return <DateRangeFilter attribute={attribute} />;
    }

    return null;
  };

  const content = renderFacetContent();
  if (!content) return null;

  return (
    <Card className="w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors">
            <h3 className="text-sm font-medium">{label}</h3>
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", isOpen && "transform rotate-180")}
            />
          </div>
        </CollapsibleTrigger>
        <Separator />
        <CollapsibleContent>
          <div className="p-4">{content}</div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
