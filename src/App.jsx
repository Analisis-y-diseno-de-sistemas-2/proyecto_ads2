import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Matricula from "./pages/matricula/Matricula";
import Soporte from "./pages/soporte/Soporte";
import Login from "./pages/seguridad/Login";
import Register from "./pages/seguridad/Register";
import VerLista from "./pages/soporte/VerLista";
import FormularioConsulta from "./pages/soporte/FormularioConsulta";
import Reporte from "./pages/soporte/Reporte";
import CrearReporteQueja from "./pages/soporte/CrearReporteQueja";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />

          <Route path="/matricula" element={<Matricula />} />

          <Route path="/soporte" element={<Soporte />} />
          <Route path="/soporte/queja" element={<CrearReporteQueja />} />
        </Route>

        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/Ver" element={<VerLista />} />
        <Route path="/Reporte" element={<Reporte />} />
        <Route path="/FormularioConsulta" element={<FormularioConsulta />} />
      </Routes>
    </Router>
  );
}

export default App;
