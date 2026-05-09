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
  const isRecruit =
    typeof window !== "undefined" && window.location.pathname.startsWith("/tuyendung");
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-2xl tracking-tighter text-slate-950">
              H2V <span className="text-primary italic">MEDIA</span>
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-bold uppercase tracking-widest text-slate-600 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={isRecruit ? "#hs" : "/tuyendung"}
            className="px-8 py-3 rounded-full bg-primary text-white text-[13px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 shadow-vital hover:scale-105 active:scale-95"
          >
            {isRecruit ? "Nộp hồ sơ" : "Tuyển dụng"}
          </a>
        </nav>

        <button
          className="md:hidden text-slate-950"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-12 flex flex-col gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[14px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-50 pb-4"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={isRecruit ? "#hs" : "/tuyendung"}
                onClick={() => setOpen(false)}
                className="px-8 py-5 rounded-2xl bg-primary text-white text-center text-[14px] font-bold uppercase tracking-widest shadow-vital"
              >
                {isRecruit ? "Nộp hồ sơ ngay" : "Tuyển dụng"}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
