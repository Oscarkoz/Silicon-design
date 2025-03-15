import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900 text-center">
      {/* Titel */}
      <h2 className="text-5xl font-bold text-gray-900 dark:text-white">How Does It Work?</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Latest transaction history</p>

      {/* Wrapper för tre mobilskärmar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto mt-10">
        {/* Första mobilbilden */}
        <img src="/images/mobilnr1.png" alt="Budget Overview" className="w-64 shadow-lg rounded-lg" data-aos="fade-up" />
        <img src="/images/mobilnr2.png" alt="Transactions" className="w-64 shadow-lg rounded-lg" data-aos="fade-up" />
        <img src="/images/mobilnr3.png" alt="Contacts" className="w-64 shadow-lg rounded-lg" data-aos="fade-up" />
      </div>
    </section>
  );
};

export default HowItWorks;
