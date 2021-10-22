import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import medic from "../components/images/medic.png";
import "../components/styles/navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="container-nav">
        <div className="container-brand">
          <h3>MEDICAL APP</h3>
        </div>
        <div className="container-titulo">
          <div className="row">
            <div className="col-md-6">
              <p
                style={{
                  display: "flex",
                  alignContent: "center",
                }}
              >
                El mejor aliado para su consultorio
              </p>
            </div>
            <div className="col-md-5">
              <img className="medic" src={medic} alt={medic} />
            </div>
          </div>
        </div>

        <nav className="navbar">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Consultorios"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Consultorios Medicos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Clinicas"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Clinicas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Empresas"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Empresas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Pacientes"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Pacientes
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </div>
    </>
  );
};
