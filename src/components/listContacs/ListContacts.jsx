import React from 'react'

const ListContacts = () => {
  return (
    <div className='container'>
      <div className="card">
        <div className="card-title">
          <h2>Lista de Contactos</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Número de telefóno</td>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListContacts
