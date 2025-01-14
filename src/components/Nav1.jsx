import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10 bg-white/40 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img src="/Tecnologia-para-todos.svg" alt="Logo de Tecnologia para todos" class="h-20" />
        </a>
        <div class="md:hidden">
          <button onClick={toggleMenu} class="text-gray-800 focus:outline-none">
            <svg class="size-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-end md:space-x-3`}>
          <a href="/" className="text-white bg-[#a9afe3] hover:bg-[#cea9e3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-4 py-2 text-center block md:inline">Inicio</a>
          <a href="/Lecciones" className="text-white bg-[#a9afe3] hover:bg-[#cea9e3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-4 py-2 text-center block md:inline">Lecciones</a>
          <a href="/Ejercicios" className="text-white bg-[#a9afe3] hover:bg-[#cea9e3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-4 py-2 text-center block md:inline">Ejercicios</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
