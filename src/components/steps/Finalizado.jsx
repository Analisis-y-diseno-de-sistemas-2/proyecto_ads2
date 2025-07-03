import React, { useContext, useEffect, useState } from "react";
import { StepperContext } from "../../context/StepperContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postPetition } from "../../resources/ApiFunction";
import useUser from "../../hooks/useUser";

const Finalizado = () => {
  const { jwt, id } = useUser();
  const { datosPago, userData, setUserData, archivos } =
    useContext(StepperContext);
  const [isReady, setIsReady] = useState(false);
  // Agregar los defaultValues a userData
  useEffect(() => {
    const defaultData = {
      aula: "B",
      metodoPago: datosPago.yape.telefono ? "Yape" : "Tarjeta",
      monto: 30.0,
      fechaPago: new Date().toISOString(),
      fechaInicio: "2025-03-15",
      idUsuario: Number(id),
    };
    setUserData((prevData) => {
      const updatedData = { ...prevData, ...defaultData };
      return updatedData;
    });

    // Esperamos un poco para asegurar que userData esté actualizado
    setTimeout(() => {
      setIsReady(true); // habilita el segundo useEffect
    }, 100); // puedes ajustar el delay si es necesario
  }, [setUserData, datosPago, id]);
  const metodoPago = datosPago.yape.telefono ? "Yape" : "Tarjeta";
  console.log("Datos de pago en Finalizado:", datosPago);
  console.log("Datos del usuario en Finalizado:", userData);
  console.log("Archivos en Finalizado:", archivos);
  useEffect(() => {
    if (!isReady) return;

    const registrarMatricula = async () => {
      if (!userData || !archivos || archivos.length < 6) {
        console.error("Datos o archivos incompletos.");
        return;
      }

      const formData = new FormData();

      formData.append(
        "matricula",
        new Blob([JSON.stringify(userData)], { type: "application/json" })
      );

      formData.append("fotoEstudiante", archivos.urlFotoEstudiante);
      formData.append("partidaNacimiento", archivos.urlPartidaNacimiento);
      formData.append(
        "docIdentidadRepresentante",
        archivos.urlDocRepresentante
      );
      formData.append("docIdentidadEstudiante", archivos.urlDocEstudiante);
      formData.append("certificadoEstudios", archivos.urlCertificadoEstudios);
      formData.append("comprobanteServicio", archivos.urlComprobanteServicio);

      postPetition(
        "matricula/registrar",
        formData,
        (res) => {
          if (res.status === 200 || res.status === 201) {
            alert("Matrícula registrada exitosamente");
            console.log("Respuesta:", res);
          } else {
            alert("Error al registrar la matrícula");
          }
        },
        jwt
      );
    };

    registrarMatricula();
  }, [isReady, userData, archivos, jwt]);
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
              {userData.nombreEstudiante || ""}
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
