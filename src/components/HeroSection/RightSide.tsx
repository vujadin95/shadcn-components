"use client";

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  images: {
    src: StaticImageData;
    id: number;
  }[];
}

const HeroCarousel = ({ images }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const prevImage = () => {
    setCurrentImage((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    resetInterval();
  };

  const nextImage = () => {
    setCurrentImage((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    resetInterval();
  };
  return (
    <div className="relative h-[400px] w-full overflow-hidden border lg:h-[600px]">
      <div
        className="flex h-full w-full bg-transparent transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image) => (
          <div className="relative h-full w-full shrink-0" key={image.id}>
            <Image
              src={image.src}
              alt="placeholder"
              // width={768}
              // height={400}
              fill
              placeholder="blur"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
      <div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentImage ? "scale-150 bg-primary" : "bg-gray-300"
            }`}
            onClick={() => {
              setCurrentImage(index);
              resetInterval();
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
export default HeroCarousel;

function Some({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    resetInterval();
  };

  return (
    <div className="relative h-[400px] w-3/5 overflow-hidden border lg:h-[600px]">
      {/* Right side carousel */}
      <div className="relative">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={image.id} className="h-full w-full flex-shrink-0">
                <Image
                  src={image.src}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel controls */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 transform"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 transform"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Dot indicators */}
      </div>
    </div>
  );
}
