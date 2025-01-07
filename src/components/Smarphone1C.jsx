import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAnswers({
      ...userAnswers,
      [name]: value,
    });
  };

  const checkAnswers = () => {
    const results = {};
    for (const key in correctAnswers) {
      results[key] = correctAnswers[key] === userAnswers[key];
    }
    return results;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(checkAnswers());
  };

  return (
    <div>
      <h1 class="md:text-5xl text-6xl font-bold tracking-tight text-justify text-black">
        Cuestionario
      </h1>
      <br />
      <h2 class="md:text-4xl text-5xl font-bold tracking-tight text-justify text-black ">
        De las siguientes imagenes contesta las preguntas
      </h2>

      <br />
      <div class="grid grid-cols-3 pb-10 text-center items-center">
        <img src="/wifi.png" alt="icono de wifi" class="rounded-xl" />
        <img src="/Linterna.png" alt="icono de linterna" class="rounded-xl" />
        <img
          src="/Rotacion.png"
          alt="icono de rotacion de pantalla"
          class="rounded-xl"
        />
        <label class="text-center">1</label>
        <label class="text-center">2</label>
        <label class="text-center">3</label>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div class="">
          <label>
            ¿Cuál es el icono para “Rotación automática de pantalla”?
          </label>
          <br />
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            type="text"
            name="pregunta1"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>¿Cuál es el icono para “Wi-Fi”?</label>
          <br />
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            type="text"
            name="pregunta2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>¿Cuál es el icono para “Linterna”?</label>
          <br />
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            type="text"
            name="pregunta3"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Verificar Respuestas</button>
      </form>
      <h2>Resultados</h2>
      <ul>
        {Object.keys(results).map((key) => (
          <li key={key}>
            {key}: {results[key] ? "Correcto" : "Incorrecto"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cuestionario;
