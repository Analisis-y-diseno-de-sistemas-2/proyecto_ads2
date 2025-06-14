import React from "react";

const Finalizado = () => {
  const { setStep } = useFormContext();

  useEffect(() => {
    setStep(3);
  }, [setStep]);

  return (
    <div>
      <h2 className="text-xl mb-4">¡Registro completado!</h2>
      <p>Gracias por completar el proceso de matrícula.</p>
    </div>
  );
};

export default Finalizado;
