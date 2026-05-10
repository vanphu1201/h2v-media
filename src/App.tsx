import HomePage from "@/routes/index";
import RecruitPage from "@/routes/tuyendung";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { motion } from "framer-motion";

function NotFoundPage() {
  usePageMeta({
    title: "404 — H2V MEDIA",
    description: "Trang bạn đang tìm không tồn tại.",
  });

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="max-w-xl text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="subtitle"
          >
            Not Found
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-9xl font-bold tracking-tighter text-slate-900"
          >
            404
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-lg text-slate-500 font-light"
          >
            Trang bạn đang tìm không tồn tại hoặc đã được chuyển đi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/"
              className="mt-16 inline-flex rounded-full bg-slate-900 px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-slate-800 transition-all active:scale-95"
            >
              Quay về trang chủ
            </a>
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function normalizePathname(pathname: string) {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized === "" ? "/" : normalized;
}

export default function App() {
  const pathname =
    typeof window === "undefined" ? "/" : normalizePathname(window.location.pathname);

  if (pathname === "/") {
    return <HomePage />;
  }

  if (pathname === "/tuyendung") {
    return <RecruitPage />;
  }

  return <NotFoundPage />;
}
