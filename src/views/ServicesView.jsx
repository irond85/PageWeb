import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent.jsx";
import FloatButtonComponent from "../components/FloatButtonComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import SectionComponent from "../components/SectionComponent.jsx";
import scrollToTop from "../hooks/scrollToTop.jsx";
import services from "../utils/services.jsx";

function ServicesView() {
  scrollToTop();
  let servicesSelected = [];
  const { serviceType = "servicios" } = useParams();

  if (serviceType == "servicios") {
    servicesSelected = services;
  }

  services.forEach(function (obj) {
    if (obj.serviceType == serviceType) {
      servicesSelected.push(obj);
    }
  });

  return (
    <>
      <HeaderComponent />
      <SectionComponent titleSection={serviceType.toLocaleUpperCase()}>
        {servicesSelected.map((service) => (
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 col-xxl-3">
            <CardComponent
              key={service.idService}
              titleCard={service.serviceName}
              descriptionCard={service.serviceDetail}
              srcImgCard={service.serviceImage}
              linkTo={`${service.idService}`}
              colsFormat={false}
              dynamicImage
            />
          </div>
        ))}
      </SectionComponent>
      <FooterComponent />
      <FloatButtonComponent />
    </>
  );
}

export default ServicesView;
