import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { getPetition } from "../../resources/ApiFunction";
import useUser from "../../hooks/useUser";

function Muestra() {
  const location = useLocation();
  const { jwt } = useUser();
  const datos = location.state;
  const [muestra, setMuestra] = useState();
  console.log(location);

  useEffect(() => {
    const fetchDatos = async () => {
      if (datos.tipo === "Registro de queja") {
        getPetition(
          `reportes-queja/buscar/${datos?.id}`,
          (res) => {
            setMuestra(res);
            console.log("Datos obtenidos:", res);
          },
          jwt
        );
      } else {
        getPetition(
          `reportes-duda/buscar/${datos?.id}`,
          (res) => {
            setMuestra(res);
            console.log("Datos obtenidos:", res);
          },
          jwt
        );
      }
    };
    fetchDatos();
  }, [datos]);
  const { register, setValue } = useForm();
  setValue("nombreAfectado", muestra?.nombreAfectado || "");
  setValue("numeroDocumento", muestra?.numeroDocumento || "");
  setValue("fechaIncidente", muestra?.fechaIncidente || "");
  setValue("lugarIncidente", muestra?.lugarIncidente || "");
  setValue("motivoQueja", muestra?.motivoQueja || "");
  setValue("detalleQueja", muestra?.detalleQueja || "");
  setValue("motivo", muestra?.motivo || "");
  setValue("detalle", muestra?.detalle || "");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row gap-8">
        {datos?.tipo === "Registro de queja" ? (
          <div className="w-full md:w-1/2 space-y-5">
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-800">
                RESOLUCIÓN DEL REPORTE DE QUEJA:{" "}
                <span className="text-blue-600 font-bold">N# {datos?.id}</span>
              </p>
              <p className="mt-1">
                Fecha de consulta:{" "}
                <span className="text-gray-700">{muestra?.fechaCreada}</span>
              </p>
            </div>

            <div className="text-sm text-gray-400 space-y-3">
              <input
                {...register("nombreAfectado")}
                type="text"
                placeholder="Nombres y apellidos del afectado"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200"
                disabled
              />
              <input
                {...register("numeroDocumento")}
                type="text"
                placeholder="Doc identidad del afectado"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200"
                disabled
              />
              <input
                {...register("fechaIncidente")}
                type="text"
                placeholder="Fecha del incidente"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200"
                disabled
              />
              <input
                {...register("lugarIncidente")}
                type="text"
                placeholder="Lugar del incidente"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200"
                disabled
              />
              <input
                {...register("motivoQueja")}
                type="text"
                placeholder="Motivo de queja"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200"
                disabled
              />
              <textarea
                {...register("detalleQueja")}
                rows="4"
                placeholder="Detalle de queja"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200"
                disabled
              ></textarea>
            </div>
          </div>
        ) : (
          <div className="w-full md:w-1/2 space-y-5">
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-800">
                RESOLUCIÓN DEL REPORTE DE DUDAS:{" "}
                <span className="text-blue-600 font-bold">
                  N# {muestra?.id}
                </span>
              </p>
              <p className="mt-1">
                Fecha de consulta:{" "}
                <span className="text-gray-700">{muestra?.fechaIncidente}</span>
              </p>
            </div>

            <div className="text-sm text-gray-400 space-y-3">
              <input
                {...register("motivo")}
                type="text"
                placeholder="Motivo de queja"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200"
                disabled
              />
              <textarea
                {...register("detalle")}
                rows="4"
                placeholder="Detalle de queja"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200"
                disabled
              ></textarea>
            </div>
          </div>
        )}

        {/* Lado Derecho */}
        <div className="w-full md:w-1/2 space-y-5">
          <div className="flex justify-between items-center text-sm text-gray-800">
            <span className="font-semibold">Respuesta</span>
            <span
              className={`font-semibold ${
                muestra?.estado ? "text-red-600" : "text-green-600"
              }`}
            >
              Estado: {muestra?.estado ? "Pendiente" : "Atendido"}
            </span>
          </div>

          <div className="bg-gray-100 p-4 h-40 rounded border border-gray-200 text-gray-600 text-sm flex items-center justify-center">
            <p className="italic font-medium">Esperando respuesta...</p>
          </div>

          <div className="border-t border-dashed pt-5 mt-5 space-y-3">
            <p className="text-sm text-gray-700">
              ¿Estás satisfecho con esta respuesta?
            </p>
            <div className="flex space-x-6">
              <button
                disabled={datos.estado ? true : false}
                className="bg-gray-300 px-6 py-2 cursor-pointer rounded text-sm text-gray-700"
              >
                Sí
              </button>
              <button
                disabled={datos.estado ? true : false}
                className="bg-gray-300 px-6 py-2 cursor-pointer rounded text-sm text-gray-700"
              >
                No
              </button>
            </div>
            <input
              type="text"
              placeholder="Califica tu atención"
              className="w-full p-3 bg-gray-100 rounded border border-gray-200 text-sm"
              disabled={datos.estado ? true : false}
            />
          </div>
        </div>
      </div>
      <div
        className="flex
      gap-4 mt-6"
      >
        <button
          onClick={() => window.history.back()}
          className="bg-[#F8C901] text-white uppercase w-32 py-2 px-4 
          rounded-xl font-semibold cursor-pointer  
           hover:bg-slate-700 hover:text-white transition duration-200 
        ease-in-out"
        >
          ir atras
        </button>
        {!datos.estado && (
          <button
            className="bg-[#ABABAB] text-white uppercase w-32 py-2 px-4 
          rounded-xl font-semibold cursor-pointer 
           hover:bg-slate-700 hover:text-white transition duration-200 
        ease-in-out"
          >
            Guardar cambios
          </button>
        )}
      </div>
    </div>
  );
}

export default Muestra;
