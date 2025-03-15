import React from "react";

const Features = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* 📱 Mobilbilden till vänster */}
        <div data-aos="fade-right" className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/mobilnr4förfeatures.png"
            alt="App Features"
            className="w-48 md:w-64 lg:w-72 xl:w-80 max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>

        {/* 📋 Feature-listan till höger */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">App Features</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover powerful features designed to simplify your finances and protect your privacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard icon="💳" title="Easy Payments" description="Seamless and instant transactions directly from your phone." />
            <FeatureCard icon="🔒" title="Data Security" description="Advanced security measures ensure your financial data is always safe." />
            <FeatureCard icon="📊" title="Cost Statistics" description="Gain valuable insights into your spending with detailed statistics." />
            <FeatureCard icon="🛎️" title="Support 24/7" description="Our team is always here to help you, anytime and anywhere." />
            <FeatureCard icon="💰" title="Regular Cashback" description="Earn rewards and cashback on everyday transactions." />
            <FeatureCard icon="🏆" title="Top Standards" description="Built with the highest industry standards for reliability and performance." />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div data-aos="fade-up" className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <span className="text-4xl">{icon}</span>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);

export default Features;
