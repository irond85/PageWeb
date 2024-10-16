import { Image, Row, Typography } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useParams } from "react-router-dom";
import FloatButtonComponent from "../components/FloatButtonComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import SectionComponent from "../components/SectionComponent.jsx";
import scrollToTop from "../hooks/scrollToTop.jsx";
import { imagesServices } from "../utils/images.jsx";
import services from "../utils/services.jsx";
const { Paragraph } = Typography;

function DetailedServiceView() {
  scrollToTop();
  let serviceSelected = null;
  const { idService, serviceType } = useParams();

  if (serviceType == "servicios") {
    servicesSelected = services;
  }

  services.forEach(function (obj) {
    if (obj.idService == idService && obj.serviceType == serviceType) {
      serviceSelected = obj;
      return;
    }
  });

  const getImage = imagesServices.get(serviceSelected.serviceImage);

  return (
    <>
      <HeaderComponent />
      <SectionComponent
        titleSection={serviceSelected.serviceName.toLocaleUpperCase()}
        colorBackground="#fff"
      >
        <Row>
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image width={"50%"} src={getImage} />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row">
              <Paragraph style={{ fontSize: "18px" }}>
                Ofrecemos un servicio profesional y completo de{" "}
                {serviceSelected.serviceDetail} <br />
                Este servicio incluye:
              </Paragraph>
            </div>
          </div>
        </Row>
      </SectionComponent>
      <FooterComponent />
      <FloatButtonComponent />
    </>
  );
}

export default DetailedServiceView;
