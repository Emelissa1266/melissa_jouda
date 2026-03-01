import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import nova1 from "@/img/nova1.png";
import nova2 from "@/img/nova2.png";
import nova3 from "@/img/nova3.png";    
import arvr from "@/img/arvr.png";
import design from "@/img/design.png";
import pc from "@/img/pc.png";
import mark1 from "@/img/mark1.png";
import mark2 from "@/img/mark2.jpg";
import frontend1 from "@/img/frontend1.png";
import express2 from "@/img/express2.png";


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
    title: "marketing",
    description: "Crafting compelling narratives and strategies to elevate brands and drive engagement.",
    projects: [
      {
        title: "Actor & Video Content Creator",
        description: "I create engaging, high-impact video content",
        image: mark1,
        tags: ["Tech events & hackathons", "Startup promotions", "Educational reels", "Brand storytelling"],
        link: "#",
      },
      {
        title: "Marketing Expert",
        description: "I focus on visibility, engagement, and conversion — not just aesthetics..",
        image: mark2,
        tags: ["Digital strategy & positioning", "Social media content planning", "Product storytelling"],
        link: "#",
      }
    ]
  },
  "ui-ux-design": {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centric designs that are both beautiful and functional.",
    projects: [
      {
        title: "Mobile management App",
        description: "Focusing on ease of use and accessibility for clubs management.",
        image: nova3,
        tags: ["Figma", "User Research", "Prototyping"],
      },
      {
        title: "AR/VR Interface",
        description: "Innovative design for immersive augmented and virtual reality experiences.",
        image: arvr,
        tags: ["Figma", "Design System"],
      },
      {
        title: "portfolio design",
        description: "A sleek and modern design for a personal portfolio website.",
        image: design,
        tags: ["Figma", "Branding", "Visual Design"],

      }
    ]
  },
  "full-stack-project-development": {
    id: "full-stack-project-development",
    title: "Full-Stack Project Development",
    description: "End-to-end development of complex web applications.",
    projects: [
      {
        title: "hosting platform",
        description: "A robust hosting platform for developers to deploy and manage their applications with ease.",
        image: frontend1,
        tags: ["React", "Express", "MongoDB", "Node.js"],
        link: "#",
      },
      {
        title: "e-commerce platform",
        description: "A scalable e-commerce platform with real-time features and seamless user experience.",
        image: express2,
        tags: ["node.js", "React", "postgreSQL", "socket.io"],
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
