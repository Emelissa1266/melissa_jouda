import React from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [activeLink, setActiveLink] = React.useState("#home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveLink(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll spy observer to highlight links dynamically
  React.useEffect(() => {
    const sections = NAV_LINKS.map(link => document.querySelector(link.href));
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveLink(`#${id}`);
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Lock body scroll when navigation drawer is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close navigation drawer on Escape keypress
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
      {/* Outer wrapper maintaining the floating pill layout without CSS transform constraints */}
      <div className="w-full max-w-4xl mx-auto px-4 pt-6 pointer-events-auto">
        <nav className="bg-brand-dark/90 backdrop-blur-md rounded-full py-2 px-4 flex items-center justify-between border border-white/10 shadow-2xl relative">
          
          {/* Desktop Navigation Menu (visible on screens >= 1024px) */}
          <div className="hidden lg:flex flex-1 items-center justify-between">
            {/* Left Links */}
            <div className="flex items-center gap-4">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple",
                    activeLink === link.href
                      ? "bg-brand-purple text-brand-dark"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Centered Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="shrink-0 group mx-6"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fac2a16b69531496d99c6dcb9dcc67f6d%2F9e275e97dd6c4901a0afe378a636055d?format=webp&width=100&height=100"
                alt="Melissa Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
              />
            </a>

            {/* Right Links */}
            <div className="flex items-center gap-4">
              {NAV_LINKS.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple",
                    activeLink === link.href
                      ? "bg-brand-purple text-brand-dark"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Header pill content (visible on screens < 1024px) */}
          <div className="flex lg:hidden w-full items-center justify-between">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="shrink-0 group"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fac2a16b69531496d99c6dcb9dcc67f6d%2F9e275e97dd6c4901a0afe378a636055d?format=webp&width=100&height=100"
                alt="Melissa Logo"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
              />
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Slide-out Sidebar Drawer Navigation (rendered at root level under header) */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="pointer-events-auto">
            {/* Dark Full-Screen Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#0b0b0c]/85 backdrop-blur-md z-[100] lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Menu Panel (w-full on mobile, w-[380px] on tablet) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen w-full md:w-[380px] bg-brand-dark border-l border-white/10 p-8 md:p-12 shadow-2xl flex flex-col z-[101] lg:hidden text-white"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header row (Logo left, Close right) */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-10 shrink-0">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fac2a16b69531496d99c6dcb9dcc67f6d%2F9e275e97dd6c4901a0afe378a636055d?format=webp&width=100&height=100"
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-xl font-black uppercase tracking-[0.2em] text-white">Melissa</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                  aria-label="Close navigation menu"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Vertical Navigation Links (centered and equally spaced) */}
              <nav className="flex flex-col justify-center flex-grow gap-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      scrollToSection(e, link.href);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "text-3xl md:text-4xl font-black tracking-tight transition-all text-left flex items-center justify-between group py-2 focus-visible:outline-none focus-visible:text-brand-purple",
                      activeLink === link.href
                        ? "text-brand-purple"
                        : "text-white/65 hover:text-white hover:translate-x-2"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className={cn(
                      "w-8 h-8 transition-transform duration-300",
                      activeLink === link.href 
                        ? "text-brand-purple rotate-45" 
                        : "text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                    )} />
                  </a>
                ))}
              </nav>

              {/* Sidebar social connections */}
              <div className="mt-auto pt-10 border-t border-white/10 shrink-0">
                <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em] mb-4">Let's Connect</p>
                <div className="flex gap-4">
                  {[
                    { Icon: Twitter, href: "#" },
                    { Icon: Instagram, href: "https://www.instagram.com/miss_mell._/" },
                    { Icon: Linkedin, href: "#" },
                    { Icon: Github, href: "https://github.com/Emelissa1266" },
                  ].map(({ Icon, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-brand-dark transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
