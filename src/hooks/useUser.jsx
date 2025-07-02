import React, { useCallback } from "react";
import { useUser as useUserContext } from "../context/UserContext";
import axios from "axios";

export default function useUser() {
  const { jwt, setJWT, id, setId, rol, setRol, username, setUsername } =
    useUserContext();

  const login = useCallback(
    async (usernameInput, passwordInput) => {
      try {
        const response = await axios.post(
          "http://localhost:9193/auth/login", // ✅ URL absoluta
          {
            username: usernameInput,
            password: passwordInput,
          }
        );

        // ✅ Mostrar la respuesta completa
        console.log("📦 Respuesta completa del backend:", response);
        console.log("📨 Datos recibidos:", response.data);

        const { token, id, username, rol } = response.data;

        if (id && token) {
          // Guardar en sessionStorage
          window.sessionStorage.setItem("id", id);
          setId(id);

          window.sessionStorage.setItem("jwt", token);
          setJWT(token);

          window.sessionStorage.setItem("rol", rol);
          setRol(rol);

          window.sessionStorage.setItem("username", username);
          setUsername(username);
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      } catch (error) {
        console.error("❌ Error en login:", error);
        alert("Usuario o contraseña incorrectos o error del servidor");
      }
    },
    [setJWT, jwt, setId, setRol, setUsername]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    window.sessionStorage.removeItem("id");
    window.sessionStorage.removeItem("rol");
    window.sessionStorage.removeItem("username");
    setJWT(null);
    setId(null);
    setRol(null);
    setUsername(null);
  }, [setJWT, setId, setRol, setUsername]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    id,
    rol,
    username,
    jwt,
  };
}
