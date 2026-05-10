import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logoLight from "@/assets/logo-globe-dark-removebg-preview.png";
import logoDark from "@/assets/logo-globe-dark-removebg-preview.png";

export function SiteHeader() {
  const { t, i18n } = useTranslation();
  
  const homeLinks = [
    { href: "#vct", label: t("nav.about") },
    { href: "#hst", label: t("nav.ecosystem") },
    { href: "#vh", label: t("nav.culture") },
    { href: "#dt", label: t("nav.partners") },
    { href: "#lh", label: t("nav.contact") },
  ];

  const recruitLinks = [
    { href: "#ut", label: t("nav.advantage") },
    { href: "#vt", label: t("nav.job_positions") },
    { href: "#lh", label: t("nav.contact") },
  ];

  const isRecruit =
    typeof window !== "undefined" && window.location.pathname.startsWith("/tuyendung");
  const links = isRecruit ? recruitLinks : homeLinks;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
  };

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
        <a href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 flex items-center justify-center relative">
            <img 
              src={scrolled ? logoLight : logoDark} 
              alt="H2V Logo" 
              className={`w-24 h-24 max-w-none object-contain absolute transition-transform duration-500 group-hover:scale-110 ${scrolled ? "mix-blend-multiply" : "mix-blend-screen"}`} 
              loading="eager"
            />
          </div>
          <div className="flex flex-col leading-none ml-8">
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
          <div className="flex items-center gap-6">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-widest transition-all px-4 py-2 rounded-xl border ${
                scrolled 
                  ? "text-slate-600 border-slate-200 hover:bg-slate-50" 
                  : "text-white/80 border-white/20 hover:bg-white/10"
              }`}
            >
              <Globe size={14} />
              {i18n.language === "en" ? "VN" : "EN"}
            </button>
            <a
              href={isRecruit ? "#lh" : "/tuyendung"}
              className="px-8 py-3.5 rounded-2xl bg-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-primary/20 active:scale-95"
            >
              {isRecruit ? t("nav.contact_now") : t("nav.recruit")}
            </a>
          </div>
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
              <div className="pt-4 flex flex-col gap-4">
                <button
                  onClick={() => {
                    toggleLang();
                    setOpen(false);
                  }}
                  className="w-full py-5 rounded-[2rem] border border-slate-200 text-foreground text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3"
                >
                  <Globe size={18} className="text-primary" />
                  {i18n.language === "en" ? "Vietnamese (VI)" : "English (EN)"}
                </button>
                <a
                  href={isRecruit ? "#lh" : "/tuyendung"}
                  onClick={() => setOpen(false)}
                  className="w-full py-5 rounded-[2rem] bg-primary text-white text-center text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20"
                >
                  {isRecruit ? t("nav.contact_now") : t("nav.recruit")}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
