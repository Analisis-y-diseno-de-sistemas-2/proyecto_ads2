import React from "react";
import { FaBuilding } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { BsBagCheckFill } from "react-icons/bs";

function Botones() {
  return (
    <div>
      <div className="flex justify-center items-center gap-6 ">
        <button
          button
          className="flex items-center gap-4 px-8 py-4 max-w-60 bg-gray-100 text-black shadow-[0_8px_10px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 "
        >
          <IoBookSharp className="w-10 h-10 text-a1" />
          <span>Educacion de Calidad</span>
        </button>
        <button className="flex items-center max-w-60 gap-4 px-8 py-4  bg-gray-100 text-black shadow-[0_8px_10px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 ">
          <FaBuilding className="w-8 h-10 text-a1" />
          <span>Infraestructura moderna</span>
        </button>
        <button className="flex  items-center gap-4 px-8 py-4 max-w-60 bg-gray-100 text-black shadow-[0_8px_12px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 ">
          <BsBagCheckFill className="w-12 h-10 text-a1 " />
          <span>Malla actualizada</span>
        </button>
      </div>
    </div>
  );
}

export default Botones;
