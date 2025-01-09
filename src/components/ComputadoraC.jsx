import React, { useState } from "react";
import OptionList from "./OptionList";
import Confetti from "react-confetti";

// Aquí declaramos la constante options
const options = [
  {
    id: "Mouse",
    label: "Mouse",
    image: "/Mouse.jpg",
  },
  {
    id: "Monitor",
    label: "Monitor",
    image: "/Monitor.jpg",
  },
  {
    id: "Camara Web",
    label: "Camara Web",
    image: "/webcam.jpg",
  },
];

const correctAnswer = "Monitor";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [validated, setValidated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (id) => {
    setSelectedOption(id);
    const isCorrect = id === correctAnswer;
    setIsCorrect(isCorrect);
    setValidated(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div class="app">
      {validated && (
        <div>
          {isCorrect && <Confetti />}
          <div class="verification">
            {isCorrect ? (
              <div class="text-5xl text-green-500">
                ¡Felicitaciones! Has seleccionado la opción correcta.
              </div>
            ) : (
              <div class="text-5xl text-red-500">
                Incorrecto, {selectedOption} no es una pantalla. Sigue
                intentándolo.
              </div>
            )}
          </div>
        </div>
      )}
      <h3 class="md:text-5xl text-6xl">1-. ¿Cuál de las siguientes partes es una “Pantalla”?</h3>
      <OptionList options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App;
