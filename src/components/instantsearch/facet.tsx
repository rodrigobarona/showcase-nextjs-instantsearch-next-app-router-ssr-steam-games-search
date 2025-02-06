"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { attributeLabelMap } from "@/lib/schema";
import type React from "react";
import { NumericMenu } from "./numeric-menu";
import { RangeFilter } from "./range-menu";
import { RefinementList } from "./refinement-list";

interface FacetProps {
  attribute: string;
}

const MULTI_SELECT_ATTRIBUTES = [
  "county",
  "zone",
  "parish",
  "category_name",
  "category_name_en",
  "category_name_fr",
  "sub_category_name",
];

const SINGLE_SELECT_ATTRIBUTES = ["business_type_id", "availability_ids"];
const NUMERIC_RANGE_FILTERS = ["price"];
const NUMERIC_MENU_ATTRIBUTES = ["rooms", "bathrooms", "parking_spaces"];

const Facet: React.FC<FacetProps> = ({ attribute }) => {
  const getLabel = (attr: string): string => {
    return attributeLabelMap[attr as keyof typeof attributeLabelMap] || attr;
  };

  const renderFacetContent = () => {
    if (!attribute) return null;

    // Multi-select facets (OR logic)
    if (MULTI_SELECT_ATTRIBUTES.includes(attribute)) {
      return (
        <AccordionItem value={attribute}>
          <AccordionTrigger className="text-xl font-semibold">
            {getLabel(attribute)}
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-60 overflow-y-auto">
              <RefinementList
                attribute={attribute}
                limit={10}
                operator="or"
                showMore
                showMoreLimit={50}
                sortBy={["count:desc", "name:asc"]}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    }

    // Single-select facets (AND logic)
    if (SINGLE_SELECT_ATTRIBUTES.includes(attribute)) {
      return (
        <AccordionItem value={attribute}>
          <AccordionTrigger className="text-xl font-semibold">
            {getLabel(attribute)}
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-60 overflow-y-auto">
              <RefinementList
                attribute={attribute}
                limit={10}
                operator="and"
                showMore
                showMoreLimit={50}
                sortBy={["count:desc"]}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    }

    // Numeric range filters
    if (NUMERIC_RANGE_FILTERS.includes(attribute)) {
      return (
        <AccordionItem value={attribute}>
          <AccordionTrigger className="text-xl font-semibold">
            {getLabel(attribute)}
          </AccordionTrigger>
          <AccordionContent>
            <RangeFilter attribute={attribute} />
          </AccordionContent>
        </AccordionItem>
      );
    }

    // Numeric menu filters with custom ranges
    if (NUMERIC_MENU_ATTRIBUTES.includes(attribute)) {
      let items: { label: string; start?: number; end?: number }[] = [];
      if (attribute === "rooms") {
        items = [
          { label: "Studio", end: 1 },
          { label: "1-2", start: 1, end: 2 },
          { label: "3-4", start: 3, end: 4 },
          { label: "5+", start: 5 },
        ];
      } else if (attribute === "bathrooms") {
        items = [
          { label: "Any", end: 5 },
          { label: "1+", start: 1 },
          { label: "2+", start: 2 },
          { label: "3+", start: 3 },
        ];
      } else if (attribute === "parking_spaces") {
        items = [
          { label: "Any", end: 5 },
          { label: "1+", start: 1 },
          { label: "2+", start: 2 },
          { label: "3+", start: 3 },
        ];
      }
      return (
        <AccordionItem value={attribute}>
          <AccordionTrigger className="text-xl font-semibold">
            {getLabel(attribute)}
          </AccordionTrigger>
          <AccordionContent>
            <NumericMenu attribute={attribute} items={items} />
          </AccordionContent>
        </AccordionItem>
      );
    }

    return null;
  };

  const facetContent = renderFacetContent();
  return facetContent ? (
    <Card className="p-4 w-72 overflow-hidden relative">
      <Accordion type="single" collapsible defaultValue={attribute}>
        {facetContent}
      </Accordion>
    </Card>
  ) : null;
};

export { Facet };
