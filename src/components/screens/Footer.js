import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1>MEDICAL APP</h1>
            </div>

            <div className="col-md-3">
              <h6>Para Consultorios Medicos</h6>
              <ul className="footer-links">
                <li>
                  <a style={{ color: "gray" }}> Atención presencial</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Telemedicina</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Atención Domiciliaria</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}> Precios</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>Para Clínicas</h6>
              <ul className="footer-links">
                <li>
                  <a style={{ color: "gray" }}>Aliados</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Historia Clínica</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Integración</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Confidencialidad y seguridad</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>Para Empresas</h6>
              <ul className="footer-links">
                <li>
                  <a style={{ color: "gray" }}>Aliados</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Ventajas</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Contacto</a>
                </li>
              </ul>
            </div>

            {/*  <div className="col-md-2">
              <hr />
              <hr />
              <img
                src={img2}
                alt={img2}
                style={{ width: "100%", height: "auto" }}
              />
            </div>*/}
          </div>
          <hr />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 Todos los derechos reservacion Medical App
                <a href="#"></a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="instragram" href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
