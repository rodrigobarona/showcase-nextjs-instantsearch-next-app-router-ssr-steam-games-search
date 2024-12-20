"use client";
import { Card } from "@/components/ui/card";
import type { propertySchema } from "@/lib/schema";
import { formatNumber } from "@/lib/utils";
import { Bath, BedDouble, Car, Home } from "lucide-react";
import Image from "next/image";
import type { z } from "zod";

type Property = z.infer<typeof propertySchema>;

function formatPrice(price: number, priceOnApplication: boolean) {
  if (priceOnApplication) return "Price on Application";
  return `€${formatNumber(price)}`;
}

export default function Hit({ hit }: { hit: Property }) {
  return (
    <Card className="w-full h-full flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={hit.cover_photo || "/placeholder.jpg"}
          alt={hit.title}
          fill
          className="object-cover"
        />
        {hit.is_exclusive && (
          <span className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
            Exclusive
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{hit.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{hit.description}</p>
        
        <div className="flex gap-4 mb-4">
          {hit.rooms && (
            <div className="flex items-center gap-1">
              <BedDouble className="h-4 w-4" />
              <span>{hit.rooms}</span>
            </div>
          )}
          {hit.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{hit.bathrooms}</span>
            </div>
          )}
          {hit.parking_spaces && (
            <div className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              <span>{hit.parking_spaces}</span>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span className="text-sm">{hit.category_name}</span>
            </div>
            <p className="text-lg font-bold text-primary">
              {formatPrice(hit.price, hit.price_on_application)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
