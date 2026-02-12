import { Terminal, Facebook, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/ErrorbyBot", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@ErrorbyBOT", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/error-by-bot/posts/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                <Terminal className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                Error<span className="text-accent"> by Bot</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A specialized academic team focused on structured university education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "System", "Courses", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Popular Courses</h4>
            <ul className="space-y-2 text-sm">
              {["Programming", "OOP", "Database", "Algorithm", "Embedded System"].map((c) => (
                <li key={c}>
                  <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Error by Bot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
