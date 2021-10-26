import React, { useEffect, useState } from "react";

import "../styles/form.css";

export const Form = (props) => {
  const initialFieldValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  };

  let [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else setValues({ ...props.contactObjects[props.currentId] });
  }, [props.currentId, props.contactObjects]);

  const handleInpuntChange = (e) => {
    let { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <>
      <div className="container-form">
        <form autoComplete="off" className="well form-horizontal">
          <fieldset>
            <legend>
              Contáctenos
              <br />
              <p>Déjenos sus datos para contactarlos</p>
            </legend>

            <div className="form-group">
              <label className="col md-5 control-label">Nombre</label>

              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <input
                    value={values.first_name}
                    onChange={handleInpuntChange}
                    className="form-control"
                    name="first_name"
                    placeholder="Nombre"
                    type="text"
                  />
                </div>
              </div>
            </div>
            {/*-- Text input--*/}
            <br />
            <div className="form-group">
              <label className="col md-5 control-label">Apellidos</label>

              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <input
                    value={values.last_name}
                    onChange={handleInpuntChange}
                    className="form-control"
                    name="last_name"
                    placeholder="Apellidos"
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/*-- Text input--*/}

            <br />
            <div className="form-group">
              <label className="col md-5 control-label">Correo</label>

              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <input
                    value={values.email}
                    onChange={handleInpuntChange}
                    className="form-control"
                    name="email"
                    placeholder="Correo"
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/*-- Text input--*/}

            <br />
            <div className="form-group">
              <label className="col md-5 control-label">
                Número de telefono
              </label>

              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <input
                    value={values.phone}
                    onChange={handleInpuntChange}
                    className="form-control"
                    name="phone"
                    placeholder="phone"
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/*-- Text input--*/}
            <br />
            <div className="form-group">
              <label className="col md-5 control-label">Ciudad</label>

              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <input
                    value={values.city}
                    onChange={handleInpuntChange}
                    className="form-control"
                    name="city"
                    placeholder="city"
                    type="text"
                  />
                </div>
              </div>
            </div>
            {/*-- Text input--*/}
            <br />
            <div className="form-group">
              <label className="col-md-5 control-label">
                En que podemos ayudarle
              </label>
              <div className="input-group">
                <textarea
                  value={values.message}
                  onChange={handleInpuntChange}
                  className="form-control"
                  name="message"
                  placeholder="text"
                ></textarea>
              </div>
            </div>
            {/*-- Button --*/}
            <br />
            <div className="form-group">
              <div className="col-md-4">
                <button type="submit" className="btn-grad">
                  Enviar
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};
