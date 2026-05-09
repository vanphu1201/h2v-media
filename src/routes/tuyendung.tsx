import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock,
  GraduationCap,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/use-page-meta";
import heroBg from "@/assets/goda/br_tuyendung.jpg";
import jobContent from "@/assets/jobs/content_creator.png";
import jobAuto from "@/assets/jobs/automation.png";
import jobAff from "@/assets/jobs/affiliate.png";
import jobVideo from "@/assets/jobs/video_editor.png";
import jobThumb from "@/assets/jobs/thumbnail.png";
import jobWriter from "@/assets/jobs/writer.png";

const benefits = [
  {
    icon: Wallet,
    title: "Thu nhập hấp dẫn",
    desc: "Thưởng cá nhân xuất sắc, KPI, tháng 13, lễ Tết, sinh nhật. Phụ cấp 2 mùa/năm.",
  },
  {
    icon: GraduationCap,
    title: "Đào tạo phát triển",
    desc: "Đào tạo nội bộ kỹ năng & chuyên môn hàng tháng, cử đi nâng cao chuyên môn, ngoại ngữ.",
  },
  {
    icon: Sparkles,
    title: "Môi trường trẻ",
    desc: "Năng động, thân thiện, sáng tạo, kích thích phát triển cá nhân tối đa.",
  },
  {
    icon: ShieldCheck,
    title: "Chế độ đầy đủ",
    desc: "BHXH, nghỉ phép, thai sản, du lịch hàng năm theo Luật lao động hiện hành.",
  },
];

const jobs = [
  {
    title: "Content Creator YouTube",
    desc: "Lên ý tưởng, sản xuất nội dung kênh YouTube cho thị trường quốc tế.",
    img: jobContent,
    details: {
      requirements: [
        "Có kinh nghiệm quản lý kênh YouTube",
        "Tiếng Anh đọc hiểu tốt",
        "Sáng tạo, nắm bắt xu hướng nhanh",
      ],
      benefits: [
        "Lương thưởng theo view",
        "Làm việc với đội ngũ triệu sub",
        "Thiết bị hiện đại",
      ],
      tasks: ["Nghiên cứu chủ đề trend", "Viết kịch bản video", "Phối hợp team Video Editor"],
    },
  },
  {
    title: "Automation Engineer",
    desc: "Triển khai hệ thống automation đa nền tảng (n8n, Make, Zapier, custom).",
    img: jobAuto,
    details: {
      requirements: [
        "Thành thạo n8n, Make hoặc Zapier",
        "Biết JavaScript cơ bản",
        "Tư duy logic tốt",
      ],
      benefits: [
        "Thử thách với các hệ thống phức tạp",
        "Môi trường công nghệ cao",
        "Lương cạnh tranh",
      ],
      tasks: ["Thiết kế luồng automation", "Xử lý dữ liệu API", "Tối ưu hiệu suất hệ thống"],
    },
  },
  {
    title: "Affiliate Marketing Specialist",
    desc: "Vận hành campaign affiliate quốc tế, tối ưu chuyển đổi đa thị trường.",
    img: jobAff,
    details: {
      requirements: [
        "Am hiểu về CPA, CPL, RevShare",
        "Kinh nghiệm chạy Ads (FB, Google, TikTok)",
        "Phân tích số liệu tốt",
      ],
      benefits: [
        "Commission hấp dẫn",
        "Ngân sách chạy ads lớn",
        "Đào tạo bài bản từ chuyên gia",
      ],
      tasks: ["Tìm kiếm offer tiềm năng", "Set up và tối ưu campaign", "Báo cáo hiệu quả hằng ngày"],
    },
  },
  {
    title: "Video Editor",
    desc: "Dựng video YouTube, motion graphics cho các kênh triệu sub.",
    img: jobVideo,
    details: {
      requirements: [
        "Sử dụng thành thạo Premiere, After Effects",
        "Có gu thẩm mỹ tốt",
        "Chịu được áp lực tiến độ",
      ],
      benefits: [
        "Rèn luyện kỹ năng dựng chuyên sâu",
        "Thưởng theo chất lượng video",
        "Môi trường sáng tạo",
      ],
      tasks: [
        "Dựng video YouTube triệu view",
        "Thiết kế hiệu ứng motion",
        "Chỉnh sửa màu sắc & âm thanh",
      ],
    },
  },
  {
    title: "Thumbnail Designer",
    desc: "Thiết kế thumbnail tối ưu CTR cho video YouTube quốc tế.",
    img: jobThumb,
    details: {
      requirements: [
        "Sử dụng tốt Photoshop",
        "Am hiểu tâm lý người xem YouTube",
        "Sáng tạo trong bố cục",
      ],
      benefits: [
        "Học hỏi kỹ thuật tối ưu CTR",
        "Lương thưởng theo hiệu quả",
        "Team trẻ trung",
      ],
      tasks: ["Thiết kế thumbnail thu hút", "A/B testing hình ảnh", "Phân tích CTR để cải thiện"],
    },
  },
  {
    title: "Content Writer",
    desc: "Viết kịch bản chi tiết cho YouTube, social và affiliate funnel.",
    img: jobWriter,
    details: {
      requirements: [
        "Kỹ năng viết tốt, mạch lạc",
        "Tư duy kể chuyện (Storytelling)",
        "Biết tiếng Anh là lợi thế",
      ],
      benefits: [
        "Nâng cao tư duy nội dung",
        "Làm việc remote linh hoạt",
        "Thưởng theo dự án",
      ],
      tasks: [
        "Viết kịch bản video chi tiết",
        "Sáng tạo nội dung quảng cáo",
        "Biên tập lại các nội dung cũ",
      ],
    },
  },
];

