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
  // Helper function to get the label safely
  const getLabel = (attr: string): string => {
    return (attributeLabelMap as Record<string, string>)[attr] || attr;
  };

  const renderFacet = () => {
    if (!attribute) return null;

    try {
      // Multi-select facets (OR logic)
      if (
        [
          // Location facets
          "county",
          "zone",
          "parish",
          // Category facets
          "category_name",
          "category_name_en",
          "category_name_fr",
          "sub_category_name",
        ].includes(attribute)
      ) {
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
      if (["business_type_id", "availability_ids"].includes(attribute)) {
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
      if (["price"].includes(attribute)) {
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
      switch (attribute) {
        case "rooms":
          return (
            <AccordionItem value={attribute}>
              <AccordionTrigger className="text-xl font-semibold">
                {getLabel(attribute)}
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
          return (
            <AccordionItem value={attribute}>
              <AccordionTrigger className="text-xl font-semibold">
                {getLabel(attribute)}
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

        case "parking_spaces":
          return (
            <AccordionItem value={attribute}>
              <AccordionTrigger className="text-xl font-semibold">
                {getLabel(attribute)}
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
