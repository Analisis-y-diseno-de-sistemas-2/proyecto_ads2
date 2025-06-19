import React from "react";

import { FaCircleQuestion } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";

const BotonesSporte = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-6 ">
        <a href="/soporte/queja">
          <button className="cursor-pointer flex items-center gap-4 px-8 py-4 max-w-60 bg-gray-100 text-black shadow-[0_8px_10px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 ">
            <FaHandPaper className="w-10 h-10 text-a1" />
            <span>Reportar una queja</span>
          </button>
        </a>

        <button className="cursor-pointer flex items-center max-w-60 gap-4 px-8 py-4  bg-gray-100 text-black shadow-[0_8px_10px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 ">
          <FaCircleQuestion className="w-8 h-10 text-a1" />
          <span>Resolver una duda</span>
        </button>
        <button className="cursor-pointer flex items-center max-w-60 gap-4 px-8 py-4  bg-gray-100 text-black shadow-[0_8px_10px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 ">
          <RiFileList3Fill className="w-8 h-10 text-a1" />
          <span>Ver estado de reporte</span>
        </button>
      </div>
    </div>
  );
};

export default BotonesSporte;
