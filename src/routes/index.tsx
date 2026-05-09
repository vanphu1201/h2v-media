import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
  ShieldCheck,
  Users,
  Workflow,
  Youtube,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/use-page-meta";
import heroImg from "@/assets/goda/br.jpg";
import cultureBg from "@/assets/goda/br3.jpg";
import ytImg from "@/assets/service-youtube.jpg";
import autoImg from "@/assets/service-automation.jpg";
import affImg from "@/assets/service-affiliate.jpg";
import ytLogo from "@/assets/partners/youtube.png";
import metaLogo from "@/assets/partners/meta.png";
import googleLogo from "@/assets/partners/google_ads.png";
import tiktokLogo from "@/assets/partners/tiktok.png";
import huanImg from "@/assets/leaders/huan.png";
import hoangImg from "@/assets/leaders/hoang.png";
import tuanImg from "@/assets/leaders/tuan.png";

const services = [
  {
    icon: Youtube,
    title: "Sáng tạo nội dung YouTube",
    desc: "Phát triển và quản lý kênh YouTube chuyên nghiệp, tối ưu hóa nội dung thu hút hàng triệu lượt xem trên toàn cầu.",
    img: ytImg,
  },
  {
    icon: Workflow,
    title: "Triển khai Automation đa nền tảng",
    desc: "Thiết kế và vận hành các quy trình tự động hóa thông minh, giúp tối ưu thời gian, nguồn nhân lực và tăng cường hiệu suất vận hành trên nhiều nền tảng số.",
    img: autoImg,
  },
  {
    icon: Globe,
    title: "Tiếp thị liên kết quốc tế (Affiliate Marketing)",
    desc: "Mở rộng tiếp thị sản phẩm ra thị trường quốc tế thông qua mạng lưới liên kết mượt và chiến lược thông minh.",
    img: affImg,
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Sáng tạo",
    desc: "Liên tục đổi mới, phá vỡ mọi giới hạn.",
  },
  {
    icon: ShieldCheck,
    title: "Trách nhiệm",
    desc: "Đề cao việc cống hiến những nội dung mang giá trị tích cực, nhân văn và hữu ích cho cộng đồng.",
  },
  {
    icon: Rocket,
    title: "Hiệu quả",
    desc: "Tối ưu quy trình, đạt kết quả vượt trội.",
  },
  {
    icon: Zap,
    title: "Đột phá",
    desc: "Dám nghĩ, dám làm, tạo bước nhảy vọt.",
  },
  {
    icon: Users,
    title: "Gắn kết",
    desc: "Đồng lòng hợp tác, xây dựng sức mạnh tập thể.",
  },
];

const partners = [
  { name: "YouTube", logo: ytLogo },
  { name: "Facebook", logo: metaLogo },
  { name: "TikTok", logo: tiktokLogo },
  { name: "Google Ads", logo: googleLogo },
];

const leadership = [
  {
    name: "Mr Phan Thanh Vy",
    role: "CEO",
    badge: "CEO",
    img: huanImg,
    desc: "Chuyên gia định hướng chiến lược với nhiều năm kinh nghiệm trong lĩnh vực truyền thông số và quản lý hệ thống tự động hoá. Người truyền cảm hứng và dẫn dắt H2V Media vươn ra biển lớn.",
  },
  {
    name: "Mrs Lê Thị Thanh Thảo",
    role: "Trưởng phòng Nội dung",
    badge: "CONTENT",
    img: hoangImg,
    desc: "Nữ thủ lĩnh sáng tạo với bề dày kinh nghiệm trong việc định hình, quản lý và phát triển các hệ thống nội dung triệu view, luôn nhạy bén với xu hướng toàn cầu.",
  },
  {
    name: "Mr Lê Đặng Hiếu",
    role: "Giám Đốc Technical",
    badge: "TECH",
    img: tuanImg,
    desc: "Chuyên gia công nghệ với kinh nghiệm sâu rộng trong việc thiết kế và vận hành các hệ thống tự động hoá đa nền tảng, đảm bảo hạ tầng kỹ thuật ưu việt giúp bứt phá giới hạn cho các dịch vụ số.",
  },
];

