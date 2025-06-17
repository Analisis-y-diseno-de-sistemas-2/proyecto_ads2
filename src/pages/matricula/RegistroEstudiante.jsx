import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; //redireccion automatica

//formulario
const archivosRequeridos = [
  { label: "Subir Foto del estudiante", key: "foto", tipo: "image/*" },
  { label: "Partida de Nacimiento", key: "partida", tipo: "application/pdf" },
  {
    label: "Doc Identidad del representante legal",
    key: "dniRepresentante",
    tipo: "application/pdf",
  },
  {
    label: "Doc Identidad del estudiante",
    key: "dniEstudiante",
    tipo: "application/pdf",
  },
  {
    label: "Certificado de de estudios",
    key: "certificado",
    tipo: "application/pdf",
  },
  {
    label: "Comprobante de servicio publico",
    key: "servicio",
    tipo: "application/pdf",
  },
];

export default function RegistroEstudiante() {
  const [archivos, setArchivos] = useState({}); //traformar archivos a objetos
  const navigate = useNavigate();

  const manejarCambioArchivo = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setArchivos((prev) => ({ ...prev, [key]: file }));
    }
  };

  const irAtras = () => {
    navigate("/FormularioMatricula"); //pagina anterion
  };

  const continuar = () => {
    const faltantes = archivosRequeridos.filter((item) => !archivos[item.key]);
    if (faltantes.length > 0) {
      alert(
        "Faltan subir los siguientes archivos:\n" +
          faltantes.map((f) => `- ${f.label}`).join("\n")
      );
    } else {
      navigate("/pago"); //siguiente pagina
    }
  };
  console.log(archivos); //ver archivos subidos en consola

  //formulario de RegistroEstudiante
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

        <div className="flex justify-between mt-8">
          <button
            onClick={irAtras}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded text-lg"
          >
            Atrás
          </button>
          <button
            onClick={continuar}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded text-lg"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
