import React from "react";
import Botones from "../components/Botones";

function Home() {
  return (
    <div className="h-[calc(100vh-40rem)] w-full ">
      <div className="w-full h-[34rem]">
        <img
          className="w-full h-[34rem]"
          src="/imagen_Portada.jpg"
          alt="Logo"
        />
      </div>

      <div className="flex justify-center items-center  h-full">
        <Botones />
      </div>
    </div>
  );
}

export default Home;
