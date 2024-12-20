"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function Gallery({ images }: GalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.src} className="basis-1/4 lg:basis-1/6">
              <div
                className={`relative aspect-video cursor-pointer overflow-hidden rounded-lg border-2 ${
                  index === currentImage ? "border-primary" : "border-transparent"
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
} 