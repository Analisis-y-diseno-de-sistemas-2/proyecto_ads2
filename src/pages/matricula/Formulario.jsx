function Formulario(){
  return(
    <div className="bg-gray-100 py-10 px-160">
      <div className="bg-white py-5 px-6 rounded-lg shadow-md">
        <div className="bg-gray-100">
          <p className="text-gray-500 mb-3 font-semibold">
            IE Carl Sagan 2035<br />
            Av los olivos #245<br />
            [Lima/Lima/Comas, 12-12-2024]
          </p>
          <h2 className="text-blue-700  font-semibold mb-3 text-base">Asunto:Solicitud de Matricula Escolar</h2>
          <form className="space-y-6 text-gray-700">
            <p className="space-y-2">
              Yo 
              <input type="text" name="" className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-[400px]"/> <br />
              identificado/a con el documento de identidad 
              numero 
              <input type="text" name="" className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-[200px]"/> 
              en mi canlidad de 
              <input type="text" name="" className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-[200px]"/> del 
              menor 
              <input type="text" name="" className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-[200px]"/> 
              identificado/a con el documento de 
              identidad numero 
              <input type="text" name="" className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-[200px]"/> 
              manifiesto mi interes 
              en matricularlo/a en el grado 
              <input type="text" name="" className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-[200px]"/> <br /> 
              para el año lectivo 
              <input type="text" name="" className="border border-gray-300 rounded bg-white px-2 py-0.5 mx-2 w-[200px]"/>
            </p>
            <p className="">
              Declaro que estoy en pleno ejercicio de mis funciones como representante legal del menor y que cuento con la documentación
              necesaria para completar este trámite, la cual adjunto a la presente.
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Copia de documento de identidad del estudiante</li>
              <li>Copia de documento de identidad del representante legal</li>
              <li>Certificado de estudios o libreta de calificaciones</li>
              <li>Otros documentos</li>
            </ol>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;