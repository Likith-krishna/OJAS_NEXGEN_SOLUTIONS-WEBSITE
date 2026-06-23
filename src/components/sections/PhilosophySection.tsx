"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Lightbulb } from "lucide-react";

const PHILOSOPHIES = [
  {
    title: "Performance First",
    description: "We build systems that are optimized for speed and infinite scalability from day one, ensuring your software never bottlenecks your business.",
    icon: Zap
  },
  {
    title: "Security by Design",
    description: "Security isn't an afterthought. We implement zero-trust architectures and enterprise-grade encryption across every layer of your application.",
    icon: Shield
  },
  {
    title: "Future-Proof Code",
    description: "By leveraging the latest cloud-native technologies and clean architecture, we ensure your codebase remains maintainable for years to come.",
    icon: Lightbulb
  }
];

export function PhilosophySection() {
  return (
    <section className="w-full bg-blue-600 py-32 px-6 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-200 uppercase mb-4">Our Philosophy</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-white">
            Engineering Excellence
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-blue-700/50 backdrop-blur-md p-8 rounded-3xl border border-blue-500 hover:bg-blue-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <item.icon className="h-10 w-10 text-blue-300 mb-6" />
                <h4 className="font-bold text-xl text-white mb-4">{item.title}</h4>
                <p className="text-lg text-blue-50 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
