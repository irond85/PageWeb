import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "../components/CardComponent.jsx";
import { images } from "../utils/images.jsx";
const {
  electricidad1,
  plomeria2,
  vidrieria,
  destaponamiento,
  obras,
  instalaciones,
  redGas,
  soldadura,
  pintura,
} = images;

const ServicesComponent = () => {
  const styleRows = { justifyContent: "center", margin: "0 5%" };

  return (
    <>
      <div className="row" style={styleRows}>
        <CardComponent
          srcImgCard={plomeria2}
          titleCard={"Plomeria"}
          descriptionCard={
            "Esta es la descripcion de plomeria y sus servicios."
          }
          linkTo="services/plomeria"
        />
        <CardComponent
          srcImgCard={electricidad1}
          titleCard={"Electricidad"}
          descriptionCard={
            "Esta es la descripcion de electricidad y sus servicios."
          }
          linkTo="services/electricidad"
        />
        <CardComponent
          srcImgCard={obras}
          titleCard={"Obras y Reformas"}
          descriptionCard={"Esta es la descripcion de albañileria."}
          linkTo="services/obras"
        />
        <CardComponent
          srcImgCard={redGas}
          titleCard={"Red de Gas"}
          descriptionCard={"Servicios de redes de gas."}
          linkTo="services/gases"
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
          srcImgCard={pintura}
          titleCard={"Pintura y Acabados"}
          descriptionCard={
            "Esta es la descripcion de servicios de Pintura y acabados."
          }
          linkTo="services/pintura"
        />
        <CardComponent
          srcImgCard={soldadura}
          titleCard={"Soldadura"}
          descriptionCard={"Esta es la descripcion de servicios de Soldadura."}
          linkTo="services/soldadura"
        />
        <CardComponent
          srcImgCard={vidrieria}
          titleCard={"Vidrieria"}
          descriptionCard={
            "Esta es la descripcion de vidrieria y sus servicios."
          }
          linkTo="services/vidrieria"
        />
      </div>
    </>
  );
};

export default ServicesComponent;
