import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Matricula from "./pages/matricula/Matricula";
import Soporte from "./pages/soporte/Soporte";
import Login from "./pages/seguridad/Login";
import Register from "./pages/seguridad/Register";
import VerLista from "./pages/soporte/VerLista";
import Reporte from "./pages/soporte/Reporte";
import CrearReporteQueja from "./pages/soporte/CrearReporteQueja";
import CrearReporteDuda from "./pages/soporte/CrearReporteDuda";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />

          <Route path="/matricula" element={<Matricula />} />

          <Route path="/soporte" element={<Soporte />} />
          <Route path="/soporte/queja" element={<CrearReporteQueja />} />
          <Route path="/soporte/duda" element={<CrearReporteDuda />} />
        </Route>

        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/Ver" element={<VerLista />} />
        <Route path="/Reporte" element={<Reporte />} />
      </Routes>
    </Router>
  );
}

export default App;
