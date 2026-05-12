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
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { useTranslation } from "react-i18next";
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

import activity2 from "@/assets/activities/activity_2.jpg";
import activity3 from "@/assets/activities/activity_3.jpg";
import activity4 from "@/assets/activities/activity_4.jpg";
import activity5 from "@/assets/activities/activity_5.jpg";
import activity6 from "@/assets/activities/activity_6.jpg";
import activity7 from "@/assets/activities/activity_7.jpg";
import activity8 from "@/assets/activities/activity_8.jpg";




const partners = [
  { name: "YouTube", logo: ytLogo },
  { name: "Meta", logo: metaLogo },
  { name: "TikTok", logo: tiktokLogo },
  { name: "Google Ads", logo: googleLogo },
];


const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Youtube,
      title: t("services.yt.title"),
      desc: t("services.yt.desc"),
      img: ytImg,
    },
    {
      icon: Workflow,
      title: t("services.auto.title"),
      desc: t("services.auto.desc"),
      img: autoImg,
    },
    {
      icon: Globe,
      title: t("services.aff.title"),
      desc: t("services.aff.desc"),
      img: affImg,
    },
  ];

  const visionMission = [
    {
      title: t("about.vision"),
      desc: t("about.vision_desc"),
    },
    {
      title: t("about.mission"),
      desc: t("about.mission_desc"),
    },
  ];

  const valuesData = [
    { title: t("values.items.creative.title"), desc: t("values.items.creative.desc") },
    { title: t("values.items.responsibility.title"), desc: t("values.items.responsibility.desc") },
    { title: t("values.items.effective.title"), desc: t("values.items.effective.desc") },
    { title: t("values.items.breakthrough.title"), desc: t("values.items.breakthrough.desc") },
  ];

  const leadership = [
    {
      name: "Mr. Phan Thanh Vy",
      role: "CEO",
      img: ceoImg,
      bio: t("leadership.ceo_bio"),
    },
    {
      name: "Ms. Lê Thị Thanh Thảo",
      role: t("leadership.content_role"),
      img: contentMgrImg,
      bio: t("leadership.content_bio"),
    },
    {
      name: "Mr. Lê Đặng Hiếu",
      role: t("leadership.cto_role"),
      img: ctoImg,
      bio: t("leadership.cto_bio"),
    },
  ];

  const companyActivities = [
    { id: 2, img: activity2, title: t("activities.items.engagement") },
    { id: 3, img: activity3, title: t("activities.items.focus") },
    { id: 4, img: activity4, title: t("activities.items.training") },
    { id: 5, img: activity5, title: t("activities.items.workshop") },
    { id: 6, img: activity6, title: t("activities.items.office_work") },
    { id: 7, img: activity7, title: t("activities.items.workspace") },
    { id: 8, img: activity8, title: t("activities.items.team_dinner") },
  ];

  usePageMeta({
    title: "H2V MEDIA — Kiến tạo giá trị số toàn cầu",
    description: "H2V Media là công ty công nghệ sáng tạo tiên phong, chuyên sản xuất nội dung chất lượng cao và giải pháp tiếp thị số.",
  });

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section - Full Screen */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 h2v-gradient text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary rounded-full blur-[180px]" />
        </div>
        
        <div className="container-tight relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/20"
            >
              <Sparkles size={12} /> {t("hero.sub")}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-[5.5rem] font-black leading-[1.1] mb-8 tracking-tighter"
            >
              {t("hero.title_main")} <br />
              <span className="text-primary italic">{t("hero.title_italic")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl font-light"
            >
              {t("hero.desc")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#lh"
                className="px-8 py-4 rounded-2xl bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center gap-2"
              >
                {t("hero.cta_contact")} <ArrowRight size={16} />
              </a>
              <a
                href="#vct"
                className="px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
              >
                {t("hero.cta_about")}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Goda style Clean */}
      <section id="vct" className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">{t("about.sub")}</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-10 text-foreground leading-tight">
                {t("about.title")} <br />
                <span className="text-primary">{t("about.title_accent")}</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed font-light mb-12">
                {t("about.desc")}
              </p>
              
              <div className="space-y-8">
                {visionMission.map((item) => (
                  <div key={item.title} className="flex gap-6 p-8 rounded-[2rem] bg-secondary border border-primary/5">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                      {item.title === "Tầm nhìn" ? <Globe size={24} /> : <Rocket size={24} />}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={ytImg} alt="Media Studio" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 p-10 bg-white rounded-[2.5rem] shadow-2xl border border-slate-50 hidden md:block">
                  <div className="text-4xl font-black text-primary mb-1">10M+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Monthly Reach</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services - Goda style Grid */}
      <section id="hst" className="section-padding bg-secondary">
        <div className="container-tight">
          <FadeIn>
            <div className="text-center mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">{t("services.sub")}</span>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground">{t("services.title")}</h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="group bg-white p-10 rounded-[3rem] goda-shadow hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <s.icon size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-base text-slate-500 leading-relaxed font-light mb-10 flex-grow">{s.desc}</p>
                  <div className="relative aspect-video rounded-3xl overflow-hidden mt-auto">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Goda style Horizontal */}
      <section id="vh" className="section-padding bg-white overflow-hidden">
        <div className="container-tight">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <FadeIn>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">{t("values.sub")}</span>
                <h3 className="text-4xl font-black mb-8 leading-tight">{t("values.title")}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-10">
                  {t("values.desc")}
                </p>
                <div className="w-20 h-1.5 bg-primary rounded-full" />
              </FadeIn>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {valuesData.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="p-10 rounded-[2.5rem] bg-secondary hover:bg-white hover:goda-shadow transition-all duration-500 border border-transparent hover:border-primary/5">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-primary" /> {v.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Combined style */}
      <section id="ld" className="section-padding bg-secondary/50">
        <div className="container-tight text-center mb-24">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">{t("leadership.sub")}</span>
            <h3 className="text-4xl lg:text-5xl font-black text-foreground">{t("leadership.title")}</h3>
          </FadeIn>
        </div>

        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-10 bg-white goda-shadow">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{member.role}</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed max-w-[280px] mx-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Activities - Infinite Loop */}
      <section className="py-24 bg-secondary/30 overflow-hidden">
        <div className="container-tight mb-16">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">{t("activities.sub")}</span>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4">{t("activities.title")}</h3>
              <p className="text-slate-500 font-light max-w-2xl mx-auto">
                {t("activities.desc")}
              </p>
            </div>
          </FadeIn>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex gap-8 items-center whitespace-nowrap py-10"
            animate={{ x: [0, -1800] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              }
            }}
          >
            {[...companyActivities, ...companyActivities, ...companyActivities].map((activity, i) => (
              <div 
                key={`${activity.id}-${i}`} 
                className="relative w-[350px] md:w-[450px] aspect-[16/10] rounded-[2.5rem] overflow-hidden group shrink-0 shadow-xl"
              >
                <img 
                  src={activity.img} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{activity.title}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners - Infinite Marquee (Enhanced) */}
      <section id="dt" className="py-32 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container-tight mb-16">
          <FadeIn>
            <div className="text-center">
              <h3 className="text-3xl font-black text-[#040e27]">{t("partners_section.title")}</h3>
            </div>
          </FadeIn>
        </div>
        
        <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div 
            className="flex gap-20 md:gap-40 items-center whitespace-nowrap py-4"
            animate={{ x: [0, -1200] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }
            }}
          >
            {[...partners, ...partners, ...partners].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex justify-center shrink-0">
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="h-16 md:h-24 w-auto object-contain transition-all duration-500 hover:scale-125 filter-none" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact - Hybrid Trust */}
      <section id="lh" className="section-padding bg-secondary">
        <div className="container-tight">
          <div className="max-w-6xl mx-auto bg-white rounded-[4rem] goda-shadow overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 h2v-gradient text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">{t("contact_section.sub")}</span>
                <h3 className="text-4xl lg:text-5xl font-black mb-12 leading-tight">{t("contact_section.title")}</h3>
                <p className="text-white/60 mb-16 leading-relaxed font-light text-lg">
                  {t("contact_section.desc")}
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                      <Mail size={28} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{t("contact_section.email_label")}</div>
                      <div className="text-xl font-bold">contact@h2vmedia.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                      <Phone size={28} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{t("contact_section.phone_label")}</div>
                      <div className="text-xl font-bold">+84 907 696 177</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-12 lg:p-20">
              <h4 className="text-3xl font-black mb-10">{t("contact_section.form_title")}</h4>
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 block">{t("contact_section.name_label")}</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-secondary border border-slate-100 focus:border-primary focus:outline-none transition-all font-medium" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 block">{t("contact_section.phone_field_label")}</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-secondary border border-slate-100 focus:border-primary focus:outline-none transition-all font-medium" placeholder="090 123 4567" />
                </div>
                <button className="w-full py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  {t("contact_section.submit")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
