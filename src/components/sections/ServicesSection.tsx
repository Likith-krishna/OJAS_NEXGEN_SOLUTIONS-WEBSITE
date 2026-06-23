"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Lightbulb, 
  Cloud, 
  Building2, 
  Bot, 
  Palette, 
  Wrench 
} from "lucide-react";

const SERVICES = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed around unique business requirements.",
    icon: Code2,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Web Application Development",
    description: "Modern, scalable, responsive web applications.",
    icon: Globe,
    color: "from-sky-500 to-blue-600"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform and native mobile solutions.",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance and digital transformation planning.",
    icon: Lightbulb,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Cloud Solutions",
    description: "Cloud migration, deployment, and infrastructure management.",
    icon: Cloud,
    color: "from-blue-600 to-sky-400"
  },
  {
    title: "Enterprise Software Solutions",
    description: "ERP, CRM, workflow automation, and business management systems.",
    icon: Building2,
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "AI & Automation",
    description: "Intelligent systems, AI integration, automation workflows, and predictive analytics.",
    icon: Bot,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "UI/UX Design",
    description: "Modern user-centered experiences that drive engagement and conversions.",
    icon: Palette,
    color: "from-fuchsia-500 to-indigo-500"
  },
  {
    title: "Software Maintenance & Support",
    description: "Continuous updates, monitoring, optimization, and technical support.",
    icon: Wrench,
    color: "from-blue-500 to-indigo-400"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full bg-slate-50 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Enterprise IT Solutions
          </h3>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            We deliver end-to-end technology services designed to scale your business, optimize operations, and secure your digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:ring-blue-500 hover:-translate-y-2"
            >
              {/* Animated Glow on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 transition-opacity duration-500 group-hover:opacity-5 blur-xl rounded-[2rem]" />
              
              <div className="relative z-10">
                <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg ${service.color}`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-600 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
