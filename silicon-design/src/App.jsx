import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./output.css";

// Scrollar automatiskt till toppen när man byter sida
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// Detta ska göra så att sidan scrollar till en viss sektion om det finns en hash i URL:en.
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [hash]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Sparar temat i localStorage så att det inte försvinner när sidan laddas om
    // För någon som inte vet vad localStorage är så är det en inbyggd webbläsare funktion som sparar data i webbläsaren.
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Detta tog jag från AOS dokumentationen för att få animationer på sidan.
    // Det är en del av kriterierna för att få väl godkänt på denna inlämningsuppgift.
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, [theme]);

  // Nedan skapar jag en funktion som byter tema mellan ljust och mörkt tema.
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex flex-col text-gray-900 dark:text-white">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* Scroll-funktioner */}
      <ScrollToTop />
      <ScrollToHash />

      {/* Här fick jag hjälp av Copilot med Routing */}
      {/* Jag förstår inte riktigt hur det funkar men det funkar :) */}
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
