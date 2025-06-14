import React, { use, useEffect } from "react";
import { useRegFormContext } from "../context/RegFormContext";

const RegistrarDatos = () => {
  const { setStep } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    setStep(2);
  }, [setStep]);

  const handleNext = () => {
    navigate("/matricula/finalizado");
  };

  const handleBack = () => {
    navigate("/matricula/solicitud");
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Registrar Datos</h2>
      <form>
        <input
          type="text"
          placeholder="Correo"
          className="border p-2 mb-4 block w-full"
        />
        {/* ... otros campos ... */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Atrás
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrarDatos;
