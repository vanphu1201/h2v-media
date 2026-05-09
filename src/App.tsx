import HomePage from "@/routes/index";
import RecruitPage from "@/routes/tuyendung";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/use-page-meta";

function NotFoundPage() {
  usePageMeta({
    title: "404 — H2V MEDIA",
    description: "Trang bạn đang tìm không tồn tại.",
    ogTitle: "404 — H2V MEDIA",
    ogDescription: "Trang bạn đang tìm không tồn tại.",
  });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex min-h-screen items-center justify-center bg-white px-6 pt-28 pb-16">
        <div className="max-w-xl text-center">
          <span className="subtitle">Not Found</span>
          <h1 className="text-6xl font-black tracking-tighter text-[#040E27] md:text-8xl">404</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Trang bạn đang tìm không tồn tại hoặc đã được chuyển đi.
          </p>
          <a
            href="/"
            className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-glow transition-smooth hover:scale-105"
          >
            Quay về trang chủ
          </a>
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
