import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10 bg-white/10 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="img/TECPT.png"
            alt="Logo de Tecnologia para todos"
            className="h-40"
          />
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="size-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:space-x-3 md:justify-end`}
        >
          <a
            href="/"
            className="text-white bg-[#a9afe3] hover:bg-[#cea9e3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-4 py-2 text-center block md:inline"
          >
            Inicio
          </a>
          <a
            href="/Ejercicios"
            className="text-white bg-[#a9afe3] hover:bg-[#cea9e3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-4 py-2 text-center block md:inline"
          >
            Ejercicios
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
