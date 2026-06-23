"use client";

import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-slate-50 py-32 px-6">
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Let's discuss your next big project.
          </h3>
          <p className="text-lg text-slate-600 mb-12">
            Reach out to our experts to discover how we can accelerate your digital transformation journey.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start group">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-slate-900">Email Us</h4>
                <p className="mt-1 text-slate-600">Yogesh@ojaslogistics.com</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-slate-900">Call Us</h4>
                <p className="mt-1 text-slate-600">+91 9677177862</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Contact Form */}
        <div className="rounded-[2.5rem] bg-white p-10 shadow-xl ring-1 ring-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          
          <h4 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h4>
          <form className="flex flex-col gap-5 relative z-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                <input type="text" id="company" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Company Inc." />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
              <select id="service" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer">
                <option value="">Select a service...</option>
                <option value="custom-software">Custom Software Development</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="ai">AI & Automation</option>
                <option value="consulting">IT Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
            </div>
            
            <button type="button" className="mt-2 w-full rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
