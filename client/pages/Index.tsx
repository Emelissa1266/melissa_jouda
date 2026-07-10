import React, { useState } from "react";
import { ArrowUpRight, Star, Mail, Quote, ChevronDown, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceWorkModal } from "@/components/ServiceWorkModal";
import profileImage from "../img/me.png";
import Image2 from "../img/meeeee.png";
import eclipse from "../img/Ellipse 2.png";
import vector from "../img/Vector 2.png";
import nova1 from "../img/uiux.png";
import pc from "../img/fc.png";
import mk from "../img/marketing.jpg";
import mark1 from "../img/mark1.png";
import { toast } from "sonner";


export default function Index() {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    service: "" as "Marketing" | "Design" | "Web Development" | "",
    description: "",
    budget: "",
    deadline: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: ""
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    // Validate fields
    if (!formData.fullName.trim()) {
      toast.error("Full Name is required");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Email Address is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Phone Number is required");
      return;
    }
    const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      toast.error("Please enter a valid phone number (e.g. +1 234 567 890)");
      return;
    }
    if (!formData.service) {
      toast.error("Please select a service");
      return;
    }
    if (!formData.description.trim()) {
      toast.error("Project description is required");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast.success(data.message);
        setSubmitStatus({ type: "success", message: data.message });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          description: "",
          budget: "",
          deadline: "",
        });
      } else {
        toast.error(data.message || "Failed to submit request.");
        setSubmitStatus({ type: "error", message: data.message || "Submission failed." });
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to submit request due to a network error.");
      setSubmitStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        className="relative min-h-[90vh] pt-40 pb-16 px-6 bg-background flex flex-col items-center overflow-hidden scroll-mt-28 lg:scroll-mt-32"
        initial={{ opacity: 0, y: 80 }}
         id="home"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative elements */}
        <div className="absolute top-[30%] left-10 md:left-[13%] max-w-[200px] hidden lg:block animate-in fade-in slide-in-from-left duration-1000">
         <img src={vector} alt="Decorative Vector" className="w-32 h-auto object-contain " />
         <p className="mt-10 text-sm text-foreground/70 leading-relaxed font-semibold italic">
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
          className="text-4xl md:text-6xl lg:text-7xl font-black text-center tracking-tighter leading-[0.9] max-w-5xl mx-auto text-brand-dark scroll-mt-28 lg:scroll-mt-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          id="about"
        >
          I'm Melissa, <br />
          a <span className="text-brand-orange italic font-light">Full-Stack Developer</span> & <br className="md:hidden" /> <span className="border-b-4 border-brand-purple">Marketing Expert</span>.
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
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl object-contain z-0"
          />

          {/* Hero Buttons */}
          <motion.div
            className="absolute bottom-10 -translate-x-1/2 z-20 flex gap-2 bg-white/20 backdrop-blur-xl p-1.5 rounded-full border border-white/30 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
           <button
              onClick={() => {
                const projectSection = document.getElementById("project");
                if (projectSection) projectSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-white text-brand-dark rounded-full font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm"
            >
              Portfolio <ArrowUpRight className="w-4 h-4" />
            </button>
  <button
              onClick={() => {
                window.open("https://github.com/Emelissa1266", "_blank");
              }}
              className="px-8 py-3 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all"
            >
              github <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section id="service" className="bg-brand-dark py-32 px-6 relative overflow-hidden rounded-[4rem] -mt-20 z-10 mx-4 scroll-mt-28 lg:scroll-mt-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-0 leading-tight">
                My <span className="text-brand-purple italic font-light">Services</span>
              </h2>
            </div>
            <div className="max-w-md pt-4">
              <p className="text-white/50 leading-relaxed font-medium text-sm md:text-base">
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
            {[0, 1, 2].map((dot) => (
              <div key={dot} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${dot === 0 ? 'bg-brand-purple w-10' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="project" className="py-32 px-6 bg-[#F3F4F6] scroll-mt-28 lg:scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-32 text-brand-dark tracking-tighter">
            My Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-dark/10 hidden md:block"></div>

            <div className="space-y-32">
              {[
   {
    company: "Freelance Full-Stack Developer",
    period: "2024 - Present",
    role: "Web and app Solutions Developer",
    description:
      "Design and develop modern web applications and cloud-based platforms using React, TypeScript, Node.js, PostgreSQL, and MongoDB. Deliver scalable, responsive, and user-friendly solutions tailored to clients' needs."
  },
  {
    company: " ExploriDZ ",
    period: "Jan 2026 - Present",
    role: "Founder & CEO",
    description:
      " Founded ExploriDZ, a digital platform that connects travelers with local experiences and guides. Led product development, marketing strategy, and business operations, resulting in a growing user base and partnerships with local businesses."
  },{
    company: " Raqmen Hosting ",
    period: "Jan 2025 - Present",
    role: "co-Founder & CMO",
    description:
      "Designed and developed a hybrid cloud hosting platform inspired by modern PaaS providers. Built SaaS and IaaS features including project deployment, resource management, billing, monitoring, and Git-based integrations using React, TypeScript, Node.js, PostgreSQL, and MongoDB."
  },
  {
    company: "Open Minds Club",
    period: "2025 - Present",
    role: "Marketing Team Lead",
    description:
      "Lead the marketing department and oversee branding, social media strategy, and promotional campaigns. Coordinate with multimedia and event teams to increase engagement and promote workshops, hackathons, and community initiatives.",
    dot: "dark"
  },
  {
    company: "Hackathons & Innovation Programs",
    period: "2024 - Present",
    role: "UI/UX Designer & Innovator",
    description:
      "Participated in multiple hackathons and entrepreneurship programs, designing modern digital experiences and solving real-world challenges. Created user-centered interfaces in Figma, developed case studies, and collaborated with multidisciplinary teams."
  },
  {
    company: "Rise Up Program - Djezzy",
    period: "2025",
    role: "Startup Program Participant",
    description:
      "Selected for Djezzy's Rise Up startup support program with Raqmen Hosting. Worked alongside mentors and entrepreneurs to strengthen business strategy, pitching skills, and product development while gaining recognition for innovation.",
    dot: "dark"
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

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 text-center bg-[#F3F4F6] scroll-mt-28 lg:scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-brand-dark mb-6 tracking-tighter leading-[0.9]">
            Have an Awesome Project <br /> Idea? <span className="text-brand-orange italic font-light">Let's Discuss</span>
          </h2>
          <p className="text-brand-dark/60 font-medium max-w-lg mx-auto mb-12 text-sm md:text-base leading-relaxed">
            Fill out the form below and let's bring your vision to life. I will respond to your inquiry within 24 hours.
          </p>

          <form onSubmit={handleFormSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 max-w-3xl mx-auto text-left mb-16 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-xs font-black uppercase tracking-widest text-brand-dark/60 ml-2">
                  Full Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#F3F4F6] border-2 border-transparent rounded-[1.2rem] px-6 py-4 focus:outline-none focus:bg-white focus:border-brand-orange transition-all font-semibold text-brand-dark shadow-inner placeholder:text-brand-dark/30"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-brand-dark/60 ml-2">
                  Email Address <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F3F4F6] border-2 border-transparent rounded-[1.2rem] px-6 py-4 focus:outline-none focus:bg-white focus:border-brand-orange transition-all font-semibold text-brand-dark shadow-inner placeholder:text-brand-dark/30"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-brand-dark/60 ml-2">
                  Phone Number <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 234 567 890"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#F3F4F6] border-2 border-transparent rounded-[1.2rem] px-6 py-4 focus:outline-none focus:bg-white focus:border-brand-orange transition-all font-semibold text-brand-dark shadow-inner placeholder:text-brand-dark/30"
                />
              </div>

              {/* Service Needed */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service-select" className="text-xs font-black uppercase tracking-widest text-brand-dark/60 ml-2">
                  Service Needed <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service-select"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value as any })}
                    className="w-full bg-[#F3F4F6] border-2 border-transparent rounded-[1.2rem] px-6 py-4 focus:outline-none focus:bg-white focus:border-brand-orange transition-all font-semibold text-brand-dark shadow-inner appearance-none cursor-pointer placeholder:text-brand-dark/30"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    <option value="Web Development">Web Development</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-dark/40">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-xs font-black uppercase tracking-widest text-brand-dark/60 ml-2">
                  Budget (Optional)
                </label>
                <input
                  type="text"
                  id="budget"
                  placeholder="e.g. 40000DA - 80000DA"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#F3F4F6] border-2 border-transparent rounded-[1.2rem] px-6 py-4 focus:outline-none focus:bg-white focus:border-brand-orange transition-all font-semibold text-brand-dark shadow-inner placeholder:text-brand-dark/30"
                />
              </div>

              {/* Preferred Deadline */}
              <div className="flex flex-col gap-2">
                <label htmlFor="deadline" className="text-xs font-black uppercase tracking-widest text-brand-dark/60 ml-2">
                  Preferred Deadline (Optional)
                </label>
                <input
                  type="date"
                  id="deadline"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full bg-[#F3F4F6] border-2 border-transparent rounded-[1.2rem] px-6 py-4 focus:outline-none focus:bg-white focus:border-brand-orange transition-all font-semibold text-brand-dark shadow-inner placeholder:text-brand-dark/30 text-brand-dark/60"
                />
              </div>
            </div>

            {/* Project Description */}
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="description" className="text-xs font-black uppercase tracking-widest text-brand-dark/60 ml-2">
                Project Description <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="description"
                placeholder="Please describe your project, goals, and requirements..."
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#F3F4F6] border-2 border-transparent rounded-[1.2rem] px-6 py-4 focus:outline-none focus:bg-white focus:border-brand-orange transition-all font-semibold text-brand-dark shadow-inner placeholder:text-brand-dark/30 h-32 resize-none"
              />
            </div>

            {/* Submission Alerts */}
            {submitStatus.type && (
              <div className={`p-4 rounded-[1.2rem] mb-6 font-semibold text-sm ${
                submitStatus.type === "success" 
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-100" 
                  : "bg-rose-50 text-rose-800 border border-rose-100"
              }`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-orange text-white px-12 py-5 rounded-full font-black text-xl hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-3 w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <ArrowUpRight className="w-6 h-6" />
                </>
              )}
            </button>
          </form>

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
