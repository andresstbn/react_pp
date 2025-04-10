"use client";

import { useState } from "react";

export default function Notas() {
  const [notes, setNotes] = useState(["Nota 1", "Nota 2"]);
  const [currentNote, setCurrentNote] = useState("");

  const handleAddNote = () => {
    setNotes([...notes, currentNote]);
    setCurrentNote("");
  };

  // Reto 1: Evitar que se agreguen notas vacías (5pts)
  // Reto 2: Evitar que se agreguen notas con menos de 3 caracteres (5pts)
  // Reto 3: Cambiar el fondo de una nota al hacer click (usa bg-green-300) (10pts)
  // Reto 4: Al hacer click en una nota con fondo verde, debe marcarse con tachado (line-through) (10pts)
  // Reto 5: Crear un botón que elimine la última nota agregada (10pts)
  // Reto 6: Crear un botón que cuente y muestre cuántas notas hay (5pts)
  // Reto 7: Crear un botón que invierta el orden de las notas actuales (5pts)

  return (
    <main>
      <section className="bg-green-100 p-4 max-w-2xl mx-auto my-10">
        <div className="my-2 flex gap-2">
          <input
            className="bg-gray-100 border border-green-400 rounded-lg p-2"
            type="text"
            value={currentNote}
            onChange={(e) => {
              setCurrentNote(e.target.value);
            }}
          />
          <button
            className="bg-green-500 text-white rounded-lg px-4 py-2"
            onClick={handleAddNote}
          >
            Agregar nota
          </button>
          {/* <button className="bg-green-500 text-white rounded-lg px-4 py-2">
          Contar
        </button> */}
        </div>
        <div className="flex flex-col gap-2">
          {notes.map((note, index) => (
            <div key={index} className="bg-green-200 rounded-lg px-2 py-1">
              {note}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white p-4 max-w-2xl mx-auto my-10 border border-gray-300 rounded-lg">
        <h2 className="text-lg font-bold mb-4">
          Preguntas teóricas (Responde en cada campo)
        </h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            1. ¿En qué consiste el modelo cliente-servidor? Da un ejemplo.
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            rows={3}
            placeholder="Escribe tu respuesta aquí..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            2. Nombra y explica brevemente al menos tres métodos HTTP.
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            rows={3}
            placeholder="Escribe tu respuesta aquí..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            3. ¿Cuál es la función del HTML en una aplicación web?
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            rows={3}
            placeholder="Escribe tu respuesta aquí..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            4. ¿Qué es el protocolo HTTP y en qué capa del modelo TCP/IP se
            encuentra?
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            rows={3}
            placeholder="Escribe tu respuesta aquí..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            5. Menciona las 4 capas del modelo TCP/IP y una función de cada una.
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            rows={3}
            placeholder="Escribe tu respuesta aquí..."
          ></textarea>
        </div>
      </section>
    </main>
  );
}
