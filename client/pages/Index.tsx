import { useState } from "react";
import { ArrowUpRight, Star, Mail, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceWorkModal } from "@/components/ServiceWorkModal";
import profileImage from "../img/me.png";
import Image2 from "../img/me2.png";
import eclipse from "../img/Ellipse 2.png";
import vector from "../img/Vector 2.png";
import nova1 from "../img/nova4.png";
import pc from "../img/fc.png";
import mk from "../img/marketing1.png";
import mark1 from "../img/mark1.png";

export default function Index() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (id: string) => {
    setSelectedService(id);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      <ServiceWorkModal
        serviceId={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[90vh] pt-40 pb-16 px-6 bg-background flex flex-col items-center overflow-hidden"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative elements */}
        <div className="absolute top-[30%] left-10 md:left-[13%] max-w-[200px] hidden lg:block animate-in fade-in slide-in-from-left duration-1000">
         <img src={vector} alt="Decorative Vector" className="w-32 h-auto object-contain " />
         <p className="mt-10 text-m text-foreground/70 leading-relaxed font-semibold italic">
            "Melissa's clean and creative development work brought our vision to life. Truly impressive and highly recommended."
          </p>
        </div>

        <div className="absolute top-[40%] right-10 md:right-[10%] hidden lg:block animate-in fade-in slide-in-from-right duration-1000 text-center">
           <div className="flex gap-1 mb-2 text-brand-orange justify-center">
              <Star className="w-7 h-7 fill-current" />
              <Star className="w-7 h-7 fill-current" />
              <Star className="w-7 h-7 fill-current" />
            </div>
            <p className="text-4xl font-black text-brand-dark tracking-tighter">3 Years</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-black mt-1">Experince</p>
        </div>

        {/* Hello Pill */}
        <div className="bg-white rounded-full px-5 py-1.5 shadow-sm border border-slate-100 mb-6 inline-flex items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-widest text-foreground/60">Hello!</span>
        </div>

        {/* Hero Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-center tracking-tighter leading-[0.9] max-w-5xl mx-auto text-brand-dark"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          I'm Melissa, <br />
          Software Engineer
        </motion.h1>

        {/* Profile Image & Background Circle */}
        <motion.div
          className="relative mt-auto w-full max-w-2xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute bottom-0 w-[90%] md:w-[100%] aspect-square bg-brand-purple rounded-full -z-10 animate-in zoom-in duration-700"></div>

          <img
            src={profileImage}
            alt="Melissa"
            className="w-full max-w-lg object-contain z-10 drop-shadow-[0_0px_0px_rgba(0,0,0,0.1)] relative"
          />
              <img
           src={eclipse}
            alt="Eclipse"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xL object-contain z-0"
          />

          {/* Hero Buttons */}
          <motion.div
            className="absolute bottom-10 -translate-x-1/2 z-20 flex gap-2 bg-white/20 backdrop-blur-xl p-1.5 rounded-full border border-white/30 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <button className="px-8 py-3 bg-white text-brand-dark rounded-full font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              Portfolio <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all">
              Hire me
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="bg-brand-dark py-32 px-6 relative overflow-hidden rounded-[4rem] -mt-20 z-10 mx-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="max-w-xl">
              <h2 className="text-5xl ml-[50px] md:text-(6xl font-black text-white mb-0 leading-tight">
                My <span className="text-brand-purple italic font-light">Services</span>
              </h2>
            </div>
            <div className="max-w-md pt-4">
              <p className="text-white/50 leading-relaxed font-medium text-sm md:text-base mr-[50px]">
                I craft modern, user-focused web experiences — from concept and design to deployment. Clean code, smooth interfaces, and a touch of creativity in every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "web-developper",
                title: "marketing expert",
                image: mk
              },
              {
                id: "ui-ux-design",
                title: "UI/UX Design",
                image: nova1 
              },
              {
                id: "full-stack-project-development",
                title: "Full-Stack Project Development",
                image: pc
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-brand-purple rounded-[2.5rem] overflow-hidden group cursor-pointer h-full flex flex-col p-2 shadow-2xl transition-transform hover:-translate-y-2"
                onClick={() => openServiceModal(service.id)}
              >
                <div className="p-8 pb-4">
                  <h3 className="text-2xl font-black text-brand-dark leading-tight group-hover:text-brand-dark/80 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-auto p-4">
                  <div className="bg-white/40 backdrop-blur-md rounded-[2rem] overflow-hidden relative aspect-[1.1/1] flex items-center justify-center p-3 shadow-inner">
                     <img
                       src={service.image}
                       className="w-full h-full object-cover rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-500"
                       alt={service.title}
                     />
                     <div className="absolute bottom-6 right-6 w-14 h-14 bg-brand-dark rounded-full flex items-center justify-center text-white scale-90 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 shadow-xl">
                       <ArrowUpRight className="w-7 h-7" />
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <div key={dot} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${dot === 0 ? 'bg-brand-purple w-10' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-32 text-brand-dark tracking-tighter">
            My Work Experince
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-dark/10 hidden md:block"></div>

            <div className="space-y-32">
              {[
                {
                  company: "Hosting platform as startup",
                  period: "jan 2025 - Mai 2025",
                  role: "Front-end developper",
                  description: "Developed a full-stack cloud hosting platform using React, TypeScript, and Node.js. Built dynamic dashboards, project management pages, and resource deployment interfaces."
                },
                {
                  company: "more than 4 Hackathon Projects",
                  period: "dec 2024",
                  role: "UI/UX Designer",
                  description: "Redesigned the interface of a medical management platform to improve user flow and accessibility. Created interactive prototypes in Figma and presented a modern, patient-focused experience.",
                  dot: "dark"
                },
                {
                  company: "RH Website",
                  period: "Sep 2024",
                  role: "Full-Stack Developer",
                  description: "Designed and developed a professional website for RH, highlighting its brand identity, features, and services. Implemented a responsive design with modern UI animations and a consistent dark theme."
                }
              ].map((exp, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-3xl font-black text-brand-dark mb-1">{exp.company}</h3>
                    <p className="text-xs font-black opacity-30 uppercase tracking-[0.2em]">{exp.period}</p>
                  </div>

                  <div className="relative flex items-center justify-center shrink-0">
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-[#F3F4F6] z-10 flex items-center justify-center shadow-lg">
                      <div className={`w-4 h-4 rounded-full ${exp.dot === 'dark' ? 'bg-brand-dark' : 'bg-brand-dark/20'}`}></div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-black text-brand-dark mb-3">{exp.role}</h4>
                    <p className="text-sm text-brand-dark/50 leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-[#E8EBF1] rounded-[4rem] overflow-hidden p-8 md:p-24 flex flex-col lg:flex-row items-center gap-20 shadow-xl">
          <div className="flex-1 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-brand-purple rounded-full blur-[80px] opacity-30 -z-10"></div>
             <img
               src={Image2}
               alt="Why Hire Melissa"
               className="relative z-10 w-full max-w-md mx-auto object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-1000"
             />
          </div>
          <div className="flex-1 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-brand-dark mb-10 leading-[0.9] tracking-tighter">
              Why <span className="italic font-light text-brand-purple">Hire</span> me?
            </h2>
            <p className="text-brand-dark/60 leading-relaxed mb-12 text-base md:text-lg font-medium">
              I combine strong technical skills with a keen eye for design, creating digital experiences that are both functional and beautiful. With experience in full-stack development and UI/UX design, I turn complex ideas into modern, user-friendly interfaces. I care deeply about clean code, responsive design, and user satisfaction — every project I take on reflects passion, precision, and creativity. I don't just build websites — I craft experiences that make an impact.
            </p>
            <button className="bg-brand-dark text-white px-12 py-5 rounded-full font-black text-lg flex items-center gap-2 hover:bg-brand-dark/90 transition-all hover:scale-105 shadow-2xl shadow-brand-dark/20">
              Hire me <ArrowUpRight className="w-6 h-6 text-brand-purple" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-brand-dark mb-16 tracking-tighter leading-[0.9]">
            Have an Awsome Project <br /> Idea? <span className="text-brand-orange italic font-light">Let's Discuss</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-20 relative">
            <div className="flex-1 relative group">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-[#F3F4F6] border-2 border-transparent rounded-full pl-16 pr-8 py-6 focus:outline-none focus:bg-white focus:border-brand-orange transition-all font-bold text-lg shadow-inner"
              />
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-orange">
                <Mail className="w-7 h-7" />
              </div>
            </div>
            <button className="bg-brand-orange text-white px-12 py-6 rounded-full font-black text-xl hover:bg-brand-orange/90 transition-all shadow-2xl shadow-brand-orange/40 hover:scale-105 active:scale-95">
              Send
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-brand-dark/30 font-black uppercase tracking-[0.2em] text-[10px]">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(254,139,92,0.5)]"></div>
              4.5/5 Average Ratings
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(254,139,92,0.5)]"></div>
              25+ Winning Awards
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(254,139,92,0.5)]"></div>
              Certified Product Designer
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
