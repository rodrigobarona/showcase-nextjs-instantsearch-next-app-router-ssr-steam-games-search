import NumericMenu from "@/components/instantsearch/numeric-menu";
import { RangeFilter } from "@/components/instantsearch/range-menu";
import { attributeLabelMap } from "@/lib/schema";

function Facet({ attribute }: { attribute: string }) {
  switch (attribute) {
    case "price":
      return (
        <>
          <h3 className="mb-1 text-xl font-semibold">{attributeLabelMap[attribute]}</h3>
          <RangeFilter attribute={attribute} />
        </>
      );
    case "rooms":
      return (
        <>
          <h3 className="mb-1 text-xl font-semibold">{attributeLabelMap[attribute]}</h3>
          <NumericMenu
            attribute={attribute}
            items={[
              { label: "Any", end: 10 },
              { label: "1-2", start: 1, end: 2 },
              { label: "3-4", start: 3, end: 4 },
              { label: "5+", start: 5 },
            ]}
          />
        </>
      );
    case "bathrooms":
      return (
        <>
          <h3 className="mb-1 text-xl font-semibold">{attributeLabelMap[attribute]}</h3>
          <NumericMenu
            attribute={attribute}
            items={[
              { label: "Any", end: 5 },
              { label: "1+", start: 1 },
              { label: "2+", start: 2 },
              { label: "3+", start: 3 },
            ]}
          />
        </>
      );
    case "parking_spaces":
      return (
        <>
          <h3 className="mb-1 text-xl font-semibold">{attributeLabelMap[attribute]}</h3>
          <NumericMenu
            attribute={attribute}
            items={[
              { label: "Any", end: 5 },
              { label: "1+", start: 1 },
              { label: "2+", start: 2 },
              { label: "3+", start: 3 },
            ]}
          />
        </>
      );
    default:
      return null;
  }
}

export { Facet };
