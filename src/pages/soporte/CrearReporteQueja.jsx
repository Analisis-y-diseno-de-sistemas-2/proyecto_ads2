import React from "react";

const CrearReporteQueja = () => {
  return (
    <div className="flex flex-col w-full items-center bg-gray-400">
      <h2 className="font-medium pt-2">Reporte de queja</h2>
      <form action="" className=" flex flex-col  w-full  px-16 pt-2">
        <div className="flex flex-col">
          <label htmlFor="nombre">Nombres y apellidos del afectado</label>
          <input
            type="text"
            name="nombre"
            className="border border-gray-300 rounded bg-white w-full h-10"
          />
        </div>
        <div className="flex flex-col mt-6">
          <label htmlFor="documento">Documento de identidad del afectado</label>
          <div className="flex gap-2">
            <input
              type="text"
              className="border border-gray-300 rounded bg-white"
            />
            <input
              type="text"
              name="documento"
              className="border border-gray-300 rounded bg-white w-full h-10"
            />
          </div>
        </div>
        <div className="flex flex-row mt-6">
          <label className="w-full ">Fecha del incidente</label>
          <input
            type="text"
            className="border  border-gray-300 rounded bg-white w-full h-10"
          />
        </div>
        <div className="flex flex-col mt-6">
          <label>Lugar del incidente</label>
          <input
            type="text"
            name="incidente"
            className="border border-gray-300 rounded bg-white w-full h-10"
          />
        </div>
        <div>
          <div>
            <p>*Opcional</p>
            <p>Subir archivos como prueba</p>
          </div>
          <div>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default CrearReporteQueja;
