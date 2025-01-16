import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Carousel = () => {
  const slides = [
    {
      href: "/Leccion/Computadora",
      src: "img/PartComup.jpeg",
      alt: "Partes de la computadora",
    },
    {
      href: "/Leccion/Computadora2",
      src: "img/EncYapg.jpeg",
      alt: "Encendido y apagado de la computadora",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <br />

      <div className="container mx-auto">
        <div className="row justify-center">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full flex justify-center">
                  <a href={slide.href}>
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-3/4 h-auto mx-auto"
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>

            {/* Controls */}
            <button
              className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none focus:outline-none"
              onClick={prevSlide}
              style={{ left: "10px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none focus:outline-none"
              onClick={nextSlide}
              style={{ right: "10px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Carousel;
