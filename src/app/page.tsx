import Link from "next/link";
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { HeroSequence } from "@/components/HeroSequence";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { LogisticsSection } from "@/components/sections/LogisticsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-500/30">
      <AnimatedCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center backdrop-blur-md bg-white/50 border-b border-slate-100/50 transition-all">
        <div className="text-xl font-extrabold tracking-widest text-blue-700"></div>
        <div className="hidden md:flex space-x-8 items-center text-sm font-bold text-slate-700">
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
          <Link 
            href="#contact" 
            className="rounded-full bg-blue-600 px-6 py-2.5 text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          <Link 
            href="#contact" 
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-lg"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSequence />
      
      {/* Page Sections */}
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <IndustriesSection />
      <ProcessSection />
      <TechnologiesSection />
      <PortfolioSection />
      <PhilosophySection />
      <LogisticsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
