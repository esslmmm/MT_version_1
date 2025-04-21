'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/img/landing04.jpg',
    title: 'Medical Check-Up at MFU Hospital',
    expiry: 'Protect your health, protect your future',
  },
  {
    image: '/img/wanasom01.jpg',
    title: 'Wanasom Resort',
    expiry: 'Conveniently situated in the Tha Sut part of Chiang Rai',
  },
  {
    image: '/img/landing02.jpeg',
    title: 'Mae Fah Luang University Medical Center Hospital',
    expiry: 'We care for everyone equally with world-class medical standards',
  },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Sync scroll to index for desktop
  useEffect(() => {
    if (!isMobile && carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * index,
        behavior: 'smooth',
      });
    }
  }, [index, isMobile]);

  // Detect scroll position on mobile
  const handleScroll = () => {
    if (carouselRef.current && isMobile) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== index) setIndex(newIndex);
    }
  };

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slide Container */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className={`flex w-full h-full ${
          isMobile
            ? 'overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x scrollbar-hide'
            : 'overflow-hidden'
        }`}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 h-full snap-center relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-2xl font-semibold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.expiry}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows — only show on desktop */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
          >
            <ChevronRight className="text-white" />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-green-400' : 'bg-white'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
