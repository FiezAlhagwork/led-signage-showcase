import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollTop from "@/components/ui/ScrollTop";
import { LanguageProvider } from "@/context/LanguageContext";

/* كل صفحة بحزمة مستقلة — زائر الرئيسية ما بيحمّل كود باقي الصفحات */
const Home = lazy(() => import("@/pages/Home"));
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

function LayoutContent() {
  const location = useLocation();
  const isDigitalPrinting = location.pathname === "/digital-printing";
  const isBoxLetters = location.pathname === "/box-letters";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  const isFullScreenPage = isDigitalPrinting || isBoxLetters;

  return (
    <>
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/box-letters" element={<BoxLettersShowcase />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/digital-printing" element={<DigitalPrinting />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/communication" element={<Communication />} />
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
    <LanguageProvider>
      <BrowserRouter>
        <LayoutContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
