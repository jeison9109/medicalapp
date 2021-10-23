import React from "react";
import { Carousel } from "react-carousel-minimal";
import medicamentos from "../images/medicamentos-slide.png";
import agenda from "../images/Agenda-slide.png";
import historiaclinica from "../images/historia-clinica.png";

export default function Carouseles() {
  const data = [
    {
      image: medicamentos,
      caption: `<div>
                    
                      Entrega de medicamentos
                      <br/>
                      <ul>
                      <li>
                      <p>Envio a Nivel Nacional</p>
                      <p>Entrega en menos de 2horas</p>
                      <p>100% confidencial y seguro</p>
                      </li>
                      </ul>
                    </div>`,
    },
    {
      image: agenda,
      caption: `<div>
      <h1>Agenda</h1>
      <br/>
      <ul>
      <li>
      <p>Integracion automatica con Whatsapp y correo electronico para confirmaciones de citas</p>
      </li>
      <li><p>Pagos en linea (Solo Colombia)</p></li>
      <li><p>Call center</p></li>
      </ul>
       </div>
      `,
    },
    {
      image: historiaclinica,
      caption: `
      <div className="container">
      <h1 >Historia Clinica electrónica</h1>
      <ul>
      <li><p>Formularios configurables para cada especialidad
      </p></li>
      
      <li><p>Consentimientos informados presenciales y vituales
      </p></li>
      
      <li><p>Órdenes médicas y formulación
      </p></li>
      
      <li><p>Sistema de Dictado Médico
      </p></li>
      
      <li><p>Repositorio de archivos del paciente
      </p></li>
      </ul>
      </div>
      `,
    },
  ];

  const captionStyle = {
    fontWeight: "bold",
    color: "black",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Carousel
          data={data}
          time={2000}
          width="950px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="white"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "750px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
}
