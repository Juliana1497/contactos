import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CreateContact from "../createContact/CreateContact";
import ListContacts from "../listContacs/ListContacts";

const Function = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => 
        res.json()
      )
      .then((resp) => 
        setUsers(resp)
      )
      .catch((error) => {
        console.log(error.message);
      });
    };

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

    const onDelete = async(id) =>{
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method: 'DELETE'
      })
      .then((res)=>{
        if(res.status !== 200){
          return
        }else{
          return setUsers(users.filter((user)=>{
            return user.id !== id;
          }))
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  return (
    <div>
      <CreateContact data={data} />
      <div>
        <h2>Lista de Contactos</h2>
        {
            users.map((user)=>(
                <ListContacts id={user.id} key={user.id} name={user.name} email={user.email} phone={user.phone} onDelete={onDelete}/>
            ))
        }
      </div>
    </div>
  );
};

export default Function;
