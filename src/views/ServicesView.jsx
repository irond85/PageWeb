import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "../components/CardComponent.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import FloatButtonComponent from "../components/FloatButtonComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";
import reactSvg from "../assets/react.svg";
import { Link, useParams } from "react-router-dom";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import SectionComponent from "../components/SectionComponent.jsx";
import services from "../utils/services.jsx";

function ServicesView() {
  let servicesSelected = [];
  const { serviceType = "servicios" } = useParams();

  if (serviceType == "servicios") {
    servicesSelected = services;
  }

  services.forEach(function (obj, indice) {
    if (obj.serviceType == serviceType) {
      servicesSelected.push(obj);
    }
  });
  console.log(servicesSelected);

  return (
    <>
      <HeaderComponent />
      <SectionComponent titleSection={serviceType.toLocaleUpperCase()}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {servicesSelected.map((service, index) => (
            <CardComponent
              key={service.idService}
              titleCard={service.serviceName}
              descriptionCard={service.serviceDetail}
              srcImgCard={service.serviceImage}
              linkTo={`${service.idService}`}
            />
          ))}
        </div>
      </SectionComponent>
      <FooterComponent />
      <FloatButtonComponent />
    </>
  );
}

export default ServicesView;
