import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";

const ComputerStart = () => {
  const correctAnswers = {
    "drop-step1": "paso1",
    "drop-step2": "paso2",
  };

  const [result, setResult] = useState("");
  const [answers, setAnswers] = useState({
    "drop-step1": null,
    "drop-step2": null,
  });
  const [draggableElements, setDraggableElements] = useState([
    { id: "paso1", text: "1.Encender CPU" },
    { id: "paso2", text: "2.Encender Monitor" },
  ]);

  const successAudioRef = useRef(null);
  const failureAudioRef = useRef(null);

  useEffect(() => {
    if (result === "¡Todas las respuestas son correctas!") {
      successAudioRef.current.play();
    } else if (result === "Algunas respuestas son incorrectas. ¡Intenta de nuevo!") {
      failureAudioRef.current.play();
    }
  }, [result]);

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
      dropzone.textContent = "";
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
    <div className="text-center container rounded-lg shadow-xl">
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
        Cuestionario: Orden de Encendido
      </h2>
      <div className="text-center text-5xl mb-6">
        <p>
          <strong>Instrucción:</strong> Arrastra el número al paso correspondiente para encender correctamente la computadora.
        </p>
        <div className="flex justify-center gap-4 mb-6">
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
        <div className="grid md:grid-cols-2 justify-items-center items-center gap-16 mb-10">
          <div
            className="dropzone border-2 border-dashed border-gray-500 w-64 h-64 flex items-center justify-center mb-6"
            id="drop-step1"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img src="/img/CPU.png" alt="Paso 1" className="size-48" />
          </div>
          <div
            className="dropzone border-2 border-dashed border-gray-500 w-64 h-64 flex items-center justify-center mb-6"
            id="drop-step2"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img src="/img/monitor.png" alt="Paso 2" className="size-48" />
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={checkAnswers}
            className="bg-red-500 text-white py-3 px-6 rounded-lg mt-8 hover:bg-red-600"
          >
            Enviar Respuestas
          </button>
          <button
            onClick={resetQuiz}
            className="bg-gray-500 text-white py-3 px-6 rounded-lg mt-8 hover:bg-gray-600"
          >
            Reiniciar
          </button>
        </div>
        <audio ref={successAudioRef} src="/success.mp3" preload="auto" />
        <audio ref={failureAudioRef} src="/failure.mp3" preload="auto" />
      </div>
    </div>
  );
};

export default ComputerStart;
