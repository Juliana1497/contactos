import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ListContacts = () => {
  const[data, dataState] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/contact").then((res)=>{
      return res.json();
    }).then((resp)=>{
      dataState(resp);
    }).catch((error)=>{
        console.log(error.message);
    })
  }, [])

  return (
    <div className='container'>
      <div className="card">
        <div className="card-title">
          <h2>Lista de Contactos</h2>
        </div>
        <div className="card-body">
          <div className='divbtn'>
            <Link to="/create" className='btn btn-success'>Agregar contacto</Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Número de teléfono</td>
              </tr>
            </thead>
            <tbody>
              { data &&
                data.map(user=>(
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td><a className='btn btn-danger'>Eliminar</a></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListContacts
