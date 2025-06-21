import React from 'react';
import { Link } from 'react-router-dom';

const OlvidePassword = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/FondoSeguridad.png')" }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Recuperar password</h2>
        <p className="text-left text-yellow-500 mb-6">
          Enviaremos los pasos para recuperar tu cuenta a tu correo electrónico
        </p>
        <form>
          <div className="text-left mb-4">
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              type="email"
              className="w-full mt-1 p-3 rounded bg-gray-200 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white font-semibold py-3 rounded hover:bg-lime-600 transition"
          >
            Solicitar recuperación
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-500">
          ¿Tienes cuenta?{' '}
          <Link to="/login" className="text-pink-600 font-bold underline">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OlvidePassword;
