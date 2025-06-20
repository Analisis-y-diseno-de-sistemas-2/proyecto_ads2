import React from "react";
import Botones from "../components/Botones";
import Boton_de_bandeja from "../components/BotonBandeja";

function Home() {
  return (
    <div className="h-[calc(100vh-40rem)] w-full ">
      <div className="w-full h-[34rem]">
        <img
          className="w-full h-[34rem]"
          src="../../../public/imagen_Portada.jpg"
          alt="Logo"
        />
      </div>

      <div className="flex justify-center items-center  h-full">
        <Botones />
      </div>
      <Boton_de_bandeja />
    </div>
  );
}

export default Home;
