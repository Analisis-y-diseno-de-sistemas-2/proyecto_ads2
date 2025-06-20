import React from "react";
import { useForm } from "react-hook-form";
import { FaFileArrowUp } from "react-icons/fa6";

const CrearReporteQueja = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex  justify-center h-[calc(100vh-10rem)] bg-gray-200">
      <div className="flex flex-col w-full max-w-3xl items-center bg-white rounded-lg shadow-md m-6">
        <h2 className="font-medium pt-2">Reporte de queja</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col  w-full  px-16 pt-2"
        >
          <div className="flex flex-col">
            <label htmlFor="nombre">Nombres y apellidos del afectado</label>
            <input
              {...register("nombre")}
              type="text"
              name="nombre"
              className="border border-gray-300 rounded bg-gray-200 w-full h-10"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="documento">
              Documento de identidad del afectado
            </label>
            <div className="flex gap-2">
              <select
                {...register("tipo_documento")}
                name="tipo_documento"
                id="tipo_documento"
                className="border border-gray-300 rounded bg-gray-200  h-10"
              >
                <option value="">Tipo de documento</option>
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
              <input
                {...register("documento")}
                type="text"
                name="documento"
                className="border border-gray-300 rounded bg-gray-200 w-full h-10"
              />
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <label className="w-full ">Fecha del incidente</label>
            <input
              {...register("fecha_incidente")}
              type="date"
              className="border p-4 border-gray-300 rounded bg-gray-200 w-full h-10"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label>Lugar del incidente</label>
            <input
              {...register("lugar")}
              type="text"
              className="border border-gray-300 rounded bg-gray-200 w-full h-10"
            />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-1 flex-col  p-2">
              <p>*Opcional</p>
              <p>Subir archivos como prueba</p>
            </div>

            <div className="flex flex-1 items-center justify-center ">
              <label
                htmlFor="archivo"
                className="cursor-pointer inline-flex items-center gap-2"
              >
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
          <div className="flex flex-col mt-2">
            <label>Motivo de la queja</label>
            <input
              {...register("queja")}
              type="text"
              name="queja"
              className="border border-gray-300 rounded bg-gray-200 w-full h-10"
            />
          </div>
          <div className="flex flex-col ">
            <label>Detalle de la queja</label>
            <textarea
              {...register("detalle")}
              rows="6"
              cols="50"
              maxLength="500"
              type="text"
              name="detalle"
              className="border border-gray-300 rounded bg-gray-200 w-full "
            />
          </div>
          <div className="flex justify-center gap-6 pt-2">
            <button
              onClick={() => window.history.back()}
              className="bg-[#ABABAB] text-white uppercase w-32 py-2 px-4 
          rounded-xl font-semibold cursor-pointer border-2 
           hover:bg-slate-700 hover:text-white transition duration-200 
        ease-in-out"
            >
              Cancelar
            </button>

            {/* <a href="">
              <button
                className="bg-[#92C137] text-white border-2 uppercase w-32 py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white
        transition duration-200 ease-in-out"
              >
                Enviar
              </button>
            </a> */}
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearReporteQueja;
