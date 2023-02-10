import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsContact = () => {
  const { uid } = useParams();//se trae y se guarda como el nombre definido en el key que se utiliza en el route
  const [about, setAbout] = useState({});

  //datos que se van a usar de la API
  const {
    name,
    username,
    email,
    phone,
    website,
  } = about;

  //Se consume la API y se adiciona en la ruta la key
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${uid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ textAlign: "center" }}>
        <div className="card-title">
          <h2>Detalles contacto</h2>
        </div>
        <div className="card-body">
          <div>
            <h2>Nombre: {name}</h2>
            <p>
              <strong>Nombre de usuario:</strong>
              {username}
            </p>
            <p>
              <strong>Correo:</strong> {email}
            </p>
            <p>
              <strong>Teléfono:</strong> {phone}
            </p>
            <p>
              <strong>Website:</strong> {website}
            </p>
          </div>
          <Link to="/" className="btn btn-danger">Volver</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsContact;
