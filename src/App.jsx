import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Matricula from "./pages/matricula/Matricula";
import Soporte from "./pages/soporte/Soporte";
import Login from "./pages/seguridad/Login";
import Register from "./pages/seguridad/Register";
import RegistroEstudiante from "./pages/matricula/RegistroEstudiante";
import ConfirmacionMatricula from "./pages/matricula/ComfirmacionMatricula";
import { MetodoPago } from "./pages/matricula/MetodoPago.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/matricula" element={<Matricula />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/registro" element={<RegistroEstudiante/>}/>
          <Route path="/confirmacion" element={<ConfirmacionMatricula />} />
          <Route path="/pago" element={<MetodoPago/>}/>
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
