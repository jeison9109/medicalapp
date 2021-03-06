import React from "react";
import "../styles/consultorios.css";
import { GiNurseFemale } from "react-icons/gi";
import { MdOutlineSick, MdAddLocationAlt } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa";
import ilustracion from "../images/ilustracion.png";
import { Footer } from "./Footer";

import Carouseles from "./Carouseles";

export const Consultorios = () => {
  return (
    <>
      <div className="container-consultorios">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="icon">
                <GiNurseFemale
                  style={{
                    fontSize: "3rem",
                  }}
                />
              </div>

              <h5
                style={{ textAlign: "center", marginTop: "5px", color: "grey" }}
              >
                {" "}
                Professionales de Salud
              </h5>
              <h3 style={{ color: "blue", textAlign: "center" }}>+3.200</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="icon">
                <MdOutlineSick
                  style={{
                    fontSize: "3rem",
                  }}
                />
              </div>

              <h5
                style={{ textAlign: "center", marginTop: "5px", color: "grey" }}
              >
                Pacientes
              </h5>
              <h3
                style={{
                  color: "blue",
                  textAlign: "center",
                  marginTop: "23px",
                }}
              >
                500
              </h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="icon">
                <FaNotesMedical
                  style={{
                    fontSize: "3rem",
                  }}
                />
              </div>

              <h5
                style={{ textAlign: "center", marginTop: "5px", color: "grey" }}
              >
                Atenciones m??dicas por dia
              </h5>
              <h3 style={{ color: "blue", textAlign: "center" }}>200</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="icon">
                <MdAddLocationAlt
                  style={{
                    fontSize: "3rem",
                  }}
                />
              </div>

              <h5
                style={{ textAlign: "center", marginTop: "5px", color: "grey" }}
              >
                Pa??ses
              </h5>
              <h3
                style={{
                  color: "blue",
                  textAlign: "center",
                  marginTop: "23px",
                }}
              >
                5
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-carousel">
        <Carouseles />
      </div>

      <div className="container-ilustracion">
        <img
          className="container-ilustracion"
          src={ilustracion}
          alt={ilustracion}
        />
      </div>
      <Footer />
    </>
  );
};
