import React, { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";

const Registro = () => {
  const { archivos, setArchivos, setUserData, archivosRequeridos } =
    useContext(StepperContext);
  const manejarCambioArchivo = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setArchivos((prev) => ({ ...prev, [key]: file }));
    }
  };
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-xl space-y-6">
        <h2 className="text-blue-800 text-xl font-semibold text-center">
          Registrar datos de estudiante:
        </h2>

        <div className="space-y-4">
          {archivosRequeridos.map((item) => (
            <div key={item.key} className="flex justify-between items-center">
              <label
                htmlFor={item.key}
                className="text-gray-800 text-[15px] w-[65%]"
              >
                {item.label}
              </label>

              <input
                type="file"
                accept={item.tipo}
                onChange={(e) => manejarCambioArchivo(e, item.key)}
                className="hidden"
                id={item.key}
              />

              <label htmlFor={item.key} className="cursor-pointer w-10 h-10">
                <img
                  src={
                    archivos[item.key]
                      ? item.key === "foto"
                        ? "/ok.png"
                        : "/ok.png"
                      : item.key === "foto"
                      ? "/img.png"
                      : "/subida.png"
                  }
                  alt="Subir"
                  className="w-full h-full object-cover"
                  title={archivos[item.key]?.name}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registro;
