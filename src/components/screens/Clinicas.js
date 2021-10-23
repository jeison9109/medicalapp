import React from "react";
import agenda from "../images/Agenda-slide.png";
import { FaHospitalUser, FaCross, FaHome } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { GrIntegration } from "react-icons/gr";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { GiNurseFemale } from "react-icons/gi";

import { Footer } from "../screens/Footer";
import "../styles/clinicas.css";

export const Clinicas = () => {
  return (
    <>
      <div className="container-clinica">
        <div className="row">
          <div className="col-md-6">
            <div className="container-titulo1">
              <p
                style={{
                  display: "flex",
                  alignContent: "center",
                }}
              >
                Para Clínicas grandes, medianas y pequeñas
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
            <img className="agenda" src={agenda} alt={agenda} />
          </div>
        </div>

        {/*********** SECCTION CLIENTES **********/}
        <div className="container-clientes">
          <h1>Clientes</h1>
        </div>
        <div className="clientes">
          <div className="row">
            <div className="col-md-3">
              <div className="icon">
                <FaCross
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
                DAVITA
              </h5>
            </div>

            <div className="col-md-3">
              <div className="icon">
                <VscActivateBreakpoints
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
                COMPENSAR
              </h5>
            </div>

            <div className="col-md-3">
              <div className="icon">
                <GiNurseFemale
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
                CRUZ ROJA
              </h5>
            </div>

            <div className="col-md-3">
              <div className="icon">
                <GiNurseFemale
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
                CLINICA DE LA MUJER
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
