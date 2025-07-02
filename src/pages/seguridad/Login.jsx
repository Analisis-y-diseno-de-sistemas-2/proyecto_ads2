import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Login = () => {
  const { login, jwt, rol } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      if (rol === "USUARIOS") {
        return <Navigate to="/home" />;
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  if (rol === "USUARIOS" && jwt) {
    return <Navigate to="/home" />;
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/FondoSeguridad.png')" }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          INICIAR SESION
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="text-left mb-4">
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-3 rounded bg-gray-200 focus:outline-none"
              required
            />
          </div>
          <div className="text-left mb-2">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 rounded bg-gray-200 focus:outline-none"
              required
            />
          </div>
          <div className="text-left mb-4">
            <Link to="/forgotpass" className="text-sm text-gray-500 underline">
              Olvide mi password
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white font-semibold py-3 rounded hover:bg-lime-600 transition"
          >
            Ingresar
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-500">
          ¿Eres nuevo?{" "}
          <Link to="/register" className="text-pink-600 font-bold underline">
            Crear cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
