"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const REASONS = [
  "Innovative Solutions",
  "Experienced Professionals",
  "Client-Centric Approach",
  "Scalable Technologies",
  "Enterprise Security",
  "Agile Development",
  "Quality Assurance",
  "Long-Term Support"
];

export function WhyChooseUsSection() {
  return (
    <section className="relative w-full bg-slate-950 py-32 px-6 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Empowering Your Business With Next-Gen Technology
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We don't just write code; we build strategic partnerships. Our approach combines enterprise-grade engineering with innovative thinking to ensure your digital transformation is seamless, secure, and scalable.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REASONS.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center space-x-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                  <span className="text-slate-200 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-md shadow-2xl flex items-center justify-center">
             {/* Glowing orb representing tech / AI */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 opacity: [0.5, 0.8, 0.5],
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-64 h-64 bg-blue-500 rounded-full blur-[100px]"
             />
             <div className="relative z-10 text-center p-8">
               <div className="inline-flex items-center justify-center p-6 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 mb-6">
                 <ShieldCheck className="h-16 w-16 text-blue-300" />
               </div>
               <h4 className="text-2xl font-bold text-white mb-2">Enterprise-Grade Reliability</h4>
               <p className="text-slate-300">Built to withstand the demands of global operations.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Ensure the icon is imported
import { ShieldCheck } from "lucide-react";
