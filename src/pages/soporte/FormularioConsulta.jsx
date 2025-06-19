import { Upload } from "lucide-react";

const FormularioConsulta = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Realizar consulta
        </h2>

        <form className="space-y-5">
          <div>
            <label className="text-xs text-gray-500 block mb-1">
              *Opcional
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-medium">
                Subir archivo adjunto
              </span>
              <button
                type="button"
                className="bg-blue-100 text-blue-700 p-2 rounded"
                title="Subir archivo"
              >
                <Upload size={20} />
              </button>
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Motivo de consulta"
              className="w-full border rounded px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div>
            <textarea
              placeholder="Detalles de la consulta"
              rows={5}
              className="w-full border rounded px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div className="flex justify-between pt-2">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded shadow"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded shadow"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioConsulta;
