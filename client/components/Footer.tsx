import { Link } from "react-router-dom";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-white/10 pb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 md:mb-0 text-center md:text-left">
            Lets Connect there
          </h2>
          <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-brand-orange/90 transition-colors">
            Hire me <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fac2a16b69531496d99c6dcb9dcc67f6d%2F9e275e97dd6c4901a0afe378a636055d?format=webp&width=100&height=100"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-black uppercase tracking-[0.2em] text-white">JCREA</span>
            </div>
            <p className="text-white/40 mb-10 max-w-xs leading-[1.8] font-medium text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <Link key={i} to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-brand-dark transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-brand-orange/80">Navigation</h3>
            <div className="flex flex-col gap-4 text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/service" className="hover:text-white transition-colors">Service</Link>
              <Link to="/resume" className="hover:text-white transition-colors">Resume</Link>
              <Link to="/project" className="hover:text-white transition-colors">Project</Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-brand-orange/80">Contact</h3>
            <div className="flex flex-col gap-4 text-white/70">
              <p>+20 11 43 63 73 41</p>
              <p>fawziisayed1209@gmail.com</p>
              <p>fawziulux.com</p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-brand-orange/80">Get the latest information</h3>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-orange/90 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>Copyright © 2023 Fawziulux. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">User Terms & Conditions</Link>
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
