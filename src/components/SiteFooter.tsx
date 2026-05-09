import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-4 mb-8">
              <img 
                src="/src/assets/logo-globe-dark.png" 
                alt="H2V Logo" 
                className="w-14 h-14 object-contain mix-blend-screen" 
              />
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl tracking-tighter text-white">
                  H2V <span className="text-primary italic">MEDIA</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mt-1">
                  International Excellence
                </span>
              </div>
            </a>
            <p className="text-lg text-white/50 leading-relaxed max-w-md font-light mb-8">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ H2V MEDIA — Kiến tạo giá trị số bền vững thông qua sáng tạo nội dung, tự động hoá và tiếp thị quốc tế.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Danh mục</h4>
            <ul className="space-y-4">
              {[
                { href: "/#vct", label: "Về chúng tôi" },
                { href: "/#hst", label: "Hệ sinh thái" },
                { href: "/#vh", label: "Văn hóa" },
                { href: "/#lh", label: "Liên hệ" },
                { to: "/tuyendung", label: "Tuyển dụng" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href || link.to}
                    className="text-white/60 hover:text-blue-500 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Liên hệ</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={18} className="shrink-0 text-blue-500" />
                <span className="text-sm text-white/60 leading-relaxed">
                  Toà BS12, The Beverly Solari, Vinhomes Grand Park, TP Thủ Đức, HCM
                </span>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="text-blue-500" />
                <a
                  href="tel:+84907696177"
                  className="text-white/60 hover:text-blue-500 transition-colors"
                >
                  +84 907 696 177
                </a>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="text-blue-500" />
                <a
                  href="mailto:contact@h2vmedia.com"
                  className="text-white/60 hover:text-blue-500 transition-colors"
                >
                  contact@h2vmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">
          <div>© {new Date().getFullYear()} H2V MEDIA</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
