import { ArrowRight, Lightbulb, Target, ShieldCheck, Zap, Users, Cpu } from "lucide-react";

export function AboutSection() {
  const VALUES = [
    { title: "Innovation First", icon: Lightbulb },
    { title: "Client Success", icon: Target },
    { title: "Quality Engineering", icon: ShieldCheck },
    { title: "Continuous Improvement", icon: Zap },
    { title: "Long-Term Partnerships", icon: Users },
    { title: "Future-Ready Technology", icon: Cpu },
  ];

  return (
    <section id="about" className="relative w-full bg-white py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
          
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
              About OJAS NEXGEN SOLUTIONS
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Transforming Ideas into <span className="text-blue-600">Digital Reality</span>
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                OJAS NEXGEN SOLUTIONS is a technology-driven IT services company focused on delivering innovative software solutions that help organizations accelerate growth, improve efficiency, and achieve digital transformation.
              </p>
              <p>
                We specialize in custom software development, web applications, enterprise solutions, cloud technologies, business automation, and emerging technologies that enable businesses to stay ahead in an increasingly digital world.
              </p>
              <p>
                Our team combines technical expertise, strategic thinking, and customer-centric development practices to create reliable, scalable, and future-ready software solutions tailored to business needs.
              </p>
            </div>
          </div>

          {/* Right Column - Core Values Grid */}
          <div className="relative">
            {/* Decorative Background Blur */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] blur-2xl opacity-50 -z-10" />
            
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                Our Core Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {VALUES.map((value, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-slate-800">{value.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
