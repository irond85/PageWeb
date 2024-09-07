import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "../components/CardComponent.jsx";
import reactSvg from "../assets/react.svg";

const ServicesComponent = () => {
  const styleRows = { justifyContent: "center", margin: "0 5%" };

  return (
    <>
      <div className="row" style={styleRows}>
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Electricidad"}
          descriptionCard={
            "Esta es la descripcion de electricidad y sus servicios."
          }
          linkTo="services/electricidad"
        />
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Plomeria"}
          descriptionCard={
            "Esta es la descripcion de plomeria y sus servicios."
          }
          linkTo="services/plomeria"
        />
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Electricidad"}
          descriptionCard={"Esta es la descripcion de electricidad"}
        />
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Electricidad"}
          descriptionCard={"Esta es la descripcion de electricidad"}
        />
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Electricidad"}
          descriptionCard={"Esta es la descripcion de electricidad"}
        />
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Electricidad"}
          descriptionCard={"Esta es la descripcion de electricidad"}
        />
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Electricidad"}
          descriptionCard={"Esta es la descripcion de electricidad"}
        />
      </div>
    </>
  );
};

export default ServicesComponent;
