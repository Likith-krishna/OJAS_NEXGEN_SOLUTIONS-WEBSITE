"use client";

import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Truck, 
  GraduationCap, 
  LineChart, 
  ShoppingCart, 
  Factory, 
  Store, 
  Rocket, 
  Building, 
  Landmark 
} from "lucide-react";

const INDUSTRIES = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Logistics", icon: Truck },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: LineChart },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: Store },
  { name: "Startups", icon: Rocket },
  { name: "Enterprise Businesses", icon: Building },
  { name: "Government Solutions", icon: Landmark },
];

export function IndustriesSection() {
  return (
    <section className="w-full bg-slate-50 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Industries We Serve</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Delivering Value Across Sectors
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all hover:-translate-y-1 cursor-default"
            >
              <div className="mb-4 text-slate-400 group-hover:text-blue-600 transition-colors">
                <industry.icon className="h-10 w-10" />
              </div>
              <span className="text-sm font-bold text-slate-700 text-center group-hover:text-slate-900">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
