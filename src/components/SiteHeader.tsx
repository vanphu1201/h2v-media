import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "bg-white/90 backdrop-blur-2xl border-b border-border/10 py-3 shadow-elegant" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-glow group-hover:scale-105 transition-smooth">H</div>
          <div className="flex flex-col leading-none">
            <span className={`font-black text-2xl tracking-tighter transition-colors duration-500 ${scrolled ? "text-[#040E27]" : "text-white"}`}>
              H2V <span className={scrolled ? "text-primary italic" : "text-white italic"}>MEDIA</span>
            </span>
            <span className={`text-[9px] font-black tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled ? "text-primary/40" : "text-white/40"}`}>International</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className={`uppercase tracking-[0.2em] text-[10px] font-black transition-smooth hover:text-primary ${scrolled ? "text-[#040E27]/60" : "text-white/60"}`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to={isRecruit ? "#hs" : "/tuyendung"}
            className="px-8 py-3 rounded-full bg-[#040E27] text-white shadow-glow hover:scale-105 active:scale-95 transition-smooth uppercase tracking-[0.2em] text-[10px] font-black"
          >
            {isRecruit ? "Nộp hồ sơ" : "Tuyển dụng"}
          </Link>
        </nav>
        
        <button className={`md:hidden ${scrolled ? "text-[#040E27]" : "text-white"}`} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 border-t border-border/10 bg-white shadow-2xl"
          >
            <nav className="container mx-auto px-8 py-12 flex flex-col gap-8">
              {isRecruit && <Link to="/" onClick={() => setOpen(false)} className="uppercase tracking-[0.2em] text-[10px] font-black text-muted-foreground">Trang chủ</Link>}
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="uppercase tracking-[0.2em] text-[10px] font-black text-[#040E27]">{l.label}</a>
              ))}
              <Link 
                to={isRecruit ? "#hs" : "/tuyendung"} 
                onClick={() => setOpen(false)} 
                className="px-8 py-4 rounded-2xl bg-[#040E27] text-white text-center font-black uppercase tracking-[0.2em] text-[10px]"
              >
                {isRecruit ? "Nộp hồ sơ ngay" : "Tuyển dụng"}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
