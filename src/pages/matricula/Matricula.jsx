import React, { useState } from "react";
import Solicitud from "../../components/steps/Solicitud";
import Registro from "../../components/steps/Registro";
import Pagos from "../../components/steps/Pagos";
import Finalizado from "../../components/steps/Finalizado";
import Stepper from "../../components/stepercontrol/Stepper";
import ButtonControl from "../../components/stepercontrol/ButtonControl";
import { StepperContext } from "../../context/StepperContext";

function Matricula() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
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

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
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
              finalData,
              setFinalData,
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
