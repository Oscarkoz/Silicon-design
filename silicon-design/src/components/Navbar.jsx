import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";
import DropdownMenu from "./DropdownMenu";
import { saveUserData, loadUserData, deleteUserData } from "../utils/fileUtils";

// Här skapar jag en Navbar som jag använder för att navigera mellan sidor och logga in/ut ur.
export default function Navbar({ toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Försök att ladda sparad användare vid start av hemsidan
  useEffect(() => {
    const userData = loadUserData();
    if (userData) {
      setEmail(userData.email);
      setIsLoggedIn(true);
    }
  }, []);

  // Denna funktion hanterar autentiseringen av användaren och ser om emailen innehåller @ och om lösenordet är minst 6 tecken långt.
  const handleAuth = () => {
    if (!email.includes("@") || password.length < 6) {
      alert("Please enter a valid email and a password with at least 6 characters.");
      return;
    }

    // Om användaren är i registreringsläget så sparas användaredata och ett meddelande visas att kontot är skapat.
    if (isRegistering) {
      saveUserData(email, password);
      alert("Account created successfully! You can now log in.");
      setIsRegistering(false);
    } else {
      const userData = loadUserData();
      if (userData && email === userData.email && password === userData.password) {
        setIsLoggedIn(true);
        setIsAuthOpen(false);
      } else {
        alert("Invalid email or password.");
      }
    }
  };
// Detta är en funktion som hanterar utloggningen av användaren.
  const handleLogout = () => {
    deleteUserData();
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  // Denna funktion hanterar navigeringen till Features-sektionen på sidan. 
  // Hade lite problem i skapandet av hemsidan då jag inte kunde navigera till Features när jag klickade på Features i menyn.
  const navigateTo = useNavigate();
  const handleFeaturesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigateTo("/#features");
    } else {
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Samma princip här som i handleFeaturesClick, fast för att navigera till startsidan eller "hem" och scrolla till toppen av sidan.
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Här lägger jag till loggan för hemsidan och företagetsnamnet, alltså Silicon. Precis som på figma filen visade med layouten. */}
          <img src={logo} alt="Silicon Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Silicon</h1>

          <nav className="hidden md:flex space-x-6 ml-6">
            <a href="/" onClick={handleHomeClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Home
            </a>
            <a href="/#features" onClick={handleFeaturesClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Features
            </a>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Contact
            </Link>
          </nav>
        </div>

        {/* Här lägger jag till en Dark Mode Toggle och inloggningsknapp */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <label className="flex items-center cursor-pointer">
            <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
            <input type="checkbox" className="hidden" onChange={toggleTheme} checked={theme === "dark"} />
            <div className="w-10 h-5 bg-gray-300 rounded-full relative transition dark:bg-gray-600 ml-2">
              <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transform transition ${
                theme === "dark" ? "translate-x-5 bg-blue-500" : ""
              }`}></div>
            </div>
          </label>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                theme === "dark"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-red-500 text-white hover:bg-white hover:text-red-600"
              }`}
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => setIsAuthOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              Sign in / up
            </button>
          )}
        </div>
        {/* Här lägger jag till en hamburgermeny för att visa menyn på mobilen. Utan att skapa problem för skrivsanvändare. */}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={28} />
        </button>
      </div>

      <DropdownMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} toggleTheme={toggleTheme} theme={theme} />

      {/* Här skapar jag en popup för att logga in och registrera sig. */}
      {isAuthOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {isRegistering ? "Sign Up" : "Sign In"}
            </h2>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mb-4 dark:bg-gray-700 dark:text-white"
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mb-4 dark:bg-gray-700 dark:text-white"
            />

            <button
              onClick={handleAuth}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              {isRegistering ? "Create Account" : "Log In"}
            </button>

            <button
              className="w-full mt-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </button>

            <button
              className="w-full mt-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => setIsAuthOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}