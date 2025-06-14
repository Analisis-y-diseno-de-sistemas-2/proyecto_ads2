import React, { useEffect } from "react";

const SolicitudMatricula = () => {
  const { setStep } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    setStep(1);
  }, [setStep]);

  const handleNext = () => {
    navigate("/matricula/registrar");
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Solicitud de Matrícula</h2>
      <form>
        {/* Aquí tus campos de formulario */}
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 mb-4 block w-full"
        />
        {/* ... otros campos ... */}
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default SolicitudMatricula;
