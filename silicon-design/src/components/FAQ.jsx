import React, { useState, useEffect } from "react";
import axios from "axios";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("https://kyhn24.azurewebsites.net/api/faq")
      .then((response) => setFaq(response.data))
      .catch((error) => console.error("Error fetching FAQ:", error));
  }, []);

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    axios
      .post("https://kyhn24.azurewebsites.net/api/subscribe", { email })
      .then((response) => {
        alert(response.data.message);
        setEmail("");
      })
      .catch((error) => {
        console.error("Error subscribing:", error);
        alert("Subscription failed, please try again later.");
      });
  };

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900 w-full">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
        <div className="faq-left" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Any questions?<br />Check out the FAQs
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Still have unanswered questions and need to get in touch?
          </p>
          <div className="faq-contact mt-6 space-y-4">
            <div className="faq-box p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="text-4xl">📞</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Still have questions?</h3>
                <a href="#contact" className="text-gray-900 dark:text-white hover:underline">Contact us →</a>
              </div>
            </div>
            <div className="faq-box p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="text-4xl">💬</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Don’t like phone calls?</h3>
                <a href="#contact" className="text-gray-900 dark:text-white hover:underline">Contact us →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-right" data-aos="fade-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="faq-list space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="faq-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <button
                  className="w-full text-left font-semibold text-lg flex justify-between items-center text-gray-900 dark:text-white"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {item.title}
                  <span>{activeIndex === index ? "🔼" : "🔽"}</span>
                </button>
                {activeIndex === index && <p className="mt-3 text-gray-700 dark:text-gray-300">{item.content}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📩 Subscribe Sektion */}
      <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex items-center space-x-6">
          <span className="text-5xl">🔔</span>
          <h2 className="text-2xl font-bold text-center md:text-left">
            Subscribe to our newsletter to stay informed about latest updates
          </h2>
        </div>
        
        {/* Wrapper för email-input & knapp */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-3 md:space-y-0 md:space-x-1">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full md:w-72 rounded-md border-2 border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 w-full md:w-auto rounded-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;