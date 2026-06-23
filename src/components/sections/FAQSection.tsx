"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What services do you provide?",
    answer: "We provide end-to-end IT services including custom software development, web & mobile applications, enterprise solutions (ERP/CRM), cloud migration, AI & automation, and continuous technical support."
  },
  {
    question: "How long does development take?",
    answer: "Development timelines vary based on project complexity. A standard web application might take 4-8 weeks, while a complex enterprise system could take 3-6 months. We provide detailed estimates during the discovery phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive maintenance and support packages. We ensure your software remains secure, optimized, and updated to handle scale as your business grows."
  },
  {
    question: "Can you develop custom software?",
    answer: "Absolutely. Custom software development tailored to specific business workflows is our core expertise. We build solutions from the ground up to solve your unique challenges."
  },
  {
    question: "How do I start a project?",
    answer: "You can start by reaching out via our contact form or calling us directly. We will schedule a free initial consultation to discuss your requirements, after which we'll provide a strategic proposal."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">FAQ</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === idx ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 bg-white hover:border-blue-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
