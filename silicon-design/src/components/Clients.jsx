import React, { useState, useEffect } from "react";
import axios from "axios";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://kyhn24.azurewebsites.net/api/testimonials")
      .then((response) => setClients(response.data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="text-left md:w-1/3" data-aos="fade-right">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Clients are Loving Our App
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Our users love the simplicity and security of our app. See what they're saying about us.
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">
          {clients.map((client) => (
            <div key={client.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col space-y-4">
              <img src={client.avatarUrl} alt={client.author} className="w-12 h-12 rounded-full" />
              <p className="text-gray-700 dark:text-gray-300">{client.comment}</p>
              <h3 className="font-semibold text-gray-900 dark:text-white">{client.author}</h3>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{client.jobRole}</span>
              <div className="text-yellow-400">
                {"★".repeat(client.starRating)}{"☆".repeat(5 - client.starRating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
