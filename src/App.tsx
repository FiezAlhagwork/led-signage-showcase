import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollTop from "@/components/ui/ScrollTop";
import Seo from "@/components/seo/Seo";
import { LanguageProvider } from "@/context/LanguageContext";
import {
  isLanguageSegment,
  languageToSegment,
  readStoredLanguage,
} from "@/context/useLanguage";

/* كل صفحة بحزمة مستقلة — زائر الرئيسية ما بيحمّل كود باقي الصفحات */
const Home = lazy(() => import("@/pages/Home"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Sign = lazy(() => import("@/pages/Sign"));
const DigitalPrinting = lazy(() => import("@/pages/DigitalPrinting"));
const About = lazy(() => import("@/pages/About"));
const Communication = lazy(() => import("@/pages/Communication"));
const BoxLettersShowcase = lazy(() => import("@/pages/BoxLetters"));
const NotFound = lazy(() => import("@/pages/NotFound"));

/** شاشة انتظار بخلفية الموقع الداكنة — بلا نص حتى ما نحتاج مفاتيح ترجمة لوميض عابر */
const RouteFallback = () => (
  <div className="min-h-screen w-full bg-dark-bg" aria-hidden="true" />
);

/**
 * بيقرّر لأي لغة يروح زائر فتح الجذر "/":
 * تفضيله المحفوظ ← لغة متصفّحه ← العربي (السوق الأساسي).
 */
const resolveInitialSegment = () => {
  const stored = readStoredLanguage();
  if (stored) return languageToSegment(stored);

  return navigator.language.toLowerCase().startsWith("en") ? "en" : "ar";
};

/** بيتحقق إن بادئة الرابط لغة معروفة، وغير هيك بيعرض صفحة 404 */
const LanguageLayout = () => {
  const { lang } = useParams();

  if (!lang || !isLanguageSegment(lang)) {
    return <NotFound />;
  }

  return <Outlet />;
};

function LayoutContent() {
  const location = useLocation();
  const isDigitalPrinting = location.pathname.endsWith("/digital-printing");
  const isBoxLetters = location.pathname.endsWith("/box-letters");

  /** المسؤول الوحيد عن إرجاع الصفحة لأعلى عند التنقّل — الصفحات ما بتعيد هالمنطق */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  /** الصفحتان بتملآ الشاشة بلا سكرول، فما إلهن فوتر ولا زر عودة للأعلى */
  const isFullScreenPage = isDigitalPrinting || isBoxLetters;

  return (
    <>
      <Seo />
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {/* الجذر بيحوّل للغة المناسبة — ما في محتوى بلا بادئة لغة */}
          <Route
            path="/"
            element={<Navigate to={`/${resolveInitialSegment()}`} replace />}
          />

          <Route path=":lang" element={<LanguageLayout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="box-letters" element={<BoxLettersShowcase />} />
            <Route path="sign" element={<Sign />} />
            <Route path="digital-printing" element={<DigitalPrinting />} />
            <Route path="about-us" element={<About />} />
            <Route path="communication" element={<Communication />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {!isFullScreenPage && <ScrollTop />}
      {!isFullScreenPage && <Footer />}
    </>
  );
}

function App() {
  return (
    /* الراوتر برّا الـProvider لأن الـProvider صار يشتق اللغة من الرابط */
    <BrowserRouter>
      <LanguageProvider>
        <LayoutContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
