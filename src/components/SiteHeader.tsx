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
  { href: "#vt", label: "Vị trí tuyển dụng" },
  { href: "#lh", label: "Liên hệ" },
];

export function SiteHeader() {
  const isRecruit =
    typeof window !== "undefined" && window.location.pathname.startsWith("/tuyendung");
  const links = isRecruit ? recruitLinks : homeLinks;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container-tight flex items-center justify-between">
        <a href="/" className="flex items-center gap-4">
          <img 
            src={scrolled ? "/src/assets/logo-globe-light.png" : "/src/assets/logo-globe-dark.png"} 
            alt="H2V Logo" 
            className={`w-12 h-12 object-contain ${scrolled ? "mix-blend-multiply" : "mix-blend-screen"}`} 
            loading="eager"
          />
          <div className="flex flex-col leading-none">
            <span className={`font-black text-2xl tracking-tighter ${scrolled ? "text-foreground" : "text-white"}`}>
              H2V <span className="text-primary italic">MEDIA</span>
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                scrolled ? "text-slate-600 hover:text-primary" : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={isRecruit ? "#lh" : "/tuyendung"}
            className="px-8 py-3.5 rounded-2xl bg-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-primary/20 active:scale-95"
          >
            {isRecruit ? "Liên hệ ngay" : "Tuyển dụng"}
          </a>
        </nav>

        <button
          className={`lg:hidden p-2 rounded-xl bg-primary/10 text-primary transition-all ${scrolled ? "" : "bg-white/10 text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <nav className="container-tight py-12 flex flex-col gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={isRecruit ? "#lh" : "/tuyendung"}
                onClick={() => setOpen(false)}
                className="w-full py-5 rounded-[2rem] bg-primary text-white text-center text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20"
              >
                {isRecruit ? "Liên hệ ngay" : "Tuyển dụng"}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