export default function RecruitPage() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  usePageMeta({
    title: "Tuyển dụng — H2V MEDIA",
    description:
      "Cơ hội nghề nghiệp tại H2V MEDIA — Gia nhập đội ngũ sáng tạo nội dung số, automation và affiliate marketing quốc tế.",
    ogTitle: "Tuyển dụng — H2V MEDIA",
    ogDescription: "Gia nhập H2V MEDIA cùng kiến tạo nội dung số hàng đầu.",
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative h-[80vh] min-h-[600px] flex items-center pt-20 overflow-hidden bg-[#040E27]">
        <div
          className="absolute inset-0 z-0 opacity-30 scale-105"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040E27]/90 via-[#040E27]/60 to-[#040E27] z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="subtitle text-white/60 mb-6"
            >
              Careers at H2V Media
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-[7rem] font-black text-white leading-[0.9] mb-10 tracking-tighter"
            >
              Building the <span className="text-gradient italic text-glow">Future</span> of
              Content.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed mb-12"
            >
              Gia nhập đội ngũ nhân sự tinh anh, cùng chúng tôi kiến tạo những giá trị số bền
              vững trên quy mô toàn cầu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#vt"
                className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-primary text-white font-black uppercase tracking-[0.2em] shadow-glow hover:scale-105 transition-smooth"
              >
                Xem các vị trí <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="ut" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="subtitle">Core Benefits</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Giá trị chúng tôi <span className="text-primary italic">cam kết</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-smooth shadow-sm group-hover:shadow-glow">
                  <b.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {b.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="vt" className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="subtitle">Open Positions</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Tham gia <span className="text-primary italic">đội ngũ</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((j, i) => (
              <motion.article
                key={j.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-elegant hover:shadow-2xl transition-smooth group flex flex-col border border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={j.img}
                    alt={j.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-primary font-black uppercase tracking-widest shadow-sm">
                      Full-time
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedJob(j)}
                      className="px-8 py-3 bg-white text-primary font-black uppercase tracking-widest rounded-full text-[10px] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                    >
                      Chi tiết công việc
                    </button>
                  </div>
                </div>

                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-[10px] text-primary/50 font-black uppercase tracking-widest">
                      <Clock size={12} /> Hot role
                    </div>
                    <div className="text-[10px] text-primary font-black uppercase tracking-widest">
                      Thỏa thuận
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
                    {j.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm mb-8 line-clamp-2">
                    {j.desc}
                  </p>
                  <div className="mt-auto pt-8 border-t border-border/40">
                    <button
                      onClick={() => setSelectedJob(j)}
                      className="group/btn flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#040E27] hover:text-primary transition-colors"
                    >
                      Nộp hồ sơ ngay{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-[#040E27]/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              <div className="lg:w-[45%] relative h-[300px] lg:h-auto">
                <img
                  src={selectedJob.img}
                  alt={selectedJob.title}
                  className="w-full h-full object-cover grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E27]/80 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-8 left-8 lg:hidden w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-12 left-12 right-12 text-white hidden lg:block">
                  <span className="subtitle text-white/50 mb-4">Job Summary</span>
                  <h3 className="text-4xl font-black tracking-tighter mb-4">
                    {selectedJob.title}
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed">{selectedJob.desc}</p>
                </div>
              </div>

              <div className="p-8 md:p-16 lg:w-[55%] overflow-y-auto bg-white custom-scrollbar">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="hidden lg:flex absolute top-12 right-12 w-14 h-14 rounded-2xl bg-secondary hover:bg-primary hover:text-white transition-smooth items-center justify-center text-foreground shadow-sm"
                >
                  <X size={28} />
                </button>

                <div className="lg:hidden mb-12">
                  <h2 className="text-4xl font-black tracking-tighter mb-4">
                    {selectedJob.title}
                  </h2>
                </div>

                <div className="space-y-16">
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sparkles size={20} />
                      </div>
                      <h4 className="font-bold text-xl tracking-tight">Yêu cầu công việc</h4>
                    </div>
                    <ul className="space-y-5">
                      {selectedJob.details.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex gap-4 text-muted-foreground font-light leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <Wallet size={20} />
                      </div>
                      <h4 className="font-bold text-xl tracking-tight">Quyền lợi ứng viên</h4>
                    </div>
                    <ul className="space-y-5">
                      {selectedJob.details.benefits.map((ben, i) => (
                        <li
                          key={i}
                          className="flex gap-4 text-muted-foreground font-light leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/30 mt-2.5 shrink-0" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                        <Briefcase size={20} />
                      </div>
                      <h4 className="font-bold text-xl tracking-tight">Nhiệm vụ chính</h4>
                    </div>
                    <ul className="space-y-5">
                      {selectedJob.details.tasks.map((task, i) => (
                        <li
                          key={i}
                          className="flex gap-4 text-muted-foreground font-light leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2.5 shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="mt-20 pt-12 border-t border-border/40 flex flex-col sm:flex-row gap-6 items-center">
                  <a
                    href="mailto:contact@h2vmedia.com"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#040E27] text-white font-black uppercase tracking-[0.2em] shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-smooth"
                  >
                    Nộp hồ sơ ngay <ArrowRight size={20} />
                  </a>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest max-w-[200px] text-center sm:text-left">
                    Hoặc gửi CV về: contact@h2vmedia.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section id="hs" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-[#040E27] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-24 opacity-5 text-white">
              <Mail size={300} />
            </div>
            <div className="relative z-10">
              <span className="subtitle text-white/40 mb-8">Join the Team</span>
              <h2 className="text-5xl md:text-[5rem] font-black text-white mb-12 tracking-tighter leading-none">
                Sẵn sàng kiến tạo <br />{" "}
                <span className="text-gradient italic text-glow">tương lai?</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-left">
                  <Mail className="text-primary mb-6" size={32} />
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-2">
                    Email
                  </div>
                  <div className="text-xl text-white font-bold">contact@h2vmedia.com</div>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-left">
                  <Phone className="text-primary mb-6" size={32} />
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-2">
                    Hotline
                  </div>
                  <div className="text-xl text-white font-bold">+84 907 696 177</div>
                </div>
              </div>
              <a
                href="mailto:contact@h2vmedia.com"
                className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-primary text-white font-black uppercase tracking-[0.2em] shadow-glow hover:scale-105 transition-smooth"
              >
                Gửi CV của bạn <ArrowRight size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
