import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  X,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/use-page-meta";

import jobVideo from "@/assets/jobs/video_real.png";
import jobWriter from "@/assets/jobs/writer_real.png";
import jobContent from "@/assets/jobs/content_real.png";

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

export default function RecruitPage() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Wallet,
      title: t("recruit_page.benefits_items.salary.title"),
      desc: t("recruit_page.benefits_items.salary.desc"),
    },
    {
      icon: GraduationCap,
      title: t("recruit_page.benefits_items.career.title"),
      desc: t("recruit_page.benefits_items.career.desc"),
    },
    {
      icon: Users,
      title: t("recruit_page.benefits_items.env.title"),
      desc: t("recruit_page.benefits_items.env.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("recruit_page.benefits_items.policy.title"),
      desc: t("recruit_page.benefits_items.policy.desc"),
    },
  ];

  const jobs = [
    {
      id: "writer",
      title: t("jobs.writer.title"),
      desc: t("jobs.writer.desc"),
      img: jobWriter,
      employmentType: "Fulltime",
      location: t("jobs.common.location_hcm"),
      compensation: t("jobs.common.salary_plus"),
      details: {
        tasks: [
          t("jobs.writer.tasks.0"),
          t("jobs.writer.tasks.1"),
          t("jobs.writer.tasks.2")
        ],
        requirements: [
          t("jobs.writer.reqs.0"),
          t("jobs.writer.reqs.1"),
          t("jobs.writer.reqs.2")
        ],
        benefits: [
          t("jobs.common.benefits.fixed_salary"),
          t("jobs.common.benefits.team_bonus"),
          t("jobs.common.benefits.holiday_bonus"),
          t("jobs.common.benefits.equipment"),
          t("jobs.common.benefits.training")
        ]
      },
    },
    {
      id: "editor",
      title: t("jobs.editor.title"),
      desc: t("jobs.editor.desc"),
      img: jobVideo,
      employmentType: "Fulltime",
      location: t("jobs.common.location_hcm"),
      compensation: t("jobs.common.salary_plus"),
      details: {
        tasks: [
          t("jobs.editor.tasks.0"),
          t("jobs.editor.tasks.1"),
          t("jobs.editor.tasks.2")
        ],
        requirements: [
          t("jobs.editor.reqs.0"),
          t("jobs.editor.reqs.1"),
          t("jobs.editor.reqs.2")
        ],
        benefits: [
          t("jobs.common.benefits.fixed_salary"),
          t("jobs.common.benefits.team_bonus"),
          t("jobs.common.benefits.holiday_bonus"),
          t("jobs.common.benefits.equipment"),
          t("jobs.common.benefits.training")
        ]
      },
    },
    {
      id: "content",
      title: t("jobs.content.title"),
      desc: t("jobs.content.desc"),
      img: jobContent,
      employmentType: "Freelance/CTV",
      location: t("jobs.common.location_online_hcm"),
      compensation: t("jobs.common.by_product"),
      details: {
        tasks: [
          t("jobs.content.tasks.0"),
          t("jobs.content.tasks.1"),
          t("jobs.content.tasks.2")
        ],
        requirements: [
          t("jobs.content.reqs.0"),
          t("jobs.content.reqs.1"),
          t("jobs.content.reqs.2")
        ],
        benefits: [
          t("jobs.content.benefits.0"),
          t("jobs.content.benefits.1"),
          t("jobs.content.benefits.2"),
          t("jobs.content.benefits.3")
        ]
      },
    },
  ];

  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  usePageMeta({
    title: "Tuyển dụng — H2V MEDIA",
    description: "Khám phá cơ hội nghề nghiệp tại H2V MEDIA - Nơi bạn bứt phá giới hạn sáng tạo.",
  });

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section - Hybrid Style */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 h2v-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/3" />
        <div className="container-tight relative z-10 text-center lg:text-left">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-10 border border-primary/20"
            >
              Careers at H2V Media
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black leading-tight mb-12 tracking-tight"
            >
              {t("recruit_page.title")} <br />
              <span className="text-primary italic">{t("recruit_page.title_accent")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/70 mb-12 leading-relaxed max-w-2xl font-light"
            >
              {t("recruit_page.desc")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits - Goda Clean Grid */}
      <section id="ut" className="section-padding bg-secondary">
        <div className="container-tight">
          <FadeIn>
            <div className="text-center mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">{t("recruit_page.benefits_sub")}</span>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground">{t("recruit_page.benefits_title")}</h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-10">
                    <b.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{b.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs List - Goda Style Cards */}
      <section id="vt" className="section-padding bg-white">
        <div className="container-tight">
          <FadeIn>
            <div className="text-center mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">{t("recruit_page.jobs_sub")}</span>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground">{t("recruit_page.jobs_title")}</h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((j, i) => (
              <FadeIn key={j.id} delay={i * 0.1}>
                <button
                  onClick={() => setSelectedJob(j)}
                  className="w-full text-left group bg-white rounded-[3rem] border border-slate-100 overflow-hidden goda-shadow hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img src={j.img} alt={j.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm border border-primary/10">
                        {j.employmentType}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex-grow">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                      <MapPin size={14} className="text-primary" /> {j.location}
                    </div>
                    <h4 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{j.title}</h4>
                    <p className="text-sm text-slate-500 font-light mb-10 line-clamp-2 leading-relaxed">{j.desc}</p>
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 border-t border-slate-50 pt-8">
                      {t("jobs.common.view_detail", { defaultValue: "Chi tiết công việc" })} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-primary" />
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Robust implementation */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] z-10"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-secondary border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="lg:w-3/5 p-12 lg:p-20 overflow-y-auto border-r border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Job Details</span>
                <h3 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter text-foreground leading-tight">{selectedJob.title}</h3>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="px-5 py-2 rounded-2xl bg-secondary text-slate-600 text-xs font-bold uppercase tracking-widest border border-slate-200">{selectedJob.employmentType}</div>
                  <div className="px-5 py-2 rounded-2xl bg-secondary text-slate-600 text-xs font-bold uppercase tracking-widest border border-slate-200">{selectedJob.location}</div>
                  <div className="px-5 py-2 rounded-2xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">{selectedJob.compensation}</div>
                </div>

                <div className="space-y-12">
                  <section>
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center"><CheckCircle2 size={20} /></div> {t("recruit_page.job_detail.tasks")}
                    </h4>
                    <ul className="space-y-4">
                      {selectedJob.details.tasks.map((t, idx) => (
                        <li key={idx} className="text-base text-slate-500 font-light flex gap-4 leading-relaxed">
                          <span className="text-primary font-bold">•</span> {t}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center"><CheckCircle2 size={20} /></div> {t("recruit_page.job_detail.requirements")}
                    </h4>
                    <ul className="space-y-4">
                      {selectedJob.details.requirements.map((r, idx) => (
                        <li key={idx} className="text-base text-slate-500 font-light flex gap-4 leading-relaxed">
                          <span className="text-primary font-bold">•</span> {r}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              <div className="lg:w-2/5 p-12 lg:p-20 bg-secondary flex flex-col relative overflow-y-auto">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                  <Briefcase className="absolute -bottom-10 -right-10" size={300} />
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-10">{t("recruit_page.job_detail.benefits")}</h4>
                  <ul className="space-y-6 mb-16">
                    {selectedJob.details.benefits.map((b, idx) => (
                      <li key={idx} className="text-base text-foreground font-bold flex items-center gap-6">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                          <ArrowRight size={16} />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-6">{t("recruit_page.job_detail.contact_title")}</h4>
                  <p className="text-[11px] text-slate-500 mb-8 leading-relaxed">
                    {t("recruit_page.job_detail.contact_desc")} <span className="text-primary font-bold">contact@h2vmedia.com</span><br /><br />
                    {t("recruit_page.job_detail.email_subject_desc")} <br />
                    <span className="font-bold text-foreground">{t("recruit_page.job_detail.subject_structure", { defaultValue: "Vị trí ứng tuyển_Họ và tên ứng viên" })}</span><br />
                    {t("recruit_page.job_detail.example_subject")}
                  </p>
                  <a
                    href="mailto:contact@h2vmedia.com"
                    className="w-full py-6 rounded-[2rem] bg-primary text-white font-black uppercase tracking-widest text-sm text-center block hover:bg-blue-600 transition-all shadow-xl shadow-primary/20 active:scale-95"
                  >
                    {t("recruit_page.job_detail.apply_now")}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}
