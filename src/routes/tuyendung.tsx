import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Briefcase, GraduationCap, Sparkles, ShieldCheck, Clock, Wallet, Mail, Phone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/tuyendung")({
  head: () => ({
    meta: [
      { title: "Tuyển dụng — H2V MEDIA" },
      { name: "description", content: "Cơ hội nghề nghiệp tại H2V MEDIA — Gia nhập đội ngũ sáng tạo nội dung số, automation và affiliate marketing quốc tế." },
      { property: "og:title", content: "Tuyển dụng — H2V MEDIA" },
      { property: "og:description", content: "Gia nhập H2V MEDIA cùng kiến tạo nội dung số hàng đầu." },
    ],
  }),
  component: RecruitPage,
});

const benefits = [
  { icon: Wallet, title: "Thu nhập hấp dẫn", desc: "Thưởng cá nhân xuất sắc, KPI, tháng 13, lễ Tết, sinh nhật. Phụ cấp 2 mùa/năm." },
  { icon: GraduationCap, title: "Đào tạo phát triển", desc: "Đào tạo nội bộ kỹ năng & chuyên môn hàng tháng, cử đi nâng cao chuyên môn, ngoại ngữ." },
  { icon: Sparkles, title: "Môi trường trẻ", desc: "Năng động, thân thiện, sáng tạo, kích thích phát triển cá nhân tối đa." },
  { icon: ShieldCheck, title: "Chế độ đầy đủ", desc: "BHXH, nghỉ phép, thai sản, du lịch hàng năm theo Luật lao động hiện hành." },
];

const jobs = [
  { title: "Content Creator YouTube", desc: "Lên ý tưởng, sản xuất nội dung kênh YouTube cho thị trường quốc tế." },
  { title: "Automation Engineer", desc: "Triển khai hệ thống automation đa nền tảng (n8n, Make, Zapier, custom)." },
  { title: "Affiliate Marketing Specialist", desc: "Vận hành campaign affiliate quốc tế, tối ưu chuyển đổi đa thị trường." },
  { title: "Video Editor", desc: "Dựng video YouTube, motion graphics cho các kênh triệu sub." },
  { title: "Thumbnail Designer", desc: "Thiết kế thumbnail tối ưu CTR cho video YouTube quốc tế." },
  { title: "Content Writer", desc: "Viết kịch bản chi tiết cho YouTube, social và affiliate funnel." },
];

function RecruitPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
            <Briefcase size={14} /> Cơ hội nghề nghiệp
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-5">
            Gia nhập <span className="text-gradient">H2V MEDIA</span>
          </h1>
          <p className="text-lg text-muted-foreground">Cùng chúng tôi tạo nên những nội dung số hàng đầu thế giới.</p>
        </div>
      </section>

      {/* Ưu thế */}
      <section id="ut" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Ưu thế</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Tại sao chọn H2V MEDIA?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gradient-card border border-border/50 rounded-2xl p-7 hover:shadow-glow transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <b.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vị trí */}
      <section id="vt" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Vị trí đang tuyển</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Tham gia đội ngũ</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {jobs.map((j) => (
              <article key={j.title} className="bg-gradient-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-glow transition-smooth group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-medium">Full-time</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> Đang tuyển</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{j.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{j.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">💰 Thỏa thuận</span>
                  <a href="#hs" className="text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-smooth">
                    Ứng tuyển <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nộp hồ sơ */}
      <section id="hs" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-gradient-card border border-border/50 rounded-3xl p-10 md:p-14 text-center shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bạn đã sẵn sàng đồng hành?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Gửi CV về email: <span className="text-primary font-semibold">contact@h2vmedia.com</span><br />
              Tiêu đề: <em>Vị trí ứng tuyển _ Họ và tên</em><br />
              Hotline: <span className="text-primary font-semibold">+84 907 696 177</span>
            </p>
            <a href="mailto:contact@h2vmedia.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-105 transition-smooth">
              Nộp hồ sơ ngay <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Liên hệ */}
      <section id="lh" className="py-24 bg-card/30">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Liên hệ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">Kết nối với chúng tôi</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="tel:+84907696177" className="bg-gradient-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-smooth flex items-center gap-4">
              <Phone className="text-primary" size={24} />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Hotline</div>
                <div className="font-semibold">+84 907 696 177</div>
              </div>
            </a>
            <a href="mailto:contact@h2vmedia.com" className="bg-gradient-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-smooth flex items-center gap-4">
              <Mail className="text-primary" size={24} />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-semibold">contact@h2vmedia.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
