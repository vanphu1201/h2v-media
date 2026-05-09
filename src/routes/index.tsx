import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Youtube,
  Workflow,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Lightbulb,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/use-page-meta";

import ceoImg from "@/assets/leaders/ceo.png";
import contentMgrImg from "@/assets/leaders/content_manager.png";
import ctoImg from "@/assets/leaders/cto.png";

import ytImg from "@/assets/service-youtube.jpg";
import autoImg from "@/assets/service-automation.jpg";
import affImg from "@/assets/service-affiliate.jpg";

import ytLogo from "@/assets/partners/youtube.png";
import metaLogo from "@/assets/partners/meta.png";
import googleLogo from "@/assets/partners/google_ads.png";
import tiktokLogo from "@/assets/partners/tiktok.png";

const services = [
  {
    icon: Youtube,
    title: "YouTube Content",
    desc: "Phát triển và quản lý kênh YouTube chuyên nghiệp, tối ưu hóa nội dung thu hút hàng triệu lượt xem trên toàn cầu.",
    img: ytImg,
    color: "text-red-500",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Thiết kế và vận hành quy trình tự động hóa thông minh, tối ưu hiệu suất vận hành trên nhiều nền tảng số.",
    img: autoImg,
    color: "text-blue-500",
  },
  {
    icon: Globe,
    title: "Affiliate Global",
    desc: "Mở rộng tiếp thị sản phẩm ra thị trường quốc tế thông qua mạng lưới liên kết và chiến lược thông minh.",
    img: affImg,
    color: "text-emerald-500",
  },
];

const visionMission = [
  {
    icon: Globe,
    title: "Tầm nhìn",
    desc: "Khẳng định bản sắc trí tuệ và sức sáng tạo Việt trên bản đồ truyền thông thế giới, mang dòng vốn ngoại tệ về phụng sự Quốc gia.",
  },
  {
    icon: Rocket,
    title: "Sứ mệnh",
    desc: "Hợp lực cùng 1,000 nhân sự Việt kiến tạo sự nghiệp thịnh vượng trên Internet Global, nâng tầm vị thế lao động tri thức.",
  },
];

const leadership = [
  {
    name: "Mr Phan Thanh Vy",
    role: "CEO",
    img: ceoImg,
    badge: "Strategist",
  },
  {
    name: "Mrs Lê Thị Thanh Thảo",
    role: "Content Director",
    img: contentMgrImg,
    badge: "Creative",
  },
  {
    name: "Mr Lê Đặng Hiếu",
    role: "Technical Director",
    img: ctoImg,
    badge: "Architect",
  },
];

const partners = [
  { name: "YouTube", logo: ytLogo },
  { name: "Meta", logo: metaLogo },
  { name: "TikTok", logo: tiktokLogo },
  { name: "Google Ads", logo: googleLogo },
];

