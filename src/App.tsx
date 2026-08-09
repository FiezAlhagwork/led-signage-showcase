/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import DigitalPrinting from "./pages/DigitalPrinting";
import ContactUs from "./pages/References";
import About from "./pages/About";
import Communication from "./pages/References";
import { BoxLettersShowcase } from "./pages/BoxLetters";
import { LanguageProvider } from "./context/LanguageContext";

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
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
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
