import Link from "next/link";
import { Globe, MessageSquare, Mail, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 pt-24 pb-12 px-6 text-slate-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 border-b border-slate-800 pb-16">
          
          {/* Company Overview */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-widest text-blue-500 mb-6">OJAS</h3>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Transforming Ideas into Digital Reality. We build future-ready software solutions for modern businesses globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <MessageSquare className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="#process" className="hover:text-blue-400 transition-colors">Our Process</Link></li>
              <li><Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Custom Software</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Enterprise Systems</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">AI & Automation</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to our newsletter for the latest tech insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-900 border border-slate-800 rounded-l-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <button 
                type="button" 
                className="bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-r-xl transition-colors flex items-center justify-center"
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
          <p>Copyright © 2025 OJAS NEXGEN SOLUTIONS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
