import { Carousel } from "antd";
import React from "react";
import "../styles/Components.css";
import { images } from "../utils/images.jsx";

const { banner1, banner2 } = images;

const contentStyle = {
  margin: 0,
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselComponent = () => (
  <>
    <Carousel style={{ height: "500px" }} arrows autoplay autoplaySpeed={6000}>
      <div>
        <div style={contentStyle}>
          <img
            src={banner1}
            alt="Primera imagen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 75%",
            }}
          />
          <h2 style={{ transform: "translate(0%, -150%)" }}>
            Servicio de destaponamientos las 24 horas con técnicos y equipos
            especializados.
          </h2>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src={banner2}
            alt="Segunda imagen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
          />
          <h2 style={{ transform: "translate(0%, -150%)", color: "#000" }}>
            Nuestro equipo de técnicos ofrecen un trabajo rápido y de calidad al
            problema de tus tuberias rotas.
          </h2>
        </div>
      </div>
    </Carousel>
  </>
);
export default CarouselComponent;
