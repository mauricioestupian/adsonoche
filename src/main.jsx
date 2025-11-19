import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Principal from "./pages/contenidos/Principal.jsx";
import Contenido from "./pages/contenidos/contenido.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route index element={<Principal />} />
          <Route path="contenido" element={<Contenido />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
