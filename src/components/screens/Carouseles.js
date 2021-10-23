import React from "react";
import { Carousel } from "react-carousel-minimal";
import medicamentos from "../images/medicamentos-slide.png";
import agenda from "../images/Agenda-slide.png";
import historiaclinica from "../images/historia-clinica.png";

export default function Carouseles() {
  const data = [
    {
      image: medicamentos,
      /*caption: `<div>
                    
                     <h1> Entrega de medicamentos</h1>
                      
                      <ul>
                      <li>
                      <a>Envio a Nivel Nacional</a>
                      <br/>
                      <a>Entrega en menos de 2horas</a>
                      <br/>
                      <a>100% confidencial y seguro</a>
                      </li>
                      </ul>
                    </div>`,*/
    },
    {
      image: agenda,
      /* caption: `<div>
      <h1>Agenda</h1>
      <br/>
      <ul>
      <li>
      <a>Integracion automatica con Whatsapp y correo electronico para confirmaciones de citas</a>
      <br/>
      <a>Pagos en linea (Solo Colombia)</a>
      <br/>
      <a>Call center</a>
      </li>
     
      </ul>
       </div>
      `,*/
    },
    {
      image: historiaclinica,
      /*   caption: `
      <div>
      <h1>Historia Clinica electrónica</h1>
      <ul>
      <li>
      <a>Formularios configurables para cada especialidad<a/>
      <br/>
      <a>Consentimientos informados presenciales y vituales</a>
      <br/>
      <a>Órdenes médicas y formulación</a>
      <br/>
      <a>Sistema de Dictado Médico</a>
      </li>
      
      </ul>
      </div>
      `,*/
    },
  ];

  const captionStyle = {
    fontWeight: "bold",
    color: "gray",
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
