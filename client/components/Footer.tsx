import React from "react";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";

const SOCIAL_LINKS = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/miss_mell._/",
    label: "Instagram",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/melissa-jouda-962548296/",
    label: "LinkedIn",
  },
];

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-white/10 pb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 md:mb-0 text-center md:text-left">
            Let's Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fac2a16b69531496d99c6dcb9dcc67f6d%2F9e275e97dd6c4901a0afe378a636055d?format=webp&width=100&height=100"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-black uppercase tracking-[0.2em] text-white">Jouda Melissa</span>
            </div>
            <p className="text-white/40 mb-10 max-w-xs leading-[1.8] font-medium text-sm">
              I am a passionate front-end developer with a knack for creating visually stunning and user-friendly web applications. With a strong foundation in React, TypeScript, and Node.js, I specialize in building dynamic interfaces that seamlessly integrate with powerful back-end services.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-brand-dark transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-brand-orange/80">Navigation</h3>
            <div className="flex flex-col gap-4 text-white/70">
              <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="hover:text-white transition-colors">Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="hover:text-white transition-colors">About Us</a>
              <a href="#service" onClick={(e) => scrollToSection(e, "#service")} className="hover:text-white transition-colors">Service</a>
              <a href="#project" onClick={(e) => scrollToSection(e, "#project")} className="hover:text-white transition-colors">Work Experience</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-brand-orange/80">Contact</h3>
            <div className="flex flex-col gap-4 text-white/70 font-semibold">
              <p>+213 776638367</p>
              <p>Joudamelissa2@gmail.com</p>
              <p>melissaJouda.com</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>Copyright © 2026 melissajouda. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">User Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
