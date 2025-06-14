import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Matricula from "./pages/matricula/Matricula";
import Soporte from "./pages/soporte/Soporte";
import Login from "./pages/seguridad/Login";
import Register from "./pages/seguridad/Register";
import SolicitudMatricula from "./components/SolicitudMatricula";
import RegistrarDatos from "./components/RegistrarDatos";
import Finalizado from "./components/Finalizado";
import MatriculaLayout from "./components/MatriculaLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />

          <Route path="/matricula" element={<MatriculaLayout />}>
            <Route index element={<SolicitudMatricula />} />
            <Route path="registrar" element={<RegistrarDatos />} />
            <Route path="finalizado" element={<Finalizado />} />
          </Route>
          <Route path="/soporte" element={<Soporte />} />
        </Route>

        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
