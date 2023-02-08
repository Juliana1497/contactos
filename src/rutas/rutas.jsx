import React from "react";
import ListContacts from "../components/listContacs/ListContacts";

//importe de rutas
import { Route, Routes } from "react-router-dom";
import CreateContact from "../components/createContact/CreateContact";
import DetailsContact from "../components/detailsContact/DetailsContact";

//creación de rutas
const rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<ListContacts />} />
      <Route path="/create" element={<CreateContact/>} />
      <Route path="/details/:id" element={<DetailsContact/>} />
    </Routes>
  );
};

export default rutas;