function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const target = Number.parseInt(value, 10);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const duration = 2000;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setCount(Math.floor(target * progress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-6 relative z-10"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
            Tên của bạn
          </label>
          <input
            required
            className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary/30 focus:bg-white outline-none transition-smooth"
            placeholder="Nguyễn Văn A"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary/30 focus:bg-white outline-none transition-smooth"
            placeholder="email@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
          Lời nhắn
        </label>
        <textarea
          rows={4}
          required
          className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary/30 focus:bg-white outline-none transition-smooth resize-none"
          placeholder="Tôi muốn tìm hiểu về dịch vụ..."
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.2em] shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-smooth disabled:opacity-50"
      >
        {sent ? "Gửi thành công!" : "Gửi lời nhắn ngay"}
      </button>
    </form>
  );
}

export default function HomePage() {
  usePageMeta({
    title: "H2V MEDIA — Sáng tạo nội dung, Automation & Affiliate quốc tế",
    description:
      "CÔNG TY CỔ PHẦN CÔNG NGHỆ H2V MEDIA — Sáng tạo nội dung YouTube, hệ thống Automation đa nền tảng và Affiliate Marketing quốc tế.",
    ogTitle: "H2V MEDIA",
    ogDescription:
      "Sáng tạo nội dung YouTube, Automation đa nền tảng & Affiliate Marketing quốc tế.",
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#040E27]">
        <div
          className="absolute inset-0 z-0 opacity-30 scale-105"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040E27]/90 via-[#040E27]/60 to-[#040E27] z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="subtitle text-white/50 mb-8"
            >
              H2V Media International
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-[8rem] font-black text-white leading-[0.9] mb-12 tracking-tighter"
            >
              Excellence <br />
              <span className="text-gradient italic text-glow">or Nothing.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-3xl text-white/60 mb-14 leading-relaxed font-light max-w-3xl"
            >
              Nơi đưa sáng tạo của người Việt ra toàn Thế giới thông qua Sáng tạo nội dung,
              Automation và Affiliate Marketing quốc tế.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#hst"
                className="px-10 py-5 rounded-full bg-primary text-white font-black uppercase tracking-[0.2em] shadow-glow hover:scale-105 transition-smooth flex items-center gap-3"
              >
                Khám phá dịch vụ <ArrowRight size={20} />
              </a>
              <a
                href="#lh"
                className="px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-smooth"
              >
                Liên hệ hợp tác
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="vct" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="subtitle">Our Identity</span>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                  Doanh nghiệp <br />
                  <span className="text-gradient italic text-glow">Thế hệ mới.</span>
                </h2>
                <div className="w-24 h-2 bg-primary rounded-full mb-12" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-12 rounded-[3.5rem] bg-secondary/30 backdrop-blur-sm border border-white"
            >
              <Sparkles className="text-primary/20 absolute -top-6 -right-6" size={80} />
              <p className="text-2xl text-[#040E27]/80 leading-relaxed font-light italic">
                "H2V MEDIA tập trung vào ba trụ cột chiến lược:{" "}
                <span className="text-[#040E27] font-bold">sáng tạo nội dung số</span>,{" "}
                <span className="text-[#040E27] font-bold">tự động hoá quy trình</span> và{" "}
                <span className="text-[#040E27] font-bold">tiếp thị liên kết quốc tế</span>."
              </p>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                Chúng tôi không chỉ xây dựng dịch vụ, chúng tôi kiến tạo những giá trị bền
                vững trên không gian số toàn cầu, mang trí tuệ Việt vươn tầm quốc tế.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "100", suffix: "+", label: "Dự án triển khai", icon: Rocket },
              { num: "10", suffix: "M+", label: "Lượt tiếp cận hàng tháng", icon: Youtube },
              { num: "20", suffix: "+", label: "Quốc gia vận hành", icon: Globe },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group relative p-12 rounded-[3.5rem] bg-white border border-border/10 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] transition-all duration-500 group-hover:bg-primary group-hover:w-full group-hover:h-full group-hover:rounded-none z-0" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-white/20 transition-smooth">
                    <s.icon
                      size={32}
                      className="text-primary group-hover:text-white transition-smooth"
                    />
                  </div>
                  <div className="text-7xl font-black text-[#040E27] mb-4 tracking-tighter group-hover:text-white transition-smooth">
                    <Counter value={s.num} suffix={s.suffix} />
                  </div>
                  <div className="text-muted-foreground font-black uppercase tracking-[0.2em] text-[10px] group-hover:text-white/60 transition-smooth">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ld" className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <span className="subtitle">Leadership</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Ban <span className="text-primary italic">Lãnh Đạo.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-elegant mb-10">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-2">
                      {member.badge}
                    </p>
                    <h4 className="text-2xl font-black text-white">{member.name}</h4>
                  </div>
                </div>
                <div className="px-4 text-center">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-60 mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="hst" className="section-padding bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="subtitle">Dịch vụ nổi bật</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Dịch vụ <span className="text-primary italic">Hợp nhất.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-[3rem] overflow-hidden mb-10 shadow-elegant border border-transparent group-hover:border-primary/20 transition-all duration-700 group-hover:-translate-y-4">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="px-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:shadow-glow group-hover:scale-110">
                    <s.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">
                    {s.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="vh" className="section-padding bg-[#040E27] relative overflow-hidden text-white">
        <div
          className="absolute inset-0 opacity-10 grayscale scale-105"
          style={{
            backgroundImage: `url(${cultureBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040E27] via-[#040E27]/95 to-[#040E27] z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="subtitle text-white/30">Văn hóa H2V</span>
              <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.95]">
                Văn hóa <br />
                <span className="text-gradient italic text-glow">công ty.</span>
              </h2>
              <p className="text-xl text-white/50 leading-relaxed font-light max-w-lg mb-12">
                Những giá trị cốt lõi định hướng cách H2V MEDIA làm việc, cộng tác và phát
                triển mỗi ngày.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-1.5 bg-primary rounded-full" />
                <div className="w-4 h-1.5 bg-white/10 rounded-full" />
                <div className="w-4 h-1.5 bg-white/10 rounded-full" />
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-smooth group"
                >
                  <v.icon
                    className="text-primary mb-6 group-hover:scale-110 transition-smooth"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-bold text-xl mb-3 tracking-tight">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dt" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="subtitle">Đối tác chiến lược</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Đối tác <span className="text-primary italic">chiến lược.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="aspect-[3/2] bg-white rounded-[2rem] flex items-center justify-center p-8 hover:shadow-elegant transition-smooth border border-transparent hover:border-primary/10 grayscale-[0.8] hover:grayscale-0"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-w-full max-h-full object-contain opacity-40 group-hover:opacity-100 transition-smooth"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="lh" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[#040E27] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-12 md:p-24 text-white relative">
              <div className="absolute top-0 right-0 p-24 opacity-5">
                <Mail size={300} />
              </div>
              <div className="relative z-10">
                <span className="subtitle text-white/30 mb-8">Contact Us</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-12 italic text-gradient text-glow">
                  Sẵn sàng <br />
                  <span className="text-white not-italic">Hợp tác.</span>
                </h2>
                <div className="space-y-10">
                  {[
                    {
                      icon: MapPin,
                      text: "The Beverly Solari, Vinhomes Grand Park, TP Thủ Đức, HCM",
                    },
                    { icon: Phone, text: "+84 907 696 177" },
                    { icon: Mail, text: "contact@h2vmedia.com" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <item.icon size={20} className="text-primary mt-1" />
                      <p className="text-white/60 font-light leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 md:p-24 bg-white">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
