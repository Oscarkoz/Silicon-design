import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || message.trim().length < 5) {
      alert("Please enter a valid email and a message with at least 5 characters.");
      return;
    }

    setTimeout(() => {
      setConfirmation("Your message has been sent! We will get back to you soon.");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Have questions? Send us a message and we’ll get back to you soon!
      </p>

      {/* Kontaktformulär */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md mb-4 dark:bg-gray-700 dark:text-white"
          required
        />
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md mb-4 dark:bg-gray-700 dark:text-white h-32 resize-none"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
        {confirmation && <p className="mt-4 text-green-500">{confirmation}</p>}
      </form>
    </div>
  );
}
