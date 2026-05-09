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
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/use-page-meta";

import jobVideo from "@/assets/jobs/video_real.png";
import jobWriter from "@/assets/jobs/writer_real.png";
import jobContent from "@/assets/jobs/content_real.png";

const benefits = [
  {
    icon: Wallet,
    title: "Thu nhập hấp dẫn",
    desc: "Thưởng cá nhân xuất sắc, thưởng theo kết quả hoạt động của Team, thưởng tháng lương thứ 13, thưởng Lễ Tết.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "Đào tạo phát triển",
    desc: "Đào tạo nội bộ các kĩ năng mềm, chuyên môn theo từng dự án. Được cử đi đào tạo nâng cao nghiệp vụ.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    title: "Môi trường năng động",
    desc: "Thân thiện, sáng tạo và kích thích khả năng phát triển cá nhân cao trong môi trường làm việc trẻ trung.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Chế độ đãi ngộ",
    desc: "Đóng bảo hiểm, tuân thủ các chế độ theo Luật lao động hiện hành: nghỉ phép, thai sản, du lịch.",
    color: "bg-purple-50 text-purple-600",
  },
];

const jobs = [
  {
    title: "Biên dịch Kịch bản Video",
    desc: "Biên dịch kịch bản video từ tiếng Việt sang tiếng Anh và các ngôn ngữ khác, đảm bảo văn phong phù hợp với từng quốc gia.",
    img: jobWriter,
    employmentType: "Fulltime",
    location: "TP. Hồ Chí Minh",
    compensation: "Lương + phụ cấp",
    details: {
      tasks: [
        "Biên dịch các nội dung kịch bản cho video từ tiếng Việt sang tiếng Anh.",
        "Phối hợp với team sản xuất để đảm bảo chất lượng nội dung.",
      ],
      requirements: [
        "Ưu tiên ứng viên có kinh nghiệm 01 năm trở lên.",
        "Thông thạo ngoại ngữ, tốt nghiệp chuyên ngành Biên phiên dịch.",
      ],
      benefits: ["Lương cứng + Phụ cấp.", "Thưởng theo thành tích Team.", "Môi trường sáng tạo."],
    },
  },
  {
    title: "Video Editor",
    desc: "Thực hiện dựng, cắt, ghép video theo cấu trúc kịch bản đã định cho các dự án nội dung YouTube quốc tế.",
    img: jobVideo,
    employmentType: "Fulltime",
    location: "TP. Hồ Chí Minh",
    compensation: "Lương + phụ cấp",
    details: {
      tasks: [
        "Tiếp nhận tài liệu và thực hiện dựng video theo kịch bản.",
        "Chịu trách nhiệm về timeline, cắt ghép, chuyển cảnh mượt mà.",
      ],
      requirements: [
        "Thành thạo Adobe Premiere Pro, Capcut.",
        "Có kinh nghiệm làm video cho các kênh YouTube quốc tế.",
      ],
      benefits: ["Lương cứng + Phụ cấp.", "Thưởng theo KPI.", "Trang bị máy tính cấu hình cao."],
    },
  },
  {
    title: "CTV Biên tập video",
    desc: "Thực hiện dựng, cắt, ghép video theo dự án, đảm bảo chất lượng chuyển cảnh và hiệu ứng theo yêu cầu.",
    img: jobContent,
    employmentType: "Freelance/CTV",
    location: "Online / HCM",
    compensation: "Theo dự án",
    details: {
      tasks: [
        "Dựng video theo kịch bản của dự án.",
        "Đảm bảo chất lượng và deadline đề ra.",
      ],
      requirements: [
        "Sử dụng thành thạo Capcut, Canva.",
        "Chủ động thời gian, đáp ứng được tiến độ.",
      ],
      benefits: ["Thù lao hấp dẫn theo sản phẩm.", "Thời gian linh hoạt.", "Thưởng dự án xuất sắc."],
    },
  },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
  >
    {children}
  </motion.div>
);

