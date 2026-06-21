import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/TechStoneLogo.png";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container-page flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2.5 group">
<img src={logo} alt="Keystone Learn Logo" className="h-10 w-12 object-contain" suppressHydrationWarning/>            <span className="font-display text-2xl leading-tight">
              Keystone <span className="text-accent">Learn</span>
              {/* <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground"> Solutions</span> */}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-accent" }}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-4 text-sm">Request a Proposal</Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container-page py-4 flex flex-col gap-3">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 border-t border-border bg-secondary/40">
        <div className="container-page py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
<img src={logo} alt="Keystone Learn Logo" className="h-10 w-12 object-contain" suppressHydrationWarning />              <span className="font-display text-lg">Keystone Learn</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              A corporate learning partner helping organisations build future-ready
              teams through expert-led technology and professional skills training.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Reach Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Mail size={14} className="mt-1" /> sales@keystonelearn.in</li>
              <li className="flex items-start gap-2"><Phone size={14} className="mt-1" /> +91 96863 53294</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-1" /> Central Bengaluru, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70">
          <div className="container-page py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
            <p>© {new Date().getFullYear()} Keystone Learn. All rights reserved.</p>
            <p>Crafted for learners and the teams that grow them.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
