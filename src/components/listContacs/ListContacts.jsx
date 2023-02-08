import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListContacts = ({ id, email, name, phone, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Número de teléfono</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <a className="btn btn-danger" onClick={handleDelete}>
                    Eliminar
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListContacts;
