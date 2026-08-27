"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Plane } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const headingText = "We Don't Just Process Visas — We Build Futures";
  const words = headingText.split(" ");

  const sliderImages = [
    "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-16 flex flex-col lg:grid lg:grid-cols-12 overflow-hidden bg-[#FAFAF8]"
    >
      {/* Left Side - Editorial Text */}
      <div className="col-span-12 lg:col-span-6 px-4 md:px-12 lg:pl-20 xl:pl-32 flex flex-col justify-center relative z-20 mt-12 lg:mt-0">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tight text-[#2A2522]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.1,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block mr-4 last:mr-0"
            >
              {word === "Futures" ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8866E] to-[#C5A059]">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[#6B6058] text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
        >
          True Visa provides professional, transparent guidance for students,
          professionals, and families planning their global journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <Link
            href="/destinations"
            className="px-8 py-4 bg-[#2A2522] text-white rounded-2xl font-bold hover:bg-[#A8866E] transition-all duration-300 shadow-xl shadow-black/10 hover:-translate-y-1"
          >
            Explore Destinations
          </Link>
          <div className="flex items-center gap-4 px-6 border-l-2 border-[#E5E0DC] ml-2">
            <div className="text-3xl font-black text-[#A8866E]">10k+</div>
            <div className="text-[10px] uppercase tracking-widest text-[#8C7D73] font-bold leading-tight">
              Successful
              <br />
              Applications
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Dynamic Image Composition */}
      <div className="col-span-12 lg:col-span-6 relative min-h-[600px] lg:min-h-full w-full mt-16 lg:mt-0">
        {/* Subtle Airplane Path Graphic in Background */}
        <svg
          className="absolute inset-0 w-full h-full text-gold/10 -z-10"
          viewBox="0 0 800 800"
        >
          <path
            d="M -100 600 Q 300 400 500 100 T 900 -100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10 15"
          />
        </svg>

        {/* Floating Image Composition */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Main Center Image */}
            <motion.div
              style={{ y: y1 }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-20 pointer-events-auto bg-gray-100"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="w-full h-full relative"
                style={{ willChange: "transform" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={sliderImages[currentImage]}
                      alt="Immigration consultancy — students and professionals planning their global journey"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Secondary Top Right Image */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -top-10 -right-16 md:-right-24 w-48 md:w-64 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl z-30 border-4 border-[#FAFAF8] pointer-events-auto hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.05 }}
                className="w-full h-full relative hidden sm:block"
                style={{ willChange: "transform" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  alt="International students studying abroad with visa support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 250px"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>

            {/* Tertiary Bottom Left Image */}
            <motion.div className="absolute -bottom-20 -left-10 md:-left-20 w-56 md:w-72 aspect-video rounded-3xl overflow-hidden shadow-xl z-30 border-4 border-[#FAFAF8] pointer-events-auto hidden sm:block">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                whileHover={{ scale: 1.05 }}
                className="w-full h-full relative hidden sm:block"
                style={{ willChange: "transform" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Global business and career opportunities through immigration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -left-12 w-24 h-24 border border-gold/30 rounded-full border-dashed z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
