import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const homeLinks = [
  { href: "#vct", label: "Về chúng tôi" },
  { href: "#hst", label: "Hệ sinh thái" },
  { href: "#vh", label: "Văn hóa" },
  { href: "#dt", label: "Đối tác" },
  { href: "#lh", label: "Liên hệ" },
];

const recruitLinks = [
  { href: "#ut", label: "Ưu thế" },
  { href: "#vt", label: "Vị trí đang tuyển" },
  { href: "#hs", label: "Nộp hồ sơ" },
  { href: "#lh", label: "Liên hệ" },
];

export function SiteHeader() {
  const location = useLocation();
  const isRecruit = location.pathname.startsWith("/tuyendung");
  const links = isRecruit ? recruitLinks : homeLinks;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
          <span className="text-gradient">H2V</span>
          <span className="text-foreground/90">MEDIA</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {isRecruit && (
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-smooth">Trang chủ</Link>
          )}
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-smooth">
              {l.label}
            </a>
          ))}
          <Link
            to="/tuyendung"
            className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
          >
            Tuyển dụng
          </Link>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4 text-sm">
            {isRecruit && <Link to="/" onClick={() => setOpen(false)}>Trang chủ</Link>}
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <Link to="/tuyendung" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground inline-block w-fit">
              Tuyển dụng
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
