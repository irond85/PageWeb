import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "../components/CardComponent.jsx";
import images from "../utils/images.jsx";
import reactSvg from "../assets/react.svg";
const {
  electricidad1,
  plomeria2,
  vidrieria,
  destaponamiento,
  obras,
  instalaciones,
  redGas,
} = images;

const ServicesComponent = () => {
  const styleRows = { justifyContent: "center", margin: "0 5%" };

  return (
    <>
      <div className="row" style={styleRows}>
        <CardComponent
          srcImgCard={electricidad1}
          titleCard={"Electricidad"}
          descriptionCard={
            "Esta es la descripcion de electricidad y sus servicios."
          }
          linkTo="services/electricidad"
        />
        <CardComponent
          srcImgCard={plomeria2}
          titleCard={"Plomeria"}
          descriptionCard={
            "Esta es la descripcion de plomeria y sus servicios."
          }
          linkTo="services/plomeria"
        />
        <CardComponent
          srcImgCard={vidrieria}
          titleCard={"Vidrieria"}
          descriptionCard={
            "Esta es la descripcion de vidrieria y sus servicios."
          }
          linkTo="services/vidrieria"
        />
        <CardComponent
          srcImgCard={obras}
          titleCard={"Obras y Reformas"}
          descriptionCard={"Esta es la descripcion de albañileria."}
          linkTo="services/obras"
        />
        <CardComponent
          srcImgCard={destaponamiento}
          titleCard={"Destaponamiento con Sonda Eléctrica"}
          descriptionCard={
            "Esta es la descripcion de servicios de destaponamiento."
          }
          linkTo="services/destaponamiento"
        />
        <CardComponent
          srcImgCard={instalaciones}
          titleCard={"Instalaciones"}
          descriptionCard={
            "Servicios de instalación de multiples electrodomesticos y productos."
          }
          linkTo="services/instalaciones"
        />
        <CardComponent
          srcImgCard={redGas}
          titleCard={"Red de Gas"}
          descriptionCard={"Servicios de redes de gas."}
          linkTo="services/gases"
        />
      </div>
    </>
  );
};

export default ServicesComponent;
