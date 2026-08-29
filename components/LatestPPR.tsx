'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

interface PPRImage {
  src: string;
  country: string;
}

interface LatestPPRProps {
  images?: PPRImage[];
}

export default function LatestPPR({ images = [] }: LatestPPRProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollLimits);
      checkScrollLimits();
      window.addEventListener('resize', checkScrollLimits);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScrollLimits);
      window.removeEventListener('resize', checkScrollLimits);
    };
  }, [images]);

  useEffect(() => {
    checkScrollLimits();
  }, [images]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollOffset = clientWidth * 0.8;
      const targetScroll = direction === 'left' ? scrollLeft - scrollOffset : scrollLeft + scrollOffset;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null && images.length > 0) {
      setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null && images.length > 0) {
      setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };
    if (activeImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, images]);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-[#FAFAF8] overflow-hidden relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy"
          >
            Latest <span className="text-navy">PPR</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Carousel Wrapper - Edge to Edge */}
      <div className="relative w-full group/carousel">
        
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 items-center justify-center text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 items-center justify-center text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-6 w-full scroll-pl-4 sm:scroll-pl-6 md:scroll-pl-12 lg:scroll-pl-24 xl:scroll-pl-32"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
              className="min-w-[85vw] sm:min-w-[45vw] md:min-w-[30vw] lg:min-w-[22vw] snap-start"
            >
              <div 
                onClick={() => setActiveImageIndex(index)}
                className="bg-white border border-[#E31E24]/60 rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                  <Image
                    src={img.src}
                    alt={img.country === 'Visa Granted' ? 'PPR Visa Approval Letter' : `${img.country} PPR Visa Approval`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-navy shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-[#E31E24]" />
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E31E24] bg-[#E31E24]/10 px-3 py-1 rounded-full">
                    {img.country}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Click to view</span>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Trailing spacer to avoid right scroll clamping issues */}
          <div className="min-w-[4px] sm:min-w-[12px] md:min-w-[24px] lg:min-w-[48px] shrink-0" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* See All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setActiveImageIndex(0)}
            className="inline-flex items-center gap-2 bg-[#E31E24] text-white hover:bg-navy font-bold px-8 py-3.5 rounded-full uppercase tracking-wider text-sm transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && images[activeImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 sm:left-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-40 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 sm:right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-40 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <Image
                  src={images[activeImageIndex].src}
                  alt={images[activeImageIndex].country === 'Visa Granted' ? 'PPR Visa Approval Letter' : `${images[activeImageIndex].country} PPR Visa Approval`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
              
              {/* Image Description */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/95 px-6 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 max-w-[90vw]">
                <p className="font-bold text-sm sm:text-base">
                  {images[activeImageIndex].country === 'Visa Granted' 
                    ? 'PPR Visa Approval Letter' 
                    : `${images[activeImageIndex].country} PPR Visa Approval`}
                </p>
                <p className="text-[11px] sm:text-xs text-white/60 mt-0.5">
                  Image {activeImageIndex + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
