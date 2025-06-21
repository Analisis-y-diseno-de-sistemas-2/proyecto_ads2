import React from "react";

function ReporteQueja() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row gap-8">
        {/* Lado Izquierdo */}
        <div className="w-full md:w-1/2 space-y-5">
          <div className="text-sm text-gray-600">
            <p className="font-semibold text-gray-800">
              RESOLUCION DEL REPORTE DE QUEJA:{" "}
              <span className="text-blue-600 font-bold">N# 001341</span>
            </p>
            <p className="mt-1">Fecha de consulta: <span className="text-gray-700">21-03-2024</span></p>
          </div>

          <div className="text-sm text-gray-400 space-y-3">
            <input type="text" placeholder="Nombres y apellidos del afectado" className="w-full p-3 bg-gray-100 rounded border border-gray-200" disabled />
            <input type="text" placeholder="Doc identidad del afectado" className="w-full p-3 bg-gray-100 rounded border border-gray-200" disabled />
            <input type="text" placeholder="Fecha del incidente" className="w-full p-3 bg-gray-100 rounded border border-gray-200" disabled />
            <input type="text" placeholder="Lugar del incidente" className="w-full p-3 bg-gray-100 rounded border border-gray-200" disabled />
            <input type="text" placeholder="Motivo de queja" className="w-full p-3 bg-gray-100 rounded border border-gray-200" disabled />
            <textarea rows="4" placeholder="Detalle de queja" className="w-full p-3 bg-gray-100 rounded border border-gray-200" disabled></textarea>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="w-full md:w-1/2 space-y-5">
          <div className="flex justify-between items-center text-sm text-gray-800">
            <span className="font-semibold">Respuesta</span>
            <span className="text-red-600 font-semibold">Estado: Pendiente</span>
          </div>

          <div className="bg-gray-100 p-4 h-40 rounded border border-gray-200 text-gray-600 text-sm flex items-center justify-center">
            <p className="italic font-medium">Esperando respuesta...</p>
          </div>

          <div className="border-t border-dashed pt-5 mt-5 space-y-3">
            <p className="text-sm text-gray-700">¿Estás satisfecho con esta respuesta?</p>
            <div className="flex space-x-6">
              <button className="bg-gray-300 px-6 py-2 rounded text-sm text-gray-700">Sí</button>
              <button className="bg-gray-300 px-6 py-2 rounded text-sm text-gray-700">No</button>
            </div>
            <input
              type="text"
              placeholder="Califica tu atención"
              className="w-full p-3 bg-gray-100 rounded border border-gray-200 text-sm"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReporteQueja;
