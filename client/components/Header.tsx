import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav className="bg-brand-dark/90 backdrop-blur-md rounded-full py-2 px-4 flex items-center justify-between border border-white/10 shadow-2xl">
        <div className="flex-1 flex justify-center items-center gap-1 md:gap-4">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                link.active
                  ? "bg-brand-purple text-brand-dark"
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          <Link to="/" className="mx-2 md:mx-6 shrink-0 group">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fac2a16b69531496d99c6dcb9dcc67f6d%2F9e275e97dd6c4901a0afe378a636055d?format=webp&width=100&height=100"
              alt="Melissa Logo"
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
            />
          </Link>

          {NAV_LINKS.slice(3).map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                link.active
                  ? "bg-brand-purple text-brand-dark"
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
