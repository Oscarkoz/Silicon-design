import React, { useState, useEffect } from "react";

const Auth = ({ isOpen, onClose, onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Försök att ladda sparad användare vid start av hemsidan
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      onLogin(user);
    }
  }, [onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Denna sats körs för att se om emailen innehåller @
    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Samma sats som tidigare fast för lösenordet.
    // Lösenordet måste vara sex tecken långt.
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (isRegister) {
      // Denna if sats skapar en ny användare om emailen inte redan finns.
      // Om emailen redan finns så visas ett felmeddelande.
      if (users[email]) {
        setMessage("User already exists.");
      } else {
        users[email] = password;
        localStorage.setItem("users", JSON.stringify(users));
        // Därefter får användaren ett meddelande att kontot är skapat och att de kan logga in.
        setMessage("Account created! You can now log in.");
        setIsRegister(false);
      }
    } else {
      // Denna if sats kollar om emailen finns i users och om lösenordet stämmer.
      if (users[email] === password) {
        localStorage.setItem("loggedInUser", email);
        onLogin(email);
        onClose(); // Stäng popupen vid lyckad inloggning
      } else {
        setMessage("Invalid email or password.");
      }
    }
  };

  if (!isOpen) return null;


  // Nedanför skapar jag div klasser som innehåller en knapp för att stänga popupen. Dessutom använder jag mig av
  // verktyg som vi har använt tidigare i kursen såsom "justify-center" alltså flexbox. 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md relative transition-all transform scale-95 opacity-0 animate-fade-in">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 text-xl">✖</button>
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {isRegister ? "Create an Account" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md border-2 border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-4 rounded-md border-2 border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {isRegister ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="mt-4 text-blue-500 dark:text-blue-300 hover:underline block text-center"
        >
          {isRegister ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
