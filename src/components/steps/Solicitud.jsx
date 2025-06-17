import React, { useCallback, useContext, useEffect } from "react";
import { StepperContext } from "../../context/StepperContext";
import { useForm } from "react-hook-form";

const Solicitud = () => {
  const { setHandleStepSubmit, setUserData, userData, setCurrentStep } =
    useContext(StepperContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = useCallback(
    (data) => {
      console.log(data);
      setUserData({ ...userData, ...data });
      setCurrentStep(2);
    },
    [setUserData]
  );

  useEffect(() => {
    setHandleStepSubmit(() => handleSubmit(onSubmit));
  }, [handleSubmit, setHandleStepSubmit]);
  return (
    <>
      <h2 className="text-a2 font-medium text-xl text-center">
        Solicitud de Matricula:
      </h2>
      <div className="bg-gray-100 ">
        <div className="bg-white py-5 px-6 rounded-lg shadow-md">
          <div className="bg-gray-100 p-2">
            <p className="text-gray-500 mb-3 text-xs font-semibold">
              IE Carl Sagan 2035
              <br />
              Av los olivos #245
              <br />
              [Lima/Lima/Comas, 12-12-2024]
            </p>
            <h2 className="text-blue-700  font-semibold mb-3 text-xs">
              Asunto:Solicitud de Matricula Escolar
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 text-gray-700"
            >
              <p className="space-y-2">
                Yo ,
                <input
                  type="text"
                  name=""
                  className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-60 xl:w-100"
                  {...register("nombre", {
                    required: true,
                  })}
                />
                {errors.nombre && (
                  <span className="text-red-500">
                    Este campo es obligatorio
                  </span>
                )}
                {", "}
                <br />
                identificado/a con el documento de identidad numero
                <input
                  type="number"
                  name=""
                  className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-32 xl:w-60"
                  {...register("dni", {
                    required: "El DNI es obligatorio.",
                    pattern: {
                      value: /^\d{8}$/,
                      message: "El DNI debe tener exactamente 8 dígitos.",
                    },
                  })}
                />
                {errors.dni && (
                  <span className="text-red-500">{errors.dni.message}</span>
                )}
                en mi calidad de
                <input
                  type="text"
                  name=""
                  className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-32 xl:w-60"
                  {...register("rol", {
                    required: true,
                  })}
                />{" "}
                del menor
                <input
                  type="text"
                  name=""
                  className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-32 xl:w-60"
                  {...register("estudiante", {
                    required: true,
                  })}
                />
                , identificado/a con el documento de identidad numero
                <input
                  type="number"
                  name=""
                  className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-32 xl:w-60"
                  {...register("dniEstudiante", {
                    required: "El DNI es obligatorio.",
                    pattern: {
                      value: /^\d{8}$/,
                      message: "El DNI debe tener exactamente 8 dígitos.",
                    },
                  })}
                />
                {errors.dniEstudiante && (
                  <span className="text-red-500">
                    {errors.dniEstudiante.message}
                  </span>
                )}
                , manifiesto mi interes en matricularlo/a en el grado
                <input
                  type="text"
                  name=""
                  className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-32 xl:w-60"
                  {...register("grado", {
                    required: true,
                  })}
                />{" "}
                <br />
                para el año lectivo
                <input
                  type="text"
                  name=""
                  className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-32 xl:w-60"
                  {...register("anioLectivo", {
                    required: true,
                  })}
                />
                .
              </p>
              <p className="">
                Declaro que estoy en pleno ejercicio de mis funciones como
                representante legal del menor y que cuento con la documentación
                necesaria para completar este trámite, la cual adjunto a la
                presente:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Copia de documento de identidad del estudiante.</li>
                <li>
                  Copia de documento de identidad del representante legal.
                </li>
                <li>
                  Certificado de estudios o libreta de calificaciones(si
                  aplica).
                </li>
                <li>[Otros documentos requeridos por la institución].</li>
              </ol>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solicitud;
