import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#040E27] text-white overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <img
                src="/h2v-icon.svg"
                alt="H2V Media"
                className="h-14 w-14 object-contain drop-shadow-[0_10px_18px_rgba(255,73,0,0.28)] transition-smooth"
              />
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl tracking-tighter">H2V <span className="text-primary">MEDIA</span></span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Excellence or Nothing</span>
              </div>
            </a>
            <p className="text-lg text-white/50 leading-relaxed max-w-md font-light mb-8">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ H2V MEDIA — Nơi sáng tạo nội dung số, tự động hoá và tiếp thị quốc tế hội tụ để kiến tạo những giá trị bền vững.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8">Danh mục</h4>
            <ul className="space-y-4">
              {[
                { href: "/#vct", label: "Về chúng tôi" },
                { href: "/#hst", label: "Hệ sinh thái" },
                { href: "/#vh", label: "Văn hóa" },
                { href: "/#lh", label: "Liên hệ" },
                { to: "/tuyendung", label: "Tuyển dụng" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} className="text-white/60 hover:text-primary transition-smooth font-medium">{link.label}</a>
                  ) : (
                    <a href={link.to!} className="text-white/60 hover:text-primary transition-smooth font-medium">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8">Liên hệ</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={18} className="shrink-0 text-primary" />
                <span className="text-sm text-white/60 leading-relaxed font-light">Toà BS12, The Beverly Solari, Vinhomes Grand Park, TP Thủ Đức, HCM</span>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="text-primary" />
                <a href="tel:+84907696177" className="text-white/60 hover:text-primary transition-smooth font-medium">+84 907 696 177</a>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="text-primary" />
                <a href="mailto:contact@h2vmedia.com" className="text-white/60 hover:text-primary transition-smooth font-medium">contact@h2vmedia.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">
            © {new Date().getFullYear()} H2V MEDIA — International Digital Excellence
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">
            <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
