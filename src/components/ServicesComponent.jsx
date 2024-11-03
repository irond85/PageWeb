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
          linkTo="services/plomeria"
        />
        <CardComponent
          srcImgCard={electricidad1}
          titleCard={"Electricidad"}
          linkTo="services/electricidad"
        />
        <CardComponent
          srcImgCard={obras}
          titleCard={"Obras y Reformas"}
          linkTo="services/obras"
        />
        <CardComponent
          srcImgCard={redGas}
          titleCard={"Gas"}
          linkTo="services/gases"
        />
        <CardComponent
          srcImgCard={instalaciones}
          titleCard={"Instalaciones"}
          linkTo="services/instalaciones"
        />
        <CardComponent
          srcImgCard={pintura}
          titleCard={"Pintura y Acabados"}
          linkTo="services/pintura"
        />
        <CardComponent
          srcImgCard={soldadura}
          titleCard={"Soldadura"}
          linkTo="services/soldadura"
        />
        <CardComponent
          srcImgCard={vidrieria}
          titleCard={"Vidrieria"}
          linkTo="services/vidrieria"
        />
      </div>
    </>
  );
};

export default ServicesComponent;
