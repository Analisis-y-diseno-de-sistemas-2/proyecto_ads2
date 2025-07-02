import React from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import useUser from "../../hooks/useUser";
import { postPetition } from "../../resources/ApiFunction";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CrearReporteDuda = () => {
  const navigate = useNavigate();
  const { id, jwt } = useUser();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      usuario: { id: id },
    },
  });
  const onSubmit = async (data) => {
    const archivo = data.archivo?.[0];

    const reporte = {
      motivo: data.motivo,
      detalle: data.detalle,
      estado: 1,
      usuario: { id: id },
    };

    const formData = new FormData();
    formData.append(
      "reporte",
      new Blob([JSON.stringify(reporte)], { type: "application/json" })
    );
    if (archivo) {
      formData.append("archivoPrueba", archivo);
    }

    postPetition(
      "reportes-duda/crear",
      formData,
      (res) => {
        if (res.status === 200 || res.status === 201) {
          alert("Reporte enviado correctamente");
          navigate("/soporte/muestra", {
            state: {
              ...reporte,
              id: res.data.id,
              archivoUrl: res.data.archivoUrl || null,
              tipo: "Registro de duda",
            },
          });
        } else {
          alert("Error al enviar el reporte");
        }
      },
      jwt
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Realizar consulta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-xs text-gray-500 block mb-1">
              *Opcional
            </label>

            <div className="flex items-center space-x-2">
              <label htmlFor="archivo" className="text-gray-400 font-medium">
                <FaFileArrowUp size={36} color="#174593" />
              </label>
              <input
                {...register("archivo")}
                className="hidden"
                type="file"
                id="archivo"
              />
            </div>
          </div>

          <div>
            <input
              {...register("motivo")}
              type="text"
              placeholder="Motivo de consulta"
              className="w-full border rounded px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div>
            <textarea
              {...register("detalle")}
              placeholder="Detalles de la consulta"
              rows={5}
              className="w-full border rounded px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded shadow"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded shadow"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearReporteDuda;
