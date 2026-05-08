import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Youtube, Workflow, Globe, Sparkles, Target, Heart, Zap, Trophy, Rocket, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/goda/br.jpg";
import aboutBg from "@/assets/goda/br2.jpg";
import cultureBg from "@/assets/goda/br3.jpg";
import ytImg from "@/assets/service-youtube.jpg";
import autoImg from "@/assets/service-automation.jpg";
import affImg from "@/assets/service-affiliate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "H2V MEDIA — Sáng tạo nội dung, Automation & Affiliate quốc tế" },
      { name: "description", content: "CÔNG TY CỔ PHẦN CÔNG NGHỆ H2V MEDIA — Sáng tạo nội dung YouTube, hệ thống Automation đa nền tảng và Affiliate Marketing quốc tế." },
      { property: "og:title", content: "H2V MEDIA" },
      { property: "og:description", content: "Sáng tạo nội dung YouTube, Automation đa nền tảng & Affiliate Marketing quốc tế." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Youtube, title: "Sáng tạo nội dung YouTube", desc: "Sản xuất nội dung YouTube chất lượng cao, từ ý tưởng đến triển khai cho thị trường trong nước và quốc tế.", img: ytImg },
  { icon: Workflow, title: "Triển khai Automation đa nền tảng", desc: "Xây dựng và vận hành hệ thống tự động hoá quy trình, kết nối đa nền tảng, tối ưu năng suất doanh nghiệp.", img: autoImg },
  { icon: Globe, title: "Tiếp thị liên kết quốc tế", desc: "Affiliate Marketing toàn cầu — kết nối thương hiệu với hàng triệu khách hàng tiềm năng trên khắp thế giới.", img: affImg },
];

const values = [
  { icon: Sparkles, title: "Sáng tạo không giới hạn", desc: "Trong mọi cách làm, luôn luôn tồn tại một cách làm tốt hơn." },
  { icon: Target, title: "Tập trung kết quả", desc: "Tìm đúng người, hỏi đúng chuyện, làm đúng việc — Play to Win." },
  { icon: Zap, title: "Internet hoặc không gì cả", desc: "Bắt đầu một nguồn thu nhập mới trên Internet ngay từ hôm nay." },
  { icon: Heart, title: "Niềm tin tạo động lực", desc: "Khi có đủ niềm tin, sẽ tạo ra động lực thực hiện không giới hạn." },
  { icon: Trophy, title: "Đơn giản mà hiệu quả", desc: "Hãy thành công theo cách đơn giản nhất." },
];

const partners = ["YouTube Partner", "Meta Business", "Google Ads", "Amazon Associates", "ClickBank", "TikTok Shop"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
              <Sparkles size={14} /> Excellence or Nothing
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6">
              Chào mừng đến với<br />
              <span className="text-gradient">H2V MEDIA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Nơi đưa sáng tạo người Việt ra toàn thế giới — Hội tụ Nội dung số, Automation và Affiliate Marketing quốc tế.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#hst" className="px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-smooth inline-flex items-center gap-2">
                Khám phá dịch vụ <ArrowRight size={18} />
              </a>
              <a href="#lh" className="px-7 py-3.5 rounded-xl border border-border bg-card/40 backdrop-blur font-semibold hover:bg-card transition-smooth">
                Liên hệ ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="vct" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Về chúng tôi</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Doanh nghiệp công nghệ – truyền thông thế hệ mới</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ H2V MEDIA tập trung vào ba trụ cột chiến lược: sáng tạo nội dung số, tự động hoá quy trình và tiếp thị liên kết quốc tế. Chúng tôi đồng hành cùng đối tác kiến tạo những giá trị bền vững trên không gian Internet toàn cầu.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "100+", label: "Dự án triển khai" },
              { num: "10M+", label: "Lượt tiếp cận hàng tháng" },
              { num: "20+", label: "Quốc gia & vùng lãnh thổ" },
            ].map((s) => (
              <div key={s.label} className="bg-gradient-card border border-border/50 rounded-2xl p-8 text-center shadow-elegant">
                <div className="text-5xl font-black text-gradient mb-2">{s.num}</div>
                <div className="text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hệ sinh thái / Services */}
      <section id="hst" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Hệ sinh thái</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Dịch vụ H2V MEDIA cung cấp</h2>
            <p className="text-muted-foreground text-lg">Một hệ sinh thái toàn diện — từ ý tưởng, sản xuất đến vận hành & tăng trưởng.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="group bg-gradient-card border border-border/50 rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
                </div>
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                    <s.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Văn hóa */}
      <section id="vh" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Văn hóa</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Excellence or Nothing</h2>
            <p className="text-muted-foreground text-lg">Xuất sắc hoặc không có gì — 5 niềm tin định hình tổ chức H2V MEDIA.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gradient-card border border-border/50 rounded-2xl p-7 hover:border-primary/50 transition-smooth">
                <v.icon className="text-primary mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Đối tác */}
      <section id="dt" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Đối tác</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Cùng các nền tảng hàng đầu</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p) => (
              <div key={p} className="aspect-[3/2] bg-gradient-card border border-border/50 rounded-xl flex items-center justify-center text-center px-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-smooth">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liên hệ */}
      <ContactSection />

      <SiteFooter />
    </div>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section id="lh" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Liên hệ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Sẵn sàng hợp tác cùng H2V MEDIA</h2>
            <p className="text-muted-foreground text-lg mb-8">Hãy để chúng tôi đồng hành cùng bạn trên hành trình bứt phá trên Internet.</p>
            <ul className="space-y-4">
              <li className="flex gap-3"><MapPin className="text-primary mt-1 shrink-0" size={20} /><span>Toà BS12, The Beverly Solari, KĐT Vinhomes Grand Park, P. Long Bình, TP Hồ Chí Minh</span></li>
              <li className="flex gap-3"><Phone className="text-primary shrink-0" size={20} /><a href="tel:+84907696177" className="hover:text-primary transition-smooth">+84 907 696 177</a></li>
              <li className="flex gap-3"><Mail className="text-primary shrink-0" size={20} /><a href="mailto:contact@h2vmedia.com" className="hover:text-primary transition-smooth">contact@h2vmedia.com</a></li>
            </ul>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-gradient-card border border-border/50 rounded-2xl p-7 shadow-elegant space-y-4"
          >
            <div>
              <label className="text-sm font-medium mb-2 block">Tên của bạn</label>
              <input required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-smooth" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input type="email" required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-smooth" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Lời nhắn</label>
              <textarea rows={4} required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-smooth resize-none" />
            </div>
            <button type="submit" className="w-full px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-smooth">
              {sent ? "Đã gửi! Cảm ơn bạn." : "Gửi lời nhắn"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
