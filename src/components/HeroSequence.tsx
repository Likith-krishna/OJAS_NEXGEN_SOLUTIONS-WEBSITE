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

  // Move OJAS and SOLUTIONS outwards vertically so they don't collide with the diagonal split
  const ojasY = useTransform(scrollYProgress, [0, 0.2, 1], [0, -100, -100]);
  const solutionsY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 100, 100]);

  // Splitting NEXGEN into NEXT and GENERATION (Diagonal Split)
  // NEXT goes further to the left to give more space
  const nexX = useTransform(scrollYProgress, [0, 0.2, 1], [0, -180, -180]);
  const nexY = useTransform(scrollYProgress, [0, 0.2, 1], [0, -70, -70]);
  
  // GENERATION moves right
  const genX = useTransform(scrollYProgress, [0, 0.2, 1], [0, 100, 100]);
  const genY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 70, 70]);
  
  // Fade in the 'T' and 'ERATION'
  const tOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const tX = useTransform(scrollYProgress, [0, 0.2, 1], [-50, 0, 0]);
  
  const erationOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const erationX = useTransform(scrollYProgress, [0, 0.2, 1], [-20, 0, 0]);

  // Scale down the whole block as it splits
  const titleScale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.65, 0.65]);
  
  // Fade out the ENTIRE title block (OJAS, NEXT GENERATION, SOLUTIONS) together
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 1], [1, 1, 0, 0]);
  const titleDisplay = useTransform(scrollYProgress, [0, 0.35, 0.36, 1], ["flex", "flex", "none", "none"]);
  
  // Hero Content reveal: start AFTER a large gap (0.45)
  // Fade out cleanly at the end (0.85 to 0.95)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.85, 0.95, 1], [0, 0, 1, 1, 0, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.85, 0.95, 1], [50, 50, 0, 0, -50, -50]);
  const contentDisplay = useTransform(scrollYProgress, [0, 0.44, 0.45, 0.95, 0.96, 1], ["none", "none", "flex", "flex", "none", "none"]);

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
          className="absolute flex-col items-center justify-center gap-6 whitespace-nowrap w-full"
          style={{ opacity: titleOpacity, display: titleDisplay }}
        >
          {/* OJAS */}
          <motion.h2 
            style={{ y: ojasY }}
            className="text-3xl md:text-5xl font-bold tracking-[0.6em] bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent uppercase"
          >
            OJAS
          </motion.h2>

          {/* NEXGEN Split Container */}
          <motion.div 
            style={{ scale: titleScale }}
            className="flex flex-row items-center justify-center font-extrabold tracking-tighter text-6xl md:text-9xl text-slate-900 w-full"
          >
            {/* "NEX" block */}
            <motion.div style={{ x: nexX, y: nexY }} className="flex relative z-10">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">NEX</span>
              {/* The 'T' fades in */}
              <motion.span 
                style={{ opacity: tOpacity, x: tX, position: 'absolute', right: '-0.7em' }}
                className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"
              >
                T
              </motion.span>
            </motion.div>
            
            {/* "GEN" block */}
            <motion.div style={{ x: genX, y: genY }} className="flex relative z-0">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">GEN</span>
              {/* 'ERATION' fades in */}
              <motion.span 
                style={{ opacity: erationOpacity, x: erationX, position: 'absolute', left: '100%' }}
                className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"
              >
                ERATION
              </motion.span>
            </motion.div>
          </motion.div>

          {/* SOLUTION */}
          <motion.h2 
            style={{ y: solutionsY }}
            className="text-3xl md:text-5xl font-bold tracking-[0.6em] bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent uppercase"
          >
            SOLUTION
          </motion.h2>
        </motion.div>

        {/* Hero Content Revealed */}
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY, display: contentDisplay }}
          className="absolute top-1/2 w-full max-w-4xl -translate-y-1/2 flex-col items-center gap-8 px-6 pt-32 text-center"
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
