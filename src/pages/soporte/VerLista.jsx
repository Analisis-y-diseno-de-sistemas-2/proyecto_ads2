import React from "react";

function VerLista() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-gray-100 p-4 flex items-center justify-between rounded shadow-sm w-[700px]">
        {/* Información */}
        <div className="flex space-x-6 text-sm text-gray-700">
          <span>
            <strong>Tipo:</strong> Registro de queja
          </span>
          <span>
            <strong>Fecha:</strong> 23/11/20
          </span>
          <span>
            <strong>Estado:</strong>{" "}
            <span className="text-red-600 font-semibold">Pendiente</span>
          </span>
        </div>

        {/* Botón */}
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-1 rounded shadow">
          Ver
        </button>
      </div>
    </div>
  );
}

export default VerLista;
