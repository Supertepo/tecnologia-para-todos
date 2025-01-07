import React, { useState } from 'react';

const correctAnswers = {
  pregunta1: "3",
  pregunta2: "1",
  pregunta3: "2"
};

const Cuestionario = () => {
  const [userAnswers, setUserAnswers] = useState({
    pregunta1: "",
    pregunta2: "",
    pregunta3: ""
  });

  const [results, setResults] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAnswers({
      ...userAnswers,
      [name]: value
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
      <h1>Cuestionario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>¿Cuál es el icono para “Rotación automática de pantalla”?</label>
          <input type="text" name="pregunta1" onChange={handleChange} />
        </div>
        <div>
          <label>¿Cuál es el icono para “Wi-Fi”?</label>
          <input type="text" name="pregunta2" onChange={handleChange} />
        </div>
        <div>
          <label>¿Cuál es el icono para “Linterna”?</label>
          <input type="text" name="pregunta3" onChange={handleChange} />
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
