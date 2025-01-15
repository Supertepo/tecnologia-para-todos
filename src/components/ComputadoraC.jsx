import React, { useState } from "react";
import Confetti from "react-confetti";

const ComputerParts = () => {
  const correctAnswers = {
    "drop-pantalla": "pantalla",
    "drop-teclado": "teclado",
    "drop-mouse": "mouse",
    "drop-bocinas": "bocinas",
  };

  const [result, setResult] = useState("");
  const [answers, setAnswers] = useState({
    "drop-pantalla": null,
    "drop-teclado": null,
    "drop-mouse": null,
    "drop-bocinas": null,
  });
  const [draggableElements, setDraggableElements] = useState([
    { id: "pantalla", text: "Pantalla" },
    { id: "teclado", text: "Teclado" },
    { id: "mouse", text: "Mouse" },
    { id: "bocinas", text: "Altavoces" },
  ]);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const draggableElement = document.getElementById(data);
    const dropzone = e.target;
    if (dropzone.classList.contains("dropzone")) {
      dropzone.appendChild(draggableElement);
      setAnswers({ ...answers, [dropzone.id]: data });
    }
  };

  const checkAnswers = () => {
    let isCorrect = true;

    for (const dropzoneId in correctAnswers) {
      const expectedId = correctAnswers[dropzoneId];
      if (answers[dropzoneId] !== expectedId) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      setResult("¡Todas las respuestas son correctas!");
    } else {
      setResult("Algunas respuestas son incorrectas. ¡Intenta de nuevo!");
    }

    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetQuiz = () => {
    window.location.reload();
  };

  return (
    <div className=" text-center container rounded-lg shadow-xl">
      {result === "¡Todas las respuestas son correctas!" && <Confetti />}
      <div
        className={`mt-10 text-6xl ${
          result === "¡Todas las respuestas son correctas!"
            ? "text-green-500"
            : "text-red-500"
        }`}
        id="result"
      >
        {result}
      </div>
      <h2 className="text-center text-6xl font-bold mb-6">
        Cuestionario: Identificación de Partes
      </h2>
      <div className="text-center text-5xl mb-6">
        <p>
          <strong>Pregunta:</strong> Arrastra el nombre correcto a la zona
          correspondiente.
        </p>
        <div className="grid grid-cols-2 md:flex justify-center gap-4 mb-6">
          {draggableElements.map((element) => (
            <div
              key={element.id}
              className="draggable bg-gray-200 p-6 rounded cursor-grab text-3xl"
              draggable="true"
              id={element.id}
              onDragStart={handleDragStart}
            >
              {element.text}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-16 mb-10">
          <div
            className="dropzone border-2 border-dashed border-gray-500 w-64 h-64 flex items-center justify-center mb-6"
            id="drop-mouse"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img src="/Mouse.jpg" alt="Mouse" className="w-32 h-32" />
          </div>
          <div
            className="dropzone border-2 border-dashed border-gray-500 w-64 h-64 flex items-center justify-center mb-6"
            id="drop-bocinas"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img src="/bocinas.jpg" alt="Bocinas" className="w-32 h-32" />
          </div>
          <div
            className="dropzone border-2 border-dashed border-gray-500 w-64 h-64 flex items-center justify-center mb-6"
            id="drop-teclado"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img src="/teclado.jpg" alt="Teclado" className="w-32 h-32" />
          </div>
          <div
            className="dropzone border-2 border-dashed border-gray-500 w-64 h-64 flex items-center justify-center mb-6"
            id="drop-pantalla"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img src="/Monitor.jpg" alt="Pantalla" className="w-32 h-32" />
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={checkAnswers}
            className="bg-red-500 text-3xl text-white py-3 px-6 rounded-lg mt-8 hover:bg-red-600"
          >
            Enviar Respuestas
          </button>
          <button
            onClick={resetQuiz}
            className="bg-gray-500 text-3xl text-white py-3 px-6 rounded-lg mt-8 hover:bg-gray-600"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerParts;
