import React, { useEffect, useState } from "react";
import CreateContact from "../createContact/CreateContact";
import ListContacts from "../listContacs/ListContacts";

const Function = () => {
  const [users, setUsers] = useState([]);//constantes principales
  const [search, setSearch] = useState("");//constantes para el filtro
  const [order, setOrder] = useState("ASC");//constantes para ordenar la lista

  /*-----------ORDENAR LAS LISTAS POR COLUMNAS----------- */
  const sorting = (col) => {
    //ordenar de manera ascendente
    if (order === "ASC") {
      const sorted = [...results].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );

      setUsers(sorted);
      setOrder("DSC");
    }
    //ordenar de manera descendente
    if (order === "DSC") {
      const sorted = [...results].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );

      setUsers(sorted);
      setOrder("ASC");
    }
  };

  /*-----------FILTRAR Y BUSCAR----------- */
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado para cada columna
  const results = !search
    ? users
    : users.filter(
        (dato) =>
          dato.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          dato.email.toLowerCase().includes(search.toLocaleLowerCase()) ||
          dato.phone.toLowerCase().includes(search.toLocaleLowerCase())
      );

  /*----------------TRAER LA INFORMACIÓN DE LA API----------------- */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((resp) => setUsers(resp))
      .catch((error) => {
        console.log(error.message);
      });
  };

  /*------------INSERTAR NUEVOS DATOS A LA TABLA---------- */
  const data = async (name, email, phone) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ name: name, email: email, phone: phone }),
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  /*------------ELIMINAR CADA USARIO DE LA TABLA----------- */
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          return setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* COMPONENTE DESDE DONDÉ SE VA A CREAR UN NUEVO USUARIO */}
      <CreateContact data={data} />
      <div>
        {/* BUSCADOR PARA FILTRAR LA LISTA */}
        <nav className="navbar bg-body-tertiary mb-5">
          <div className="container-fluid d-flex justify-content-center">
            <form className="d-flex" role="search">
              <input
                value={search}
                onChange={searcher}
                type="text"
                placeholder="Buscar"
                className="form-control me-2 shadow p-3 mb-5 bg-body-tertiary rounded"
              />
            </form>
          </div>
        </nav>

        {/* PARTE DE LA LISTA DE CONTACTOS */}
        <h2>Lista de Contactos</h2>
        <div className="container vw-100 container-table">
          <table className="table table-1">
            <thead className="bg-dark text-white">
              <tr>
                <th
                  scope="col"
                  className="p-3 w-25 change"
                  onClick={() => sorting("name")}
                >
                  <abbr title="ordenar">Nombre</abbr>
                </th>
                <th
                  scope="col"
                  className="p-3 w-25 change"
                  onClick={() => sorting("email")}
                >
                  <abbr title="ordenar">Correo</abbr>
                </th>
                <th
                  scope="col"
                  className="p-3 w-25 change"
                  onClick={() => sorting("phone")}
                >
                  <abbr title="ordenar">Número de teléfono</abbr>
                </th>
                <th scope="col" className="p-3 w-25">
                  Acción
                </th>
              </tr>
            </thead>
          </table>

          {results.map((user) => (
            <ListContacts
              id={user.id}
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Function;
