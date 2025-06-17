import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MetodoPago = () => {
  const navigate = useNavigate();
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);
  const [datosPago, setDatosPago] = useState({
    tarjeta: { numero: "", vencimiento: "", cvv: "" },
    yape: { telefono: "", codigo: "" },
  });
  const [procesandoPago, setProcesandoPago] = useState(false);
  const [error, setError] = useState(null);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const metodosDePago = [
    {
      id: 1,
      nombre: "Tarjetas de Crédito y Débito",
      subtitulo: "(Visa, MasterCard)",
      icono: "/Tarjeta.png",
    },
    {
      id: 2,
      nombre: "Yape",
      subtitulo: "Pago móvil",
      icono: "/yape.png",
    },
  ];

  const manejarCambioInput = (e, metodo) => {
    const { name, value } = e.target;
    setDatosPago((prev) => ({
      ...prev,
      [metodo]: {
        ...prev[metodo],
        [name]: value,
      },
    }));
    setError(null);
  };

  const validarTarjeta = () => {
    const { numero, vencimiento, cvv } = datosPago.tarjeta;
    if (!numero || !vencimiento || !cvv) {
      setError("Por favor complete todos los campos de la tarjeta");
      return false;
    }
    if (!/^\d{16}$/.test(numero.replace(/\s/g, ""))) {
      setError("Número de tarjeta inválido (deben ser 16 dígitos)");
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(vencimiento)) {
      setError("Formato de fecha inválido (use MM/AA)");
      return false;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      setError("CVV inválido (deben ser 3 o 4 dígitos)");
      return false;
    }
    return true;
  };

  const validarYape = () => {
    const { telefono, codigo } = datosPago.yape;
    if (!telefono || !codigo) {
      setError("Por favor complete todos los campos de Yape");
      return false;
    }
    if (!/^\d{9}$/.test(telefono)) {
      setError("Número de teléfono inválido (deben ser 9 dígitos)");
      return false;
    }
    if (!/^\d{6}$/.test(codigo)) {
      setError("Código de verificación inválido (deben ser 6 dígitos)");
      return false;
    }
    return true;
  };

  const procesarPagoTarjeta = async () => {
    try {
      setProcesandoPago(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Pago con tarjeta procesado exitosamente por S/30.00");
      navigate("/confirmacion");
    } catch (err) {
      setError("Error al procesar el pago: " + err.message);
    } finally {
      setProcesandoPago(false);
    }
  };

  const procesarPagoYape = async () => {
    try {
      setProcesandoPago(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Pago con Yape procesado exitosamente por S/30.00");
      navigate("/confirmacion");
    } catch (err) {
      setError("Error al procesar el pago: " + err.message);
    } finally {
      setProcesandoPago(false);
    }
  };

  const manejarPago = () => {
    if (metodoSeleccionado === 1) {
      if (validarTarjeta()) setMostrarConfirmacion(true);
    } else if (metodoSeleccionado === 2) {
      if (validarYape()) setMostrarConfirmacion(true);
    }
  };

  const confirmarPago = () => {
    setMostrarConfirmacion(false);
    if (metodoSeleccionado === 1) {
      procesarPagoTarjeta();
    } else if (metodoSeleccionado === 2) {
      procesarPagoYape();
    }
  };

  const manejarAtras = () => {
    navigate("/registro");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-3 text-center">
        Elige tu método de pago
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Selecciona un método de pago para continuar con la matrícula.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
        <p className="text-sm text-blue-700 text-center">
          <span className="font-semibold">Importante:</span> Recuerda activar tu
          tarjeta para compras en línea antes de realizar el pago.
        </p>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="space-y-4 mb-6">
        {metodosDePago.map((metodo) => (
          <div key={metodo.id}>
            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                metodoSeleccionado === metodo.id
                  ? "border-blue-500 bg-blue-50 shadow-sm"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
              onClick={() => setMetodoSeleccionado(metodo.id)}
            >
              <div className="flex items-center">
                <img
                  src={metodo.icono}
                  alt={metodo.nombre}
                  className="w-10 h-10 mr-3 object-contain"
                />
                <div>
                  <p className="font-medium text-gray-800">{metodo.nombre}</p>
                  <p className="text-sm text-gray-500">{metodo.subtitulo}</p>
                </div>
              </div>
            </div>

            {/* Formulario para Tarjeta */}
            {metodoSeleccionado === 1 && metodo.id === 1 && (
              <div className="p-4 bg-gray-50 border border-t-0 rounded-b-lg space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Tarjetas de Crédito y Débito (Visa, MasterCard)
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Tarjeta
                  </label>
                  <input
                    type="text"
                    name="numero"
                    value={datosPago.tarjeta.numero}
                    onChange={(e) => manejarCambioInput(e, "tarjeta")}
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      MM/AA
                    </label>
                    <input
                      type="text"
                      name="vencimiento"
                      value={datosPago.tarjeta.vencimiento}
                      onChange={(e) => manejarCambioInput(e, "tarjeta")}
                      placeholder="MM/AA"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={datosPago.tarjeta.cvv}
                      onChange={(e) => manejarCambioInput(e, "tarjeta")}
                      placeholder="CVV"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <button
                  onClick={manejarPago}
                  disabled={procesandoPago}
                  className={`w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-200 mt-4 ${
                    procesandoPago ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {procesandoPago ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Procesando pago...
                    </div>
                  ) : (
                    "Pagar S/30.00"
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-2">
                  Cobraremos un monto mínimo para validar tu tarjeta. Este será
                  devuelto de inmediato.
                </p>
              </div>
            )}

            {/* Formulario para Yape */}
            {metodoSeleccionado === 2 && metodo.id === 2 && (
              <div className="p-4 bg-gray-50 border border-t-0 rounded-b-lg space-y-3">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src="/Carl-Sagan-log.png"
                    alt="Carl Sagan"
                    className="h-12 mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Pago con Yape
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ingresa tu número de Yape
                  </label>
                  <input
                    type="text"
                    name="telefono"
                    value={datosPago.yape.telefono}
                    onChange={(e) => manejarCambioInput(e, "yape")}
                    placeholder="Número de teléfono"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ingresar Código de verificación
                  </label>
                  <input
                    type="text"
                    name="codigo"
                    value={datosPago.yape.codigo}
                    onChange={(e) => manejarCambioInput(e, "yape")}
                    placeholder="Código de verificación"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <button
                  onClick={manejarPago}
                  disabled={procesandoPago}
                  className={`w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-all duration-200 mt-4 ${
                    procesandoPago ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {procesandoPago ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Procesando pago...
                    </div>
                  ) : (
                    "Yapear S/30.00"
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex justify-center mt-6">
        <button
          onClick={manejarAtras}
          className="px-8 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium shadow-sm"
        >
          Atrás
        </button>
      </div>

      {/* Modal de confirmación */}
      {mostrarConfirmacion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">
              ¿Estás seguro de realizar el pago?
            </h3>
            <p className="mb-6">
              Se cobrará S/30.00 a tu{" "}
              {metodoSeleccionado === 1 ? "tarjeta" : "cuenta Yape"}
            </p>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setMostrarConfirmacion(false)}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                No, cancelar
              </button>
              <button
                onClick={confirmarPago}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                disabled={procesandoPago}
              >
                {procesandoPago ? "Procesando..." : "Sí, estoy seguro"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
