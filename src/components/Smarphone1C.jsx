import React, { useState } from "react";
import Confetti from "react-confetti";

const correctAnswers = {
  pregunta1: "3",
  pregunta2: "1",
  pregunta3: "2",
};

const Cuestionario = () => {
  const [userAnswers, setUserAnswers] = useState({
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",
  });

  const [results, setResults] = useState({});
  const [allCorrect, setAllCorrect] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAnswers({
      ...userAnswers,
      [name]: value,
    });
  };

  const checkAnswers = () => {
    const results = {};
    let allCorrect = true;
    for (const key in correctAnswers) {
      results[key] = correctAnswers[key] === userAnswers[key];
      if (!results[key]) {
        allCorrect = false;
      }
    }
    return { results, allCorrect };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { results, allCorrect } = checkAnswers();
    setResults(results);
    setAllCorrect(allCorrect);
    setValidated(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-5xl text-center">
      {allCorrect && <Confetti />}
      <h1 className="md:text-5xl text-6xl font-bold tracking-tight text-justify text-black">
        Cuestionario
      </h1>
      <br />
      <h2 className="md:text-4xl text-5xl font-bold tracking-tight text-justify text-black">
        De las siguientes imágenes contesta las preguntas
      </h2>
      <br />
      {validated && (
        <div>
          {allCorrect ? (
            <div className="text-5xl text-green-500">
              ¡Felicitaciones! Todas las respuestas son correctas.
            </div>
          ) : (
            <div className="text-5xl text-red-500">
              Sigue aprendiendo, ¡puedes hacerlo mejor!
            </div>
          )}
        </div>
      )}
      <br />
      <div className="grid grid-rows-1 md:grid-cols-3 pb-10 text-center items-center max-w-3xl mx-auto">
        <div>
          <img
            src="/wifi.png"
            alt="icono de wifi"
            className="p-10 md:p-7 rounded-full"
          />
          <p className="text-2xl">1</p>
        </div>
        <div>
          <img
            src="/Linterna.png"
            alt="icono de linterna"
            className="p-10 md:p-7 rounded-full"
          />
          <p className="text-2xl">2</p>
        </div>
        <div>
          <img
            src="/Rotacion.png"
            alt="icono de rotación de pantalla"
            className="p-10 md:p-7 rounded-full"
          />
          <p className="text-2xl">3</p>
        </div>
      </div>
      <br />
      <form
        onSubmit={handleSubmit}
        className="items-center grid grid-rows-3 max-w-xl mx-auto"
      >
        <div>
          <label className="text-4xl text-center">
            ¿Cuál es el icono para “Rotación automática de pantalla”?
          </label>
          <br />
          <br />
          <input
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 rounded-lg p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
            type="text"
            name="pregunta1"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="text-4xl">¿Cuál es el icono para “Wi-Fi”?</label>
          <br />
          <br />
          <input
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 rounded-lg block p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
            type="text"
            name="pregunta2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="text-4xl">¿Cuál es el icono para “Linterna”?</label>
          <br />
          <br />
          <input
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 rounded-lg block p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
            type="text"
            name="pregunta3"
            onChange={handleChange}
          />
        </div>
        <button
          className="text-white bg-[#a9afe3] hover:bg-[#cea9e3] focus:ring-4 focus:outline-none focus:ring-blue-300 md:font-medium rounded-lg md:text-3xl text-5xl px-1 md:px-4 text-center"
          type="submit"
        >
          Verificar Respuestas
        </button>
      </form>
      <h2>Resultados</h2>
      {Object.keys(results).length > 0 && (
        <ul>
          {Object.keys(results).map((key) => (
            <li key={key}>
              {key}: {results[key] ? "Correcto" : "Incorrecto"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cuestionario;