export default function RecruitPage() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  usePageMeta({
    title: "Tuyển dụng — H2V MEDIA",
    description: "Gia nhập H2V MEDIA để cùng kiến tạo tương lai nội dung số.",
  });

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -skew-y-6 -translate-y-1/2 z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="subtitle mb-0">Join the Elite</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-6xl md:text-[8rem] font-extrabold text-slate-950 leading-[0.9] mb-12 tracking-tighter"
            >
              Building the <br />
              <span className="text-primary italic">Future.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-3xl text-slate-500 mb-16 leading-relaxed font-light max-w-3xl"
            >
              Kiến tạo sự nghiệp tri thức toàn cầu cùng đội ngũ nhân sự sáng tạo hàng đầu Việt Nam.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a
                href="#vt"
                className="inline-flex px-12 py-5 rounded-full bg-slate-950 text-white text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl hover:scale-105"
              >
                Xem các vị trí trống
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="ut" className="section-padding bg-slate-50/50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-24">
              <span className="subtitle">Benefits</span>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950">
                Quyền lợi tại <span className="text-primary italic">H2V.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.15}>
                <div className="p-12 rounded-[3rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-elegant transition-all duration-700 group h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 ${b.color}`}>
                    <b.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-950">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="vt" className="section-padding">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="subtitle">Open Positions</span>
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950">
                  Gia nhập <span className="text-primary italic">đội ngũ.</span>
                </h2>
              </div>
              <div className="h-px w-24 bg-slate-200 hidden md:block" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((j, i) => (
              <FadeIn key={j.title} delay={i * 0.15}>
                <div 
                  onClick={() => setSelectedJob(j)}
                  className="group border border-slate-100 rounded-[3.5rem] overflow-hidden hover:border-primary/40 hover:shadow-elegant transition-all duration-700 bg-white cursor-pointer active:scale-[0.98]"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={j.img}
                      alt={j.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-8 left-8">
                      <span className="px-5 py-2 rounded-full bg-white text-[12px] font-bold uppercase tracking-widest text-primary shadow-lg">
                        {j.employmentType}
                      </span>
                    </div>
                  </div>
                  <div className="p-12">
                    <div className="flex items-center gap-3 text-[13px] uppercase tracking-widest text-slate-500 mb-6 font-bold">
                      <MapPin size={14} className="text-primary" /> {j.location}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-950 group-hover:text-primary transition-colors">{j.title}</h3>
                    <p className="text-sm text-slate-500 font-light mb-10 line-clamp-2 leading-relaxed">{j.desc}</p>
                    <div
                      className="text-[13px] font-bold uppercase tracking-widest text-slate-950 flex items-center gap-3 group/btn hover:text-primary transition-colors"
                    >
                      Xem chi tiết công việc <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform text-primary" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-slate-950/20 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-5xl bg-white rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-950 hover:bg-slate-50 hover:text-primary transition-all shadow-sm"
              >
                <X size={24} />
              </button>

              <div className="md:w-1/2 p-12 md:p-20 overflow-y-auto border-r border-slate-50">
                <span className="subtitle text-primary text-[12px] mb-4">Position Details</span>
                <h3 className="text-5xl font-extrabold mb-6 tracking-tighter text-slate-950">{selectedJob.title}</h3>
                <div className="flex gap-4 mb-12">
                  <span className="px-5 py-2 rounded-full bg-slate-100 text-[12px] font-bold uppercase tracking-widest text-slate-600">
                    {selectedJob.employmentType}
                  </span>
                  <span className="px-5 py-2 rounded-full bg-slate-100 text-[12px] font-bold uppercase tracking-widest text-slate-600">
                    {selectedJob.location}
                  </span>
                </div>
                
                <div className="space-y-12">
                  <section>
                    <h4 className="text-[13px] font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
                      <Zap size={14} /> Nhiệm vụ chính
                    </h4>
                    <ul className="space-y-4">
                      {selectedJob.details.tasks.map((t, i) => (
                        <li key={i} className="text-base text-slate-500 font-light leading-relaxed flex gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2.5 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-[13px] font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
                      <Sparkles size={14} /> Yêu cầu
                    </h4>
                    <ul className="space-y-4">
                      {selectedJob.details.requirements.map((r, i) => (
                        <li key={i} className="text-base text-slate-500 font-light leading-relaxed flex gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              <div className="md:w-1/2 p-12 md:p-20 bg-slate-50 flex flex-col justify-between relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                  <Briefcase className="absolute -bottom-10 -right-10" size={300} />
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-[13px] font-bold uppercase tracking-widest text-slate-950 mb-8">
                    Quyền lợi ứng viên
                  </h4>
                  <ul className="space-y-6 mb-16">
                    {selectedJob.details.benefits.map((b, i) => (
                      <li key={i} className="text-base text-slate-900 font-medium leading-relaxed flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary">
                          <ArrowRight size={16} />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative z-10">
                  <p className="text-xs text-slate-400 mb-6 font-light uppercase tracking-widest">Gửi CV về: contact@h2vmedia.com</p>
                  <a
                    href="mailto:contact@h2vmedia.com"
                    className="w-full py-6 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest text-center hover:bg-blue-700 transition-all shadow-vital flex items-center justify-center gap-4 group"
                  >
                    Nộp hồ sơ ngay <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
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
