import React from "react";
import { Footer } from "./Footer";
import empresa from "../images/empresas.png";
import rebaja from "../images/rebaja.png";
import alpina from "../images/alpina.png";
import abbot from "../images/abbot.jpg";
import coaspharma from "../images/coaspharma.png";
import { FaHospitalUser, FaHome } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { GrIntegration } from "react-icons/gr";
import "../styles/empresas.css";

export const Empresas = () => {
  return (
    <>
      <div className="container-empresa">
        <div className="row">
          <div className="col-md-6">
            <div className="container-titulo1">
              <p
                style={{
                  display: "flex",
                  alignContent: "center",
                }}
              >
                Somos su aliado perfecto para darle el mejor servicio a sus
                clientes
              </p>
            </div>

            <div className="row">
              <div className="col-md-3">
                <div className="icon">
                  <FaHospitalUser
                    style={{
                      fontSize: "3rem",
                    }}
                  />
                </div>

                <h5
                  style={{
                    textAlign: "center",
                    marginTop: "5px",
                    color: "grey",
                  }}
                >
                  {" "}
                  Atención Intramural y extramural
                </h5>
              </div>

              <div className="col-md-3">
                <div className="icon">
                  <MdPhoneIphone
                    style={{
                      fontSize: "3rem",
                    }}
                  />
                  <FaHome
                    style={{
                      fontSize: "3rem",
                    }}
                  />
                </div>

                <h5
                  style={{
                    textAlign: "center",
                    marginTop: "5px",
                    color: "grey",
                  }}
                >
                  {" "}
                  Telemedicina y atencion domiciliaria
                </h5>
              </div>

              <div className="col-md-3">
                <div className="icon">
                  <GrIntegration
                    style={{
                      fontSize: "3rem",
                    }}
                  />
                </div>

                <h5
                  style={{
                    textAlign: "center",
                    marginTop: "5px",
                    color: "grey",
                  }}
                >
                  {" "}
                  Totalmente Integrable
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img className="empresa" src={empresa} alt={empresa} />
          </div>
        </div>

        {/*********** SECCTION ALIADOS **********/}
        <div className="container-clientes">
          <h1>Clientes</h1>
        </div>
        <div className="clientes">
          <div className="row">
            <div className="col-md-3">
              <div className="icon">
                <img className="rebaja" src={rebaja} alt={rebaja} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="icon">
                <img className="alpina" src={alpina} alt={alpina} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="icon">
                <img className="coaspharma" src={coaspharma} alt={coaspharma} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="icon">
                <img className="abbot" src={abbot} alt={abbot} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
