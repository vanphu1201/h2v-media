import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-100 overflow-hidden relative">
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-10 group">
              <div className="flex flex-col leading-none">
                <span className="font-bold text-2xl tracking-tighter text-slate-900">
                  H2V <span className="text-slate-300 font-light">MEDIA</span>
                </span>
                <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-slate-500 mt-1">
                  International Excellence
                </span>
              </div>
            </a>
            <p className="text-base text-slate-500 leading-relaxed max-w-sm font-light mb-10">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ H2V MEDIA — Kiến tạo giá trị số bền vững thông qua sáng tạo
              nội dung, tự động hoá và tiếp thị quốc tế.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-950 mb-10">
              Danh mục
            </h4>
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
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.to!}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-950 mb-10">
              Liên hệ
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <MapPin size={18} className="shrink-0 text-slate-400" />
                <span className="text-sm text-slate-500 leading-relaxed font-light">
                  The Beverly Solari, Vinhomes Grand Park, TP Thủ Đức, HCM
                </span>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="text-slate-400" />
                <a
                  href="tel:+84907696177"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300"
                >
                  +84 907 696 177
                </a>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="text-slate-400" />
                <a
                  href="mailto:contact@h2vmedia.com"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300"
                >
                  contact@h2vmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-slate-400">
            © {new Date().getFullYear()} H2V MEDIA
          </div>
          <div className="flex gap-10 text-[10px] font-medium tracking-[0.1em] uppercase text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
