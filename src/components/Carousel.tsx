import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      href: "/Leccion/SmartPhone1",
      src: "img/Celu Inte.jpg.png",
      alt: "Los Angeles",
    },
    {
      href: "/Leccion/Computadora",
      src: "img/ComPC.png",
      alt: "Chicago",
    },
    {
      href: "/Ejercicios",
      src: "img/EjerdCurs.png",
      alt: "New York",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="relative w-full overflow-hidden">
        {/* The slideshow */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <a href={slide.href}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-auto"
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

        {/* Left and right controls */}
        <button
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none focus:outline-none"
          onClick={prevSlide}
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
  );
};

export default Carousel;
