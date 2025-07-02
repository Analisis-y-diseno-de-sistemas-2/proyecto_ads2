import React, { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { getPetition } from "../../resources/ApiFunction";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

function VerLista() {
  const [reportes, setReportes] = useState([]);
  const navigate = useNavigate();
  const { id, jwt } = useUser();
  useEffect(() => {
    const fetchReportes = async () => {
      getPetition(
        `usuarios/${id}/reportes-todos`,
        (res) => {
          setReportes(res);
          console.log("Reportes obtenidos:", res);
        },
        jwt
      );
    };
    fetchReportes();
  }, []);

  const verDetalle = (reporteId, tipo) => {
    navigate("/soporte/muestra", {
      state: { id: reporteId, tipo: tipo }, // Enviar solo el ID del reporte
    });
  };

  console.log(id);

  return (
    <div className="flex items-center justify-center min-h-screen  bg-[#EFEFEF]">
      <div className=" flex flex-col items-center  w-[700px]">
        {reportes.map((filter) => (
          <div className="flex items-center shadow-sm rounded h-16 px-4 w-full bg-[#E8E8E8] my-2">
            <div
              className="flex space-x-6  w-full justify-between text-sm text-gray-700"
              key={filter.id}
            >
              <span className="hidden" id={filter.id}></span>
              <span>
                <strong>Tipo:</strong>
                {filter.tipo}
              </span>
              <span>
                <strong>Fecha:</strong>
                {filter.fechaCreada}
              </span>
              <span>
                <strong>Estado:</strong>
                <span
                  className={
                    filter.estado === 2
                      ? "text-green-600 font-semibold"
                      : filter.estado === 1
                      ? "text-red-600 font-semibold"
                      : "text-orange-600 font-semibold"
                  }
                >
                  {filter.estado === 2
                    ? "Atendido"
                    : filter.estado === 1
                    ? "Pendiente"
                    : "Inconforme"}
                </span>
              </span>
              <button
                onClick={() => verDetalle(filter.id, filter.tipo)}
                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-1 rounded shadow cursor-pointer"
              >
                Ver
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerLista;
