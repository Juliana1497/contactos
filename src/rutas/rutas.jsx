import React from "react";
import ListContacts from "../components/listContacs/ListContacts";

//importe de rutas
import { Route, Routes } from "react-router-dom";

//creación de rutas
const rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<ListContacts />} />
    </Routes>
  );
};

export default rutas;
