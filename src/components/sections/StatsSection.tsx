"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "10x", label: "Faster Delivery" },
  { value: "100%", label: "Modern Tech Stack" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Dedicated Support" }
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-white py-24 px-6 border-b border-slate-100">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-200">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
