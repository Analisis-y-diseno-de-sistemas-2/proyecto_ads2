import React, { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
import { useNavigate } from "react-router-dom";

const Finalizado = () => {
  const { datosPago, userData } = useContext(StepperContext);
  const metodoPago = datosPago.yape.telefono ? "Yape" : "Tarjeta";
  console.log("Datos de pago en Finalizado:", datosPago);
  console.log("Datos del usuario en Finalizado:", userData);

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[#174593] text-2xl font-medium">
          Matricula en linea
        </h2>
        <p className="text-2xl text-a1 uppercase font-semibold">
          Matricula registrada con exito!!!!
        </p>
        <p className="text-gray-500 text-xs">
          Enviaremos los horarios y utiles necesario a tu correo electronico
        </p>
      </div>
      <div className="flex justify-center">
        <div className="max-w-md w-full bg-[#E5EAF0] p-10">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-baseline">
              <p className="text-gray-500 text-sm">N# Operacion:</p>
              <p className="font-medium text-xl">034155</p>
            </div>
            <img
              src="../../../public/Carl-Sagan-log.webp"
              className="h-16"
              alt="logo-empresa"
            />
          </div>
          <div className="flex flex-col justify-baseline">
            <p className="text-gray-500 text-sm">Nombre del estudiante</p>
            <p className="font-medium text-xl capitalize">
              {userData.estudiante || ""}
            </p>
          </div>
          <div className="flex flex-col justify-baseline">
            <p className="text-gray-500 text-sm">Doc Identidad</p>
            <p className="font-medium text-xl">
              DNI | {userData.dniEstudiante || ""}
            </p>
          </div>
          <div className="flex flex-col justify-baseline">
            <p className="text-gray-500 text-sm">Grado</p>
            <p className="font-medium text-xl">{userData.grado || ""}</p>
          </div>
          <div className="flex flex-col justify-baseline">
            <p className="text-gray-500 text-sm">Aula asignada</p>
            <p className="font-medium text-xl">B</p>
          </div>
          <div className="flex flex-col justify-baseline">
            <p className="text-gray-500 text-sm">Fecha de inicio</p>
            <p className="font-medium text-xl">Lunes 15 de marzo del 2025</p>
          </div>
          <div></div>
          <p className="text-a1 text-center font-medium text-xl">
            Matricula pagada
          </p>
          <hr class="border-t-2 border-dotted border-lime-600 my-4" />
          <div className="flex flex-col justify-baseline">
            <p className="text-gray-500 text-sm">Monto</p>
            <p className="font-medium text-xl">S/. 30.00</p>
          </div>
          <div className="flex flex-col justify-baseline">
            <p className="text-gray-500 text-sm">Metodo de pago</p>
            <p className="font-medium text-xl">{metodoPago}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-a3 w-44 text-white py-2 px-4 rounded">
          Imprimir Comprobante
        </button>

        <button
          onClick={() => navigate("/home")}
          className="bg-a2 w-44 text-white py-2 px-4 rounded"
        >
          Menu Principal
        </button>
      </div>
    </div>
  );
};

export default Finalizado;
