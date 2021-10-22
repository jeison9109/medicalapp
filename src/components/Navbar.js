import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "../components/styles/navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="container-nav">
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
            <i className={click ? "FaTimes" : "FaBars"}></i>
          </div>
        </nav>
      </div>
    </>
  );
};
