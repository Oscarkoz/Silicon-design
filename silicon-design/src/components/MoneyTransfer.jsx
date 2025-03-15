import React from "react";

const MoneyTransfer = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Vänster sida: Text */}
        <div data-aos="fade-right">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Make Your Money Transfer Simple and Clear
          </h2>
          <ul className="mt-4 text-gray-600 dark:text-gray-300 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">✔️</span>
              <span>Banking transactions are free for you</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">✔️</span>
              <span>No monthly cash commission</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">✔️</span>
              <span>Manage payments and transactions online</span>
            </li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Learn more →
          </button>
        </div>

        {/* Höger sida: Bilder */}
        <div data-aos="fade-left" className="relative flex justify-center items-center">
          <img src="/images/transactions.png" alt="Transactions" className="w-72 shadow-lg rounded-lg" />
          <img src="/images/send-money.png" alt="Send Money" className="absolute bottom-0 right-0 transform translate-x-10 translate-y-10 w-40 shadow-xl" />
        </div>

      </div>
    </section>
  );
};

export default MoneyTransfer;
