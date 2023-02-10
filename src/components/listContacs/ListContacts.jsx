import React from "react";
import { useNavigate } from "react-router-dom";

//propiedades traidas del componente Function.jsx
const ListContacts = ({ id, email, name, phone, onDelete }) => {
  
  //se utiliza el método para traer la ruta
  const navigate = useNavigate();

  //se define una constante donde se guarda la función de eliminar cada usuario de la lista
  const handleDelete = () => {
    onDelete(id);
  };

  //Se trae la ruta donde se muestran los detalles del usuario definiendo el id
  const HandleDetail = (id) => {
    navigate("/details/" + id);
  };

  return (
    <div className="container">
      <table className="table table-1">
        <tbody>
          <tr>
            <a onClick={() => HandleDetail(id)}>
              <th scope="row" className="p-3 w-25 change">
                {name}
              </th>
              <td className="p-3 w-25 change">{email}</td>
              <td className="p-3 w-25 change">{phone}</td>
            </a>
            <td className="p-3 w-25">
              <a className="btn btn-danger" onClick={handleDelete}>
                Eliminar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListContacts;
