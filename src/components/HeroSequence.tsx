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

  // 1. Initial State -> Morph (0 to 0.2)
  // Fade out completely very early BEFORE content comes up to guarantee no overlap!
  const ojasOpacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0]);
  
  const solutionsOpacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0]);

  // Splitting NEXGEN into NEXT and GENERATION
  const nexX = useTransform(scrollYProgress, [0, 0.2], [0, -200]);
  const genX = useTransform(scrollYProgress, [0, 0.2], [0, 120]);
  
  // Fade in the 'T' exactly as the gap opens
  const tOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const tX = useTransform(scrollYProgress, [0, 0.2], [-50, 0]);

  // Particles opacity
  const particlesOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]);

  // Visual centering & scale
  const titleX = useTransform(scrollYProgress, [0, 0.2], ["0%", "-12%"]);
  
  // Shrink during split, then move up into final position
  const titleScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.65, 0.45]);
  const titleY = useTransform(scrollYProgress, [0.2, 0.4], ["0vh", "-45vh"]);
  const titleOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);
  
  // Hero Content reveal: start AFTER a large gap (0.5)
  // Fade out cleanly at the end (0.85 to 0.95)
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.85, 0.95], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.6, 0.85, 0.95], [100, 0, 0, -50]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-white text-slate-900">
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
          style={{ y: titleY, opacity: titleOpacity }}
        >
          {/* OJAS */}
          <motion.h2 
            style={{ opacity: ojasOpacity }}
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
            style={{ opacity: solutionsOpacity }}
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
