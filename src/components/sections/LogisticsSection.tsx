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

const NEWS = [
  {
    date: "October 2025",
    title: "Expanded Southeast Asia Shipping Routes",
    desc: "We have successfully partnered with major vessel operators to increase our FCL capacity across vital Southeast Asian trade lanes, reducing transit times by 15%."
  },
  {
    date: "August 2025",
    title: "MTO License Renewal & Compliance",
    desc: "OJAS International successfully renewed its Multi-Modal Transport Operator (MTO) certification, reinforcing our commitment to secure, end-to-end global supply chain solutions."
  },
  {
    date: "May 2025",
    title: "Major Infrastructure Project Delivery",
    desc: "Our Project Logistics team successfully coordinated the door-to-door delivery of 500+ tons of capital goods for a massive industrial plant expansion in Southern India."
  }
];

export function LogisticsSection() {
  return (
    <section id="logistics" className="w-full bg-slate-50 py-32 px-6 border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Company Info */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Sister Company</h2>
              
              {/* Logo Placeholder */}
              <div className="w-64 h-24 bg-slate-200 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center mb-8 relative group overflow-hidden">
                <span className="text-slate-400 font-bold tracking-widest uppercase z-10 text-center px-4">OJAS Logistics<br/>Logo Placeholder</span>
                <div className="absolute inset-0 bg-slate-300/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                OJAS International Logistics Solutions
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Headquartered in Chennai, India, OJAS International operates as a premier freight forwarder and licensed Multi-Modal Transport Operator (MTO). We provide comprehensive "on-top" supply chain solutions—from initial concept and consulting to engineering and door-to-door implementation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
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
                className="inline-flex items-center space-x-2 font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>Visit OJAS Logistics Website</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* News Sidebar */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/40 sticky top-32"
            >
              <h4 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                Company Updates
              </h4>

              <div className="space-y-8">
                {NEWS.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-100 pb-2 last:pb-0 last:border-transparent">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white" />
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                      {item.date}
                    </span>
                    <h5 className="font-bold text-slate-900 mb-2">
                      {item.title}
                    </h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-8 py-4 bg-slate-50 hover:bg-blue-50 text-blue-600 font-bold rounded-xl border border-slate-200 hover:border-blue-200 transition-colors flex items-center justify-center group">
                Read All News
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
