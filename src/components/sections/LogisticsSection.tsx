"use client";

import { motion } from "framer-motion";
import { Anchor, Plane, Truck, Package, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    icon: Anchor,
    title: "Sea Freight Services",
    desc: "Reliable and cost-effective ocean freight forwarding, including FCL (Full Container Load) and LCL shipments globally."
  },
  {
    icon: Plane,
    title: "Air Cargo",
    desc: "Expedited air freight solutions for time-sensitive deliveries, ensuring secure and rapid global transit."
  },
  {
    icon: Truck,
    title: "Surface Transport",
    desc: "Comprehensive door-to-door goods transportation and domestic freight network across the region."
  },
  {
    icon: Package,
    title: "Project Logistics",
    desc: "Expert handling of complex, oversized, and heavy-lift project cargo from concept to final installation."
  }
];


export function LogisticsSection() {
  return (
    <section id="logistics" className="w-full bg-slate-50 py-32 px-6 border-t border-slate-200">
      <div className="mx-auto max-w-4xl">
        
        <div className="flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center w-full"
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Sister Company</h2>
            
            {/* Logo */}
            <div className="mx-auto mb-10 w-full max-w-sm">
              <img 
                src="https://ojaslogistics.com/wp-content/uploads/2017/08/sticky-logo.png" 
                alt="OJAS International Logistics Solutions" 
                className="w-full h-auto object-contain"
              />
            </div>

            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              OJAS International Logistics Solutions
            </h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              OJAS International Logistics Solutions is a trusted global partner in supply chain management and freight forwarding. We deliver comprehensive, end-to-end transportation services designed to streamline operations, optimize routing, and ensure your cargo reaches its destination safely and on time, anywhere in the world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 text-left">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

            <Link 
              href="https://ojaslogistics.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(29,78,216,0.4)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <span>Visit OJAS International Logistics Solutions</span>
              <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
