import React from "react";

export default function DropdownMenu({ isOpen, closeMenu, toggleTheme, theme }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden" onClick={closeMenu}>
      <div className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col items-start z-50" onClick={(e) => e.stopPropagation()}>
        <nav className="flex flex-col space-y-4 text-lg mt-12">
          {/* Features & Contact - NU RADINDELNING */}
          <a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={closeMenu}>
            Features
          </a>
          <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={closeMenu}>
            Contact
          </a>

          {/* Dark Mode Toggle - FIXAD */}
          <label className="flex items-center cursor-pointer mt-4" onClick={(e) => e.stopPropagation()}>
            <span className="text-gray-700 dark:text-gray-300 mr-2">Dark Mode</span>
            <input type="checkbox" className="hidden" onChange={toggleTheme} checked={theme === "dark"} />
            <div className="w-10 h-5 bg-gray-300 rounded-full relative transition dark:bg-gray-600">
              <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transform transition ${
                theme === "dark" ? "translate-x-5 bg-blue-500" : ""
              }`}></div>
            </div>
          </label>

          {/* Sign In / Up knapp */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 w-full mt-4" onClick={closeMenu}>
            Sign in / up
          </button>
        </nav>
      </div>
    </div>
  );
}
