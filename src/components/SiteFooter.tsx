import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/40">
      <div className="container mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-black text-2xl tracking-tight mb-3">
            <span className="text-gradient">H2V</span> <span>MEDIA</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            CÔNG TY CỔ PHẦN CÔNG NGHỆ H2V MEDIA — Nơi sáng tạo nội dung số, tự động hoá và tiếp thị quốc tế hội tụ.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Danh mục</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#vct" className="hover:text-foreground transition-smooth">Về chúng tôi</a></li>
            <li><a href="/#hst" className="hover:text-foreground transition-smooth">Hệ sinh thái</a></li>
            <li><a href="/#vh" className="hover:text-foreground transition-smooth">Văn hóa</a></li>
            <li><a href="/#lh" className="hover:text-foreground transition-smooth">Liên hệ</a></li>
            <li><Link to="/tuyendung" className="hover:text-foreground transition-smooth">Tuyển dụng</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Liên hệ</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-primary" /><span>Toà BS12, The Beverly Solari, KĐT Vinhomes Grand Park, P. Long Bình, TP Hồ Chí Minh</span></li>
            <li className="flex gap-2"><Phone size={16} className="text-primary" /><a href="tel:+84907696177">+84 907 696 177</a></li>
            <li className="flex gap-2"><Mail size={16} className="text-primary" /><a href="mailto:contact@h2vmedia.com">contact@h2vmedia.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} H2V MEDIA. All rights reserved.
      </div>
    </footer>
  );
}
