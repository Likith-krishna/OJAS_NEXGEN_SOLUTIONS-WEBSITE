"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export function HeroSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across a 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Initial State -> Morph (0 to 0.3)
  const ojasY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const solutionsY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  // Splitting NEXGEN into NEXT and GENERATION
  // We move NEX to the left, GEN to the right.
  const nexX = useTransform(scrollYProgress, [0.1, 0.3], [0, -120]);
  const genX = useTransform(scrollYProgress, [0.1, 0.3], [0, 120]);
  
  // Fade in the 'T' exactly as the gap opens so it doesn't disappear early on scroll up
  const tOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const tX = useTransform(scrollYProgress, [0.1, 0.3], [-20, 0]);

  // Particles opacity
  const particlesOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]);

  // Visual centering & scale: "GENERATION" makes it right-heavy and very wide
  const titleX = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "-12%"]);
  
  // Shrink during split to prevent overflow
  const titleScale = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [1, 0.65, 0.45]);

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full bg-white text-slate-900">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background glow */}
        <motion.div 
          className="absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"
          style={{ scale: scrollYProgress }}
        />

        {/* Hero Title */}
        <motion.div 
          className="absolute flex flex-col items-center justify-center gap-6 whitespace-nowrap w-full"
        >
          {/* OJAS */}
          <motion.h2 
            style={{ y: ojasY }}
            className="text-2xl font-semibold tracking-[0.3em] text-slate-500"
          >
            OJAS
          </motion.h2>

          {/* NEX(T)GEN Split */}
          <motion.div 
            style={{ scale: titleScale, x: titleX }}
            className="relative flex items-center justify-center text-7xl font-extrabold tracking-tighter md:text-9xl"
          >
            <motion.div 
              style={{ x: nexX }}
              className="flex items-center relative"
            >
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                NEX
              </span>
              <motion.span 
                style={{ opacity: tOpacity, x: tX }}
                className="absolute left-[100%] top-0 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent drop-shadow-sm"
              >
                T
              </motion.span>
            </motion.div>
            
            {/* Particles / Energy Beam */}
            <motion.div 
              style={{ opacity: particlesOpacity }}
              className="absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-blue-400 shadow-[0_0_30px_5px_rgba(96,165,250,0.6)]"
            />
            
            {/* The Dot */}
            <motion.div
              style={{ opacity: tOpacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-800 font-bold"
            >
              •
            </motion.div>
            
            <motion.div 
              style={{ x: genX }}
              className="flex items-center relative"
            >
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                GEN
              </span>
              <motion.span 
                style={{ opacity: tOpacity }}
                className="absolute left-[100%] top-0 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent drop-shadow-sm"
              >
                ERATION
              </motion.span>
            </motion.div>
          </motion.div>

          {/* SOLUTIONS */}
          <motion.h2 
            style={{ y: solutionsY }}
            className="text-2xl font-semibold tracking-[0.3em] text-slate-500"
          >
            SOLUTIONS
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
}
