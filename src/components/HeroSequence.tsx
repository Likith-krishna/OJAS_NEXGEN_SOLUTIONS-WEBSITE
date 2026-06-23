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
  const ojasOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const ojasY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const solutionsOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
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
  
  // Shrink during split to prevent overflow, then shrink more and move up
  const titleScale = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [1, 0.65, 0.45]);
  const titleY = useTransform(scrollYProgress, [0.3, 0.5], ["0vh", "-35vh"]);
  
  // Hero Content reveal
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.6], [100, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-white text-slate-900">
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
          style={{ x: titleX, y: titleY, scale: titleScale }}
        >
          {/* OJAS */}
          <motion.h2 
            style={{ opacity: ojasOpacity, y: ojasY }}
            className="text-2xl font-semibold tracking-[0.3em] text-slate-500"
          >
            OJAS
          </motion.h2>

          {/* NEX(T)GEN Split */}
          <div className="relative flex items-center justify-center text-7xl font-extrabold tracking-tighter md:text-9xl">
            <motion.div 
              style={{ x: nexX }}
              className="flex items-center relative"
            >
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                NEX
              </span>
              <motion.span 
                style={{ opacity: tOpacity, x: tX }}
                className="absolute left-[100%] top-0 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent drop-shadow-sm"
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
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500 font-bold"
            >
              •
            </motion.div>
            
            <motion.div 
              style={{ x: genX }}
              className="flex items-center relative"
            >
              <span className="bg-gradient-to-l from-blue-800 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                GEN
              </span>
              <motion.span 
                style={{ opacity: tOpacity }}
                className="absolute left-[100%] top-0 bg-gradient-to-l from-blue-600 to-blue-500 bg-clip-text text-transparent drop-shadow-sm"
              >
                ERATION
              </motion.span>
            </motion.div>
          </div>

          {/* SOLUTIONS */}
          <motion.h2 
            style={{ opacity: solutionsOpacity, y: solutionsY }}
            className="text-2xl font-semibold tracking-[0.3em] text-slate-500"
          >
            SOLUTIONS
          </motion.h2>
        </motion.div>

        {/* Hero Content Revealed */}
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute top-1/2 flex w-full max-w-4xl -translate-y-1/2 flex-col items-center gap-8 px-6 pt-32 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
            Build Future-Ready Software Solutions for Modern Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            OJAS NEXGEN SOLUTIONS helps businesses transform ideas into scalable digital products through custom software development, cloud solutions, IT consulting, AI integration, enterprise systems, and digital transformation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link 
              href="#contact" 
              className="group flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="#services" 
              className="flex items-center justify-center rounded-full bg-slate-100 px-8 py-4 text-sm font-bold text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <Code2 className="mr-2 h-4 w-4 text-blue-600" />
              Our Services
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
