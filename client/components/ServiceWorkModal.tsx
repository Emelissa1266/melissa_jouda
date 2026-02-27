import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
};

export type ServiceType = {
  id: string;
  title: string;
  description: string;
  projects: Project[];
};

const SERVICES_DATA: Record<string, ServiceType> = {
  "web-developper": {
    id: "web-developper",
    title: "Web Development",
    description: "Modern, high-performance websites built with the latest technologies.",
    projects: [
      {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart functionality and payment integration.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "Next.js", "Stripe", "Tailwind"],
        link: "#",
      },
      {
        title: "Portfolio CMS",
        description: "A custom content management system for creative professionals.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        tags: ["TypeScript", "Node.js", "PostgreSQL"],
        github: "#",
      }
    ]
  },
  "ui-ux-design": {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centric designs that are both beautiful and functional.",
    projects: [
      {
        title: "Mobile Banking App",
        description: "Focusing on ease of use and accessibility for financial management.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        tags: ["Figma", "User Research", "Prototyping"],
      },
      {
        title: "Travel Booking Interface",
        description: "A clean and modern interface for searching and booking flights.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
        tags: ["Figma", "Design System"],
      }
    ]
  },
  "full-stack-project-development": {
    id: "full-stack-project-development",
    title: "Full-Stack Project Development",
    description: "End-to-end development of complex web applications.",
    projects: [
      {
        title: "SaaS Dashboard",
        description: "Comprehensive dashboard for monitoring and managing enterprise data.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "Express", "MongoDB", "Chart.js"],
        link: "#",
      },
      {
        title: "Real-time Chat App",
        description: "Scalable chat application with instant messaging and file sharing.",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
        tags: ["Socket.io", "React", "Redis"],
        github: "#",
      }
    ]
  }
};

interface ServiceWorkModalProps {
  serviceId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceWorkModal({ serviceId, isOpen, onClose }: ServiceWorkModalProps) {
  const service = serviceId ? SERVICES_DATA[serviceId] : null;

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] p-0 border-none shadow-2xl">
        <div className="p-8 md:p-12">
          <DialogHeader className="mb-12">
            <div className="flex flex-col gap-4">
               <div className="bg-brand-purple/20 text-brand-dark px-4 py-1.5 rounded-full w-fit text-xs font-black uppercase tracking-widest border border-brand-purple/30">
                 Our Work
               </div>
               <DialogTitle className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter">
                {service.title} <span className="text-brand-purple italic font-light">Projects</span>
               </DialogTitle>
               <DialogDescription className="text-brand-dark/60 text-lg max-w-2xl font-medium leading-relaxed">
                {service.description}
               </DialogDescription>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.projects.map((project, idx) => (
              <div key={idx} className="group bg-[#F3F4F6] rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.link && (
                      <a href={project.link} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark hover:scale-110 transition-transform shadow-xl">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-xl">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-wider bg-white px-3 py-1 rounded-full text-brand-dark/40 border border-slate-200 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-black text-brand-dark mb-2 tracking-tight">{project.title}</h4>
                  <p className="text-brand-dark/50 text-sm leading-relaxed font-medium line-clamp-2">
                    {project.description}
                  </p>
                  <button className="mt-auto pt-6 flex items-center gap-2 text-brand-dark font-black text-sm group/btn">
                    View Case Study <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
               <p className="text-brand-dark/30 uppercase font-black tracking-[0.2em] text-[10px] mb-2">Want to see more?</p>
               <h5 className="text-2xl font-black text-brand-dark">Let's build something <span className="text-brand-orange">together</span>.</h5>
            </div>
            <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-black text-sm flex items-center gap-2 hover:bg-brand-dark/90 transition-all hover:scale-105 shadow-xl" onClick={onClose}>
              Start a Project <ArrowUpRight className="w-4 h-4 text-brand-purple" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
