"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { attributeLabelMap } from "@/lib/schema";
import { NumericMenu } from "./numeric-menu";
import { RangeFilter } from "./range-menu";
import { RefinementList } from "./refinement-list";

interface FacetProps {
  attribute: string;
}

const Facet: React.FC<FacetProps> = ({ attribute }) => {
  const renderFacet = () => {
    if (!attribute) return null;

    try {
      switch (attribute) {
        // Price Filter
        case "price":
          return (
            <AccordionItem value={attribute}>
              <AccordionTrigger className="text-xl font-semibold">
                {attributeLabelMap[attribute]}
              </AccordionTrigger>
              <AccordionContent>
                <RangeFilter attribute={attribute} />
              </AccordionContent>
            </AccordionItem>
          );

        // Numeric Filters with Custom Ranges
        case "rooms":
          return (
            <AccordionItem value={attribute}>
              <AccordionTrigger className="text-xl font-semibold">
                {attributeLabelMap[attribute]}
              </AccordionTrigger>
              <AccordionContent>
                <NumericMenu
                  attribute={attribute}
                  items={[
                    { label: "Studio", end: 1 },
                    { label: "1-2", start: 1, end: 2 },
                    { label: "3-4", start: 3, end: 4 },
                    { label: "5+", start: 5 },
                  ]}
                />
              </AccordionContent>
            </AccordionItem>
          );

        case "bathrooms":
        case "parking_spaces":
          return (
            <AccordionItem value={attribute}>
              <AccordionTrigger className="text-xl font-semibold">
                {attributeLabelMap[attribute]}
              </AccordionTrigger>
              <AccordionContent>
                <NumericMenu
                  attribute={attribute}
                  items={[
                    { label: "Any", end: 5 },
                    { label: "1+", start: 1 },
                    { label: "2+", start: 2 },
                    { label: "3+", start: 3 },
                  ]}
                />
              </AccordionContent>
            </AccordionItem>
          );

        // List Filters
        case "category_name":
        case "county":
        case "zone":
        case "parish":
        case "state":
        case "business_type_id":
        case "availability_id":
        case "is_exclusive":
          return (
            <AccordionItem value={attribute}>
              <AccordionTrigger className="text-xl font-semibold">
                {attributeLabelMap[attribute]}
              </AccordionTrigger>
              <AccordionContent>
                <div className="max-h-60 overflow-y-auto">
                  <RefinementList attribute={attribute} limit={1000} />
                </div>
              </AccordionContent>
            </AccordionItem>
          );

        default:
          return null;
      }
    } catch (err) {
      console.error(`Error rendering facet for attribute: ${attribute}`, err);
      return null;
    }
  };

  const facetContent = renderFacet();
  return facetContent ? (
    <Card className="p-4 w-72 overflow-hidden relative">
      <Accordion type="single" collapsible defaultValue={attribute}>
        {facetContent}
      </Accordion>
    </Card>
  ) : null;
};

export { Facet };
