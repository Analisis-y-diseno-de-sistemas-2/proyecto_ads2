import React from 'react';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/FondoSeguridad.png')" }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-5xl text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Registrar Usuario</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-gray-600">Nombres y apellidos</label>
            <input type="text" className="w-full p-2 rounded bg-gray-200" required />
          </div>

          <div>
            <label className="block text-gray-600">Doc Identidad</label>
            <input type="text" placeholder="DNI" className="w-full p-2 rounded bg-gray-200" required />
          </div>
          <div>
            <label className="block text-gray-600">Correo Electrónico</label>
            <input type="email" className="w-full p-2 rounded bg-gray-200" required />
          </div>
          <div>
            <label className="block text-gray-600">Teléfono</label>
            <input type="text" className="w-full p-2 rounded bg-gray-200" required />
          </div>
          <div>
            <label className="block text-gray-600">Departamento</label>
            <input type="text" className="w-full p-2 rounded bg-gray-200" />
          </div>
          <div>
            <label className="block text-gray-600">Provincia</label>
            <input type="text" className="w-full p-2 rounded bg-gray-200" />
          </div>
          <div>
            <label className="block text-gray-600">Distrito</label>
            <input type="text" className="w-full p-2 rounded bg-gray-200" />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-3">
            <label className="block text-gray-600">Dirección Exacta</label>
            <input type="text" className="w-full p-2 rounded bg-gray-200" />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input type="password" className="w-full p-2 rounded bg-gray-200" required />
          </div>
          <div>
            <label className="block text-gray-600">Repetir Password</label>
            <input type="password" className="w-full p-2 rounded bg-gray-200" required />
          </div>
        </form>

        <button className="mt-6 bg-lime-500 text-white font-semibold py-3 px-6 rounded hover:bg-lime-600 transition">
          Registrarme
        </button>

        <div className="mt-6 text-sm text-gray-500 text-right">
          Ya tienes cuenta?{' '}
          <Link to="/login" className="text-pink-600 font-bold underline">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
