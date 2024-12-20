"use client";

import { Gallery } from "@/components/gallery";
import Hit from "@/components/instantsearch/hit";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { typesenseConfig } from "@/lib/typesense";
import { formatNumber } from "@/lib/utils";
import type { TypesenseDocument } from "@/types/typesense";
import { Bath, BedDouble, Car, Euro, MapPin, Ruler } from "lucide-react";
import { useEffect, useState } from "react";
import { Configure, InstantSearch } from "react-instantsearch";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

interface PropertyContentProps {
  property: TypesenseDocument;
  relatedProperties: TypesenseDocument[];
}

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: typesenseConfig,
  additionalSearchParameters: {
    query_by: "title,description,category_name",
  },
});

function formatPrice(price: number, priceOnApplication: boolean) {
  if (priceOnApplication) return "Price on Application";
  return `€${formatNumber(price)}`;
}

function formatArea(area: number | undefined) {
  if (!area) return null;
  return `${formatNumber(area)}m²`;
}

export function PropertyContent({ property, relatedProperties }: PropertyContentProps) {
  const propertyPhotos = property.photos || [];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <InstantSearch searchClient={typesenseInstantsearchAdapter.searchClient} indexName="properties">
      <Configure
        facets={[
          "category_name",
          "rooms",
          "bathrooms",
          "parking_spaces",
          "gross_build_area",
          "zone",
          "county",
          "price",
          "is_exclusive",
          "surroundings",
          "business_type_id",
          "availability_id",
        ]}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>
                  {property.zone ? `${property.zone}, ${property.county}` : property.county}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <Euro className="h-5 w-5 mr-2 text-primary" />
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(property.price, property.price_on_application)}
                </span>
              </div>
              <Badge variant={property.is_exclusive ? "default" : "outline"}>{property.code}</Badge>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <Card className="mb-8 p-4">
          {isClient && (
            <Gallery
              images={propertyPhotos.map((photo) => ({
                src: photo.url,
                alt: property.title,
              }))}
            />
          )}
        </Card>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Main Features */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Main Features</h2>
            <div className="space-y-4">
              {property.rooms > 0 && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BedDouble className="h-5 w-5 mr-2" />
                    <span>Bedrooms</span>
                  </div>
                  <span className="font-medium">{property.rooms}</span>
                </div>
              )}
              {property.bathrooms && property.bathrooms > 0 && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>Bathrooms</span>
                  </div>
                  <span className="font-medium">{property.bathrooms}</span>
                </div>
              )}
              {property.parking_spaces && property.parking_spaces > 0 && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Car className="h-5 w-5 mr-2" />
                    <span>Parking Spaces</span>
                  </div>
                  <span className="font-medium">{property.parking_spaces}</span>
                </div>
              )}
              {property.gross_build_area !== undefined && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Ruler className="h-5 w-5 mr-2" />
                    <span>Build Area</span>
                  </div>
                  <span className="font-medium">{formatArea(property.gross_build_area)}</span>
                </div>
              )}
            </div>
          </Card>

          {/* Description */}
          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
          </Card>
        </div>

        {/* Surroundings */}
        {property.surroundings && property.surroundings.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Surroundings</h2>
            <div className="flex flex-wrap gap-2">
              {property.surroundings.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        )}

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProperties.map((related) => (
                <Hit key={related.id} hit={{ document: related }} />
              ))}
            </div>
          </div>
        )}
      </main>
    </InstantSearch>
  );
}
