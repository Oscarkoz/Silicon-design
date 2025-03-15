import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Hämta testimonials-data från Web API när komponenten renderas
    axios.get("https://kyhn24.azurewebsites.net/api/testimonials")
      .then(response => setTestimonials(response.data))
      .catch(error => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {/* Har förklarat det redan tidigare i en annan javascript-fil men jag kan göra det igen */}
          {/* Här använder jag mig av testimonials-data från Web API:et för att visa vad kunderna tycker om appen */}
          Clients are Loving Our App
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Our users love the simplicity and security of our app. See what they’re saying about us.
        </p>
        {/* Återigen använder jag mig av gridkonceptet som vi lärde oss i Övningsuppgift 2, Responsive Design */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
            >
              <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-12 h-12 rounded-full mx-auto" />
              <p className="italic mt-4 text-gray-600 dark:text-gray-300">"{testimonial.comment}"</p>
              <h3 className="font-bold mt-3 text-gray-900 dark:text-white">{testimonial.author}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.jobRole}</p>
              <div className="text-yellow-400">
                {"⭐".repeat(testimonial.starRating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
