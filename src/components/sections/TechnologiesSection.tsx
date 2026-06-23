"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Flutter", "HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "Express"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Google Cloud"]
  },
  {
    category: "AI & Data",
    items: ["Machine Learning", "Generative AI", "Data Analytics"]
  }
];

export function TechnologiesSection() {
  return (
    <section className="w-full bg-slate-900 py-32 px-6 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Technologies We Use</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-white">
            Powered by Modern Tech Stack
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_STACK.map((stack, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">
                {stack.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx}
                    className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
