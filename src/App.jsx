import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Matricula from "./pages/matricula/Matricula";
import Soporte from "./pages/soporte/Soporte";
import Login from "./pages/seguridad/Login";
import Register from "./pages/seguridad/Register";
import Olvide from "./pages/seguridad/OlvideContraseña";
import CrearReporteQueja from "./pages/soporte/CrearReporteQueja";
import CrearReporteDuda from "./pages/soporte/CrearReporteDuda";
import Muestra from "./pages/soporte/Muestra";
import VerLista from "./pages/soporte/VerLista";
import UserProvider from "./context/UserContext";
import { RequireAuth } from "./context/RequireAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <UserProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpass" element={<Olvide />} />
              </Routes>

              <RequireAuth>
                <Routes>
                  <Route element={<RootLayout />}>
                    <Route path="/home" element={<Home />} />

                    <Route path="/matricula" element={<Matricula />} />

                    <Route path="/soporte" element={<Soporte />} />
                    <Route
                      path="/soporte/queja"
                      element={<CrearReporteQueja />}
                    />
                    <Route
                      path="/soporte/duda"
                      element={<CrearReporteDuda />}
                    />
                    <Route path="/soporte/muestra" element={<Muestra />} />
                    <Route path="/soporte/lista" element={<VerLista />} />
                  </Route>
                </Routes>
              </RequireAuth>
            </UserProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
