import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateContact = () => {
    const[id, idState] = useState("");
    const[name, nameState] = useState("");
    const[email, emailState] = useState("");
    const[phone, phoneState] = useState("");

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const data={id, name, email, phone};

        fetch("http://localhost:8000/contact",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        }).then((res)=>{
            alert('Contacto Guardado');
            navigate('/');
        }).catch((error)=>{
            console.log(error.message)
        })
    }
    
  return (
    <div>
      <div className='row'></div>
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-title">
                        <h2>Crear nuevo contacto</h2>
                    </div>
                    <div className='card-body'>
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input value={id} disabled="disabled" type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" value={name} onChange={e=>nameState(e.target.value)} className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Correo</label>
                                    <input type="text" value={email} onChange={e=>emailState(e.target.value)} className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Número de teléfono</label>
                                    <input type="text" value={phone} onChange={e=>phoneState(e.target.value)} className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button className="btn btn-success" type='submit'>Guardar</button>
                                    <Link to="/" className="btn btn-danger">Volver</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateContact
