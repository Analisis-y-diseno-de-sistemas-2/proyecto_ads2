import React, { useState } from "react";
import Solicitud from "../../components/steps/Solicitud";
import Registro from "../../components/steps/Registro";
import Pagos from "../../components/steps/Pagos";
import Finalizado from "../../components/steps/Finalizado";
import Stepper from "../../components/stepercontrol/Stepper";
import ButtonControl from "../../components/stepercontrol/ButtonControl";
import { StepperContext } from "../../context/StepperContext";
const archivosRequeridos = [
  { label: "Subir Foto del estudiante", key: "foto", tipo: "image/*" },
  { label: "Partida de Nacimiento", key: "partida", tipo: "application/pdf" },
  {
    label: "Doc Identidad del representante legal",
    key: "dniRepresentante",
    tipo: "application/pdf",
  },
  {
    label: "Doc Identidad del estudiante",
    key: "dniEstudiante",
    tipo: "application/pdf",
  },
  {
    label: "Certificado de de estudios",
    key: "certificado",
    tipo: "application/pdf",
  },
  {
    label: "Comprobante de servicio publico",
    key: "servicio",
    tipo: "application/pdf",
  },
];
function Matricula() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [archivos, setArchivos] = useState({});
  const [handleStepSubmit, setHandleStepSubmit] = useState(null);
  const [datosPago, setDatosPago] = useState({
    tarjeta: { numero: "", vencimiento: "", cvv: "" },
    yape: { telefono: "", codigo: "" },
  });
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Account information",
    "Personal information",
    "Payment",
    "Confirmation",
  ];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Solicitud />;
      case 2:
        return <Registro />;
      case 3:
        return <Pagos />;
      case 4:
        return <Finalizado />;
      default:
    }
  };

  const handleClick = async (direction) => {
    let newStep = currentStep;

    if (direction === "next") {
      // Paso 1: validar formulario
      if (currentStep === 1) {
        const isValid = await handleStepSubmit(); // ✅ validación del form
        if (!isValid) return; // ⛔ Detiene si hay errores
      }

      // Paso 2: validar archivos
      if (currentStep === 2) {
        const faltantes = archivosRequeridos.filter(
          (item) => !archivos[item.key]
        );
        if (faltantes.length > 0) {
          alert(
            "Faltan subir los siguientes archivos:\n" +
              faltantes.map((f) => `- ${f.label}`).join("\n")
          );
          return;
        }
      }

      newStep++;
    } else {
      newStep--;
    }

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white ">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Display Components */}
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              archivos,
              setArchivos,
              setCurrentStep,
              datosPago,
              setDatosPago,
              archivosRequeridos,
              finalData,
              setFinalData,
              setHandleStepSubmit,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/* Navigation Controls */}
      {currentStep !== steps.length && (
        <ButtonControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default Matricula;
