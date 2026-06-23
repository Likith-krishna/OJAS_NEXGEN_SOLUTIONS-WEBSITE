"use client";

import { motion } from "framer-motion";

const PROCESS_STEPS = [
  { title: "Discovery & Requirement Analysis", desc: "Understanding your business goals, target audience, and specific requirements to define the project scope." },
  { title: "Strategic Planning", desc: "Mapping out the technology stack, project milestones, resource allocation, and delivery timelines." },
  { title: "Design & Architecture", desc: "Creating intuitive wireframes, UI/UX designs, and scalable system architectures." },
  { title: "Development", desc: "Agile engineering using modern frameworks, ensuring clean code and continuous integration." },
  { title: "Testing & Quality Assurance", desc: "Rigorous automated and manual testing to ensure security, performance, and reliability." },
  { title: "Deployment", desc: "Seamless launch into production environments with zero downtime and full scalability." },
  { title: "Ongoing Support & Growth", desc: "Continuous monitoring, updates, and optimization to ensure long-term digital success." },
];

export function ProcessSection() {
  return (
    <section id="process" className="w-full bg-white py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Development Process</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-slate-900">
            How We Deliver Excellence
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-slate-200 -translate-x-1/2" />
          
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md -translate-x-1/2 z-10 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{idx + 1}</span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className={`w-full md:w-5/12 pl-20 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
                  >
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
