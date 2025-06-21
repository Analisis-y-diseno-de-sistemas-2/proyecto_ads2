import React from "react";
import BotonesSoporte from "../../components/BotonesSporte";
function Soporte() {

  return (
    <div>
      <div className="bg-gray-600 h-[45vh]">
    <img src="../public/bannersoporte.png" alt="bannersoporte" className="w-full block"/>
    </div>
      <div>
        <h2 className="my-12 text-gray-500 font-medium text-xl">
          Que deseas hacer el dia de hoy?
        </h2>
        <BotonesSoporte />
      </div>
    </div>
  );
}

export default Soporte;
