import React from "react";

//importe de funciones para manejar las rutas
import { Route, Routes } from "react-router-dom";

//importe de componentes para definir las rutas
import DetailsContact from "../components/detailsContact/DetailsContact";
import Function from "../components/layouts/Function";

//creación de rutas
const rutas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Function />} />
      <Route exact path="/details/:uid" element={<DetailsContact/>} />
    </Routes>
  );
};

export default rutas;
