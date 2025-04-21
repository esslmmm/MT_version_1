"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const RoomGallery = () => {
  const images = [
    "/img/wanasom03.jpg",
    "/img/wanasom01.jpg",
    "/img/wanasom04.jpg",
    "/img/wanasom05.jpg",
    "/img/wanasom06.jpg",
    "/img/wanasom08.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const maxThumbnails = 3;
  const extraPhotos = images.length - maxThumbnails;

  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Sync scroll to index for desktop (scrolls automatically to the selected image)
  useEffect(() => {
    if (!isMobile && carouselRef.current) {
      const scrollX = 88 * index; // 80px thumbnail + 8px gap approx
      carouselRef.current.scrollTo({
        left: scrollX,
        behavior: "smooth",
      });
    }
  }, [index, isMobile]);

  // Handle scroll position on mobile
  const handleScroll = () => {
    if (carouselRef.current && isMobile) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== index) setIndex(newIndex);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#D2ECE4] py-10 px-4">
      <div className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
        {/* Main Image */}
        <div
          className="w-full cursor-pointer"
          onClick={() => {
            // Allow the main image to scroll to the next one if needed
            if (isMobile && carouselRef.current) {
              const newIndex = (index + 1) % images.length;
              setIndex(newIndex);
              setMainImage(images[newIndex]);
              carouselRef.current.scrollTo({
                left: 88 * newIndex, // Same width as thumbnails
                behavior: "smooth",
              });
            }
          }}
        >
          <Image
            src={mainImage}
            alt="Room Image"
            width={800}
            height={500}
            className="w-200 h-120 object-cover rounded-xl"
          />
        </div>

        {/* Thumbnail Images Overlay */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className={`absolute bottom-4 left-4 flex gap-2 ${
            isMobile
              ? "overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x scrollbar-hide touch-action: pan-x"
              : "overflow-hidden"
          }`}
        >
          {(showAll ? images : images.slice(0, maxThumbnails)).map((image, i) => (
            <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
              <Image
                src={image}
                alt={`Thumbnail ${i}`}
                layout="fill"
                objectFit="cover"
                className="cursor-pointer hover:opacity-80 transition"
                onClick={() => {
                  setMainImage(image);
                  setIndex(i);
                }}
              />

              {/* Button to show more images */}
              {!showAll && i === maxThumbnails - 1 && extraPhotos > 0 && (
                <button
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  onClick={() => setShowAll(true)}
                >
                  <span className="text-white font-semibold text-sm">
                    +{extraPhotos} photos
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomGallery;
