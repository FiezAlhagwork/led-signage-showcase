import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import Sign from "@/pages/Sign";
import DigitalPrinting from "@/pages/DigitalPrinting";
import About from "@/pages/About";
import Communication from "@/pages/Communication";
import { BoxLettersShowcase } from "@/pages/BoxLetters";
import NotFound from "@/pages/NotFound";
import { LanguageProvider } from "@/context/LanguageContext";

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

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box-letters" element={<BoxLettersShowcase />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/digital-printing" element={<DigitalPrinting />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isDigitalPrinting && !isBoxLetters && <Footer />}
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
