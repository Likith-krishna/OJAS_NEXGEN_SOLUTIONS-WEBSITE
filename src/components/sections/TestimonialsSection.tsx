"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "OJAS NEXGEN SOLUTIONS completely transformed our logistics infrastructure. Their custom cloud solution reduced our latency by 40% and improved our tracking capabilities globally.",
    author: "Sarah Jenkins",
    role: "CTO, Global Freight Co.",
  },
  {
    quote: "The team is incredibly knowledgeable and delivered our enterprise CRM ahead of schedule. Their attention to security and scalability is unmatched.",
    author: "Michael Chang",
    role: "Operations Director, Retail Systems",
  },
  {
    quote: "Partnering with OJAS allowed us to integrate AI predictive analytics into our healthcare platform seamlessly. They are true technology partners.",
    author: "Dr. Elena Rodriguez",
    role: "Founder, HealthTech Innovators",
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-slate-950 py-32 px-6 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-200 uppercase mb-4">Client Testimonials</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-white">
            Trusted by Industry Leaders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-colors flex flex-col justify-between"
            >
              <div>
                <Quote className="h-10 w-10 text-blue-300 mb-6 opacity-50" />
                <p className="text-lg text-blue-50 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonial.author}</h4>
                <p className="text-sm text-blue-200">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
