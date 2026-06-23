"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full bg-slate-900 py-32 px-6 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
      
      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into powerful digital solutions with OJAS NEXGEN SOLUTIONS.
          </p>
          
          <Link 
            href="#contact"
            className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:-translate-y-1"
          >
            Let's Build Together
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
