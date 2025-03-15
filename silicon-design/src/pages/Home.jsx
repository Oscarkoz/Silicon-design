import React from "react";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import MoneyTransfer from "../components/MoneyTransfer";
import Clients from "../components/Clients";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hem sektionen, välkomnar nya användare till hemsidan. */}
      <section 
        id="welcome"
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100 dark:bg-gray-900"
        data-aos="fade-up"
      >
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white">
          Welcome to Silicon Design
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          A modern web design template.
        </p>
      </section>

      {/* Hur det funkar sektionen. */}
      <section 
        id="hero"
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100 dark:bg-gray-900"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Manage All Your Money in One App
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
          We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
        </p>
      </section>

      {/* Features/Drag sektionen */}
      <section id="features" className="section">
        <Features />
      </section>

      {/* Hur appen funkar sektionen */}
      <section id="how-it-works" className="section">
        <HowItWorks />
      </section>

      {/* Sektionen för att visa att man kan överföra pengar */}
      <section id="money-transfer" className="section">
        <MoneyTransfer />
      </section>

      {/* Klienter sektionen */}
      <section id="clients" className="section">
        <Clients />
      </section>

      {/* FAQ sektionen */}
      <section id="faq" className="section">
        <FAQ />
      </section>
    </div>
  );
}
