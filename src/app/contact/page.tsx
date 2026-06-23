import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { AnimatedCursor } from "@/components/AnimatedCursor";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-500/30">
      <AnimatedCursor />
      
      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </nav>

      <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-6">
        <div className="mx-auto max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Let's build the future together.
            </h1>
            <p className="text-lg text-slate-600 mb-12">
              Whether you need to modernize your enterprise infrastructure or digitize your logistics operations, our experts are ready to assist.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900">Email Us</h3>
                  <p className="mt-1 text-slate-600">contact@ojas-nexgen.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900">Call Us</h3>
                  <p className="mt-1 text-slate-600">+1 (800) 555-0199</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900">Headquarters</h3>
                  <p className="mt-1 text-slate-600">100 Innovation Drive<br/>Tech District, CA 94043</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="rounded-3xl bg-slate-50 p-10 shadow-lg ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none" 
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button 
                type="button"
                className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}