const FadeIn = ({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  usePageMeta({
    title: "H2V MEDIA — International Digital Excellence",
    description: "Sáng tạo nội dung YouTube, Automation đa nền tảng và Affiliate Marketing quốc tế.",
  });

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 z-0" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] z-0 animate-pulse" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="subtitle mb-0">H2V Media International</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-6xl md:text-[8.5rem] font-extrabold text-slate-950 leading-[0.9] mb-12 tracking-tighter"
            >
              Excellence <br />
              <span className="text-primary italic">or Nothing.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-3xl text-slate-500 mb-16 leading-relaxed font-light max-w-3xl text-balance"
            >
              Nơi đưa sáng tạo Việt vươn tầm Thế giới qua hệ sinh thái <span className="text-slate-950 font-medium">Content & Automation</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-8"
            >
              <a
                href="#hst"
                className="group relative px-10 py-5 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest shadow-vital hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Khám phá dịch vụ <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <a
                href="#lh"
                className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-950 hover:text-primary transition-colors"
              >
                Liên hệ hợp tác <div className="w-8 h-px bg-slate-200 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="vct" className="section-padding bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <FadeIn>
              <span className="subtitle text-primary/80">Our Vision</span>
              <h2 className="text-5xl md:text-7xl font-extrabold mb-12 tracking-tight">
                Kiến tạo tương lai <br />
                <span className="italic font-light opacity-50">Kỹ thuật số.</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed font-light mb-16 max-w-lg">
                Chúng tôi không chỉ làm truyền thông, chúng tôi xây dựng hệ thống vận hành thông minh giúp người Việt bứt phá giới hạn thu nhập trên quy mô toàn cầu.
              </p>
              <div className="grid grid-cols-2 gap-10">
                {visionMission.map((item, i) => (
                  <div key={item.title} className="space-y-4">
                    <div className="w-12 h-1 bg-primary" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={50}>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                <img 
                  src={affImg} 
                  alt="Global Reach" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="text-4xl font-extrabold mb-2 tracking-tighter">10M+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Monthly Reach</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hst" className="section-padding relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-32">
              <span className="subtitle">Core Services</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950">
                Giải pháp <span className="text-primary italic">Đột phá.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.15}>
                <div className="group relative p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-elegant transition-all duration-700 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 ${s.color}`}>
                    <s.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-950">{s.title}</h3>
                  <p className="text-base text-slate-500 leading-relaxed font-light mb-10 flex-grow">
                    {s.desc}
                  </p>
                  <div className="relative aspect-video rounded-3xl overflow-hidden group-hover:shadow-lg transition-all duration-700">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="ld" className="section-padding bg-slate-50/50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="subtitle">Leadership</span>
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950">
                  Ban <span className="text-primary italic">Lãnh Đạo.</span>
                </h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed">
                Đội ngũ chuyên gia dày dặn kinh nghiệm, dẫn dắt H2V chinh phục thị trường truyền thông số toàn cầu.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.15}>
                <div className="group">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-10 bg-slate-200 shadow-sm border border-slate-100">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                      <span className="px-5 py-2 rounded-full bg-primary text-white text-[12px] font-bold uppercase tracking-widest">
                        {member.badge}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-950">{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {member.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="dt" className="py-32 border-y border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-primary">Strategic Partners</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 items-center">
            {partners.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div className="flex justify-center group">
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    className="h-14 md:h-16 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter-none" 
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="lh" className="section-padding overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="subtitle">Get in Touch</span>
            <h2 className="text-6xl md:text-[8rem] font-extrabold mb-20 text-slate-950 tracking-tighter leading-none">
              Sẵn sàng <br />
              <span className="text-primary italic">Hợp tác.</span>
            </h2>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
              <div className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all text-left group">
                <Mail className="text-primary mb-8 group-hover:scale-110 transition-transform" size={44} strokeWidth={1.5} />
                <div className="text-[12px] uppercase font-bold tracking-widest text-slate-500 mb-4">Email Official</div>
                <a href="mailto:contact@h2vmedia.com" className="text-2xl md:text-3xl font-bold text-slate-950 hover:text-primary transition-colors">
                  contact@h2vmedia.com
                </a>
              </div>
              <div className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all text-left group">
                <Phone className="text-primary mb-8 group-hover:scale-110 transition-transform" size={44} strokeWidth={1.5} />
                <div className="text-[12px] uppercase font-bold tracking-widest text-slate-500 mb-4">Hotline 24/7</div>
                <a href="tel:+84907696177" className="text-2xl md:text-3xl font-bold text-slate-950 hover:text-primary transition-colors">
                  +84 907 696 177
                </a>
              </div>
            </div>
            
            <a
              href="mailto:contact@h2vmedia.com"
              className="inline-flex px-14 py-6 rounded-full bg-slate-950 text-white text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl hover:scale-105 active:scale-95"
            >
              Gửi lời nhắn cho chúng tôi
            </a>
          </FadeIn>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
