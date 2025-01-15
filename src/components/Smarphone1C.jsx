import React, { useState } from 'react';
import Confetti from 'react-confetti';

const correctAnswers = {
  pregunta1: "3",
  pregunta2: "1",
  pregunta3: "2",
  pregunta4: "a",
  pregunta5: "b",
  pregunta6: "a",
};

const Cuestionario = () => {
  const [userAnswers, setUserAnswers] = useState({
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",
    pregunta4: "",
    pregunta5: "",
    pregunta6: "",
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {validated && (
        <div>
          {allCorrect && <Confetti />}
          <div className="verification">
            {allCorrect ? (
              <div className="text-5xl text-green-500">
                ¡Felicitaciones! Has seleccionado las opciónes correctas.
              </div>
            ) : (
              <div className="text-5xl text-red-500">
                Incorrecto, sigue intentándolo.
              </div>
            )}
          </div>
        </div>
      )}
      <h1 className="text-center text-3xl text-gray-800">Cuestionario</h1>
      <form id="cuestionario" onSubmit={handleSubmit} className=" p-5 rounded-lg shadow-xl ">
        <div>
          <h3 className="text-lg font-bold text-gray-700">1. ¿Cuál es el icono para “Rotación automática de pantalla”?</h3>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta1" value="1" onChange={handleChange} className="mr-2" />
            <img src="/img/Wifi.png" alt="Icono 1" width="100" />
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta1" value="2" onChange={handleChange} className="mr-2" />
            <img src="/img/Linter.png" alt="Icono 2" width="100" />
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta1" value="3" onChange={handleChange} className="mr-2" />
            <img src="/img/RotateAp.png" alt="Icono 3" width="100" />
          </label>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">2. ¿Cuál es el icono para “Wi-Fi”?</h3>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta2" value="1" onChange={handleChange} className="mr-2" />
            <img src="/img/Wifi.png" alt="Icono 4" width="100" />
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta2" value="2" onChange={handleChange} className="mr-2" />
            <img src="/img/Linter.png" alt="Icono 5" width="100" />
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta2" value="3" onChange={handleChange} className="mr-2" />
            <img src="/img/RotateAp.png" alt="Icono 6" width="100" />
          </label>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">3. ¿Cuál es el icono para “Linterna”?</h3>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta3" value="1" onChange={handleChange} className="mr-2" />
            <img src="/img/Wifi.png" alt="Icono 7" width="100" />
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta3" value="2" onChange={handleChange} className="mr-2" />
            <img src="/img/Linter.png" alt="Icono 8" width="100" />
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta3" value="3" onChange={handleChange} className="mr-2" />
            <img src="/img/RotateAp.png" alt="Icono 9" width="100" />
          </label>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">4. ¿Cuál es la siguiente función y para qué sirve?</h3>
          <img src="/img/NdBrillo.png" alt="Función ilustrativa" className="w-full mb-2" />
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta4" value="a" onChange={handleChange} className="mr-2" />
            Nivel de brillo: Su función es subir o bajar el brillo del celular a gusto propio.
          </label><br />
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta4" value="b" onChange={handleChange} className="mr-2" />
            Luz nocturna: Su función es darnos una luz cálida para ocuparse en la noche sin afectar la vista al usuario.
          </label><br />
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta4" value="c" onChange={handleChange} className="mr-2" />
            Ahorro de energía: Su función es no gastar tanta energía del celular, esto si no tenemos un centro de carga cercano.
          </label>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">5. Para ver las Notificaciones (mensajes, llamadas o alertas) necesitamos deslizar nuestro dedo ____ hacia ____.</h3>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta5" value="a" onChange={handleChange} className="mr-2" />
            De abajo hacia arriba.
          </label><br />
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta5" value="b" onChange={handleChange} className="mr-2" />
            De arriba hacia abajo.
          </label>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">6. Para ver Todas las aplicaciones del celular necesitamos deslizar nuestro dedo ____ hacia ____.</h3>
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta6" value="a" onChange={handleChange} className="mr-2" />
            De abajo hacia arriba.
          </label><br />
          <label className="flex items-center mb-2">
            <input type="radio" name="pregunta6" value="b" onChange={handleChange} className="mr-2" />
            De arriba hacia abajo.
          </label>
        </div>

        <button type="submit" className="block w-full py-2 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-700">Enviar</button>
      </form>

      {validated && (
        <div id="resultado" className="text-center mt-5 text-lg font-bold">
          {Object.keys(results).map((key) => (
            <p key={key}>
              {key}: {results[key] ? "Correcto" : "Incorrecto"}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cuestionario;
