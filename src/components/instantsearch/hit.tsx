"use client";
import { Card } from "@/components/ui/card";
import type { TypesenseDocument } from "@/types/typesense";
import { formatNumber } from "@/lib/utils";
import { Bath, BedDouble, Car, Home, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatPrice(price: number, priceOnApplication: boolean) {
  if (priceOnApplication) return "Price on Application";
  return `€${formatNumber(price)}`;
}

function formatArea(area: number | undefined) {
  if (!area) return null;
  return `${formatNumber(area)}m²`;
}

interface HitProps {
  hit: {
    document: TypesenseDocument;
  };
}

export default function Hit({ hit }: HitProps) {
  const property = hit.document;

  return (
    <Link href={`/property/${property.slug_url}`}>
      <Card className="w-full h-full flex flex-col overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48 w-full">
          <Image
            src={property.cover_photo || "/placeholder.jpg"}
            alt={property.title}
            fill
            className="object-cover"
          />
          {property.is_exclusive && (
            <span className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
              Exclusive
            </span>
          )}
          {property.category_name && (
            <span className="absolute bottom-2 left-2 bg-background/80 text-foreground px-2 py-1 rounded text-sm">
              {property.category_name}
            </span>
          )}
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{property.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {property.zone ? `${property.zone}, ${property.county}` : property.county}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            {property.rooms > 0 && (
              <div className="flex items-center gap-1">
                <BedDouble className="h-4 w-4" />
                <span>{property.rooms}</span>
              </div>
            )}
            {property.bathrooms && property.bathrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            {property.parking_spaces && property.parking_spaces > 0 && (
              <div className="flex items-center gap-1">
                <Car className="h-4 w-4" />
                <span>{property.parking_spaces}</span>
              </div>
            )}
            {property.gross_build_area && (
              <div className="flex items-center gap-1">
                <Ruler className="h-4 w-4" />
                <span>{formatArea(property.gross_build_area)}</span>
              </div>
            )}
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="text-sm">{property.code}</span>
              </div>
              <p className="text-lg font-bold text-primary">
                {formatPrice(property.price, property.price_on_application)}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
