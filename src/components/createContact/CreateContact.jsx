import React from "react";

//se trae la función data de Function.jsx
const CreateContact = ({ data }) => {
  //se traen las popiedades definidas en Function.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    data(e.target.name.value, e.target.email.value, e.target.phone.value);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
  };

  return (
    <div className="mb-5 mt-5 ">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-title">
              <h2>Crear nuevo contacto</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="name" className="form-control" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Correo</label>
                    <input type="text" name="email" className="form-control" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Número de teléfono</label>
                    <input type="text" name="phone" className="form-control" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
