import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Matricula from "./pages/matricula/Matricula";
import Soporte from "./pages/soporte/Soporte";
import Login from "./pages/seguridad/Login";
import Register from "./pages/seguridad/Register";
import Ver from "./pages/soporte/Ver_Lista";
import Reporte from "./pages/soporte/Reporte";
import FormularioConsulta from "./pages/soporte/Formulario_Consulta";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />

          <Route path="/matricula" element={<Matricula />} />

          <Route path="/soporte" element={<Soporte />} />
        </Route>

        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
            <Route path="/Ver" element={<Ver/>} />
            <Route path="/Reporte" element={<Reporte/>} />
            <Route path="/FormularioConsulta" element={<FormularioConsulta/>}/>
      </Routes>
    </Router>
  );
}

export default App;
