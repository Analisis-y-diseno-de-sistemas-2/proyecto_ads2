import React from "react";

const ButtonControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-center gap-6 mt-4 mb-8">
      {/* back button */}
      <button
        onClick={() => handleClick()}
        className={`bg-[#ABABAB] text-white uppercase w-32 py-2 px-4 
          rounded-xl font-semibold cursor-pointer border-2 
           hover:bg-slate-700 hover:text-white transition duration-200 
        ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Atras
      </button>
      {/* next button*/}
      <button
        onClick={() => handleClick("next")}
        className="bg-[#92C137] text-white uppercase w-32 py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white
        transition duration-200 ease-in-out"
      >
        {currentStep === steps.length - 1 ? "Confirmar" : "Continuar"}
      </button>

      {/* {currentStep < 3 && (
        <button
          onClick={() => handleClick("next")}
          className="bg-[#92C137] text-white uppercase w-32 py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white
        transition duration-200 ease-in-out"
        >
          {currentStep === steps.length - 1 ? "Confirmar" : "Continuar"}
        </button>
      )} */}
    </div>
  );
};

export default ButtonControl;
