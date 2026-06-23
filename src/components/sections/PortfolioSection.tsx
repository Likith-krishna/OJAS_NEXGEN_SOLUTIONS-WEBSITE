"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PORTFOLIO = [
  {
    title: "Project Name (Coming Soon)",
    category: "Featured Project",
    description: "Details about our upcoming flagship project will be revealed soon.",
    color: "bg-blue-600"
  }
];

export function PortfolioSection() {
  return (
    <section className="w-full bg-slate-50 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Portfolio</h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Featured Case Studies
            </h3>
          </div>
          <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center">
            View All Projects <ArrowUpRight className="ml-1 w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`w-full h-64 rounded-3xl ${project.color} mb-6 relative overflow-hidden flex items-center justify-center`}>
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                   <span className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center">
                     View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                   </span>
                 </div>
              </div>
              <div className="px-2">
                <p className="text-sm font-bold text-blue-600 mb-2">{project.category}</p>
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                <p className="text-slate-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
