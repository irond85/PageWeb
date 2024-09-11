import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "../components/HeaderComponent.jsx";
import FloatButtonComponent from "../components/FloatButtonComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";
import reactSvg from "../assets/react.svg";
import { useParams } from "react-router-dom";
import { Typography, Row, Image } from "antd";
const { Title, Paragraph } = Typography;
import SectionComponent from "../components/SectionComponent.jsx";
import services from "../utils/services.jsx";

function DetailedServiceView() {
  let serviceSelected = null;
  const { idService, serviceType } = useParams();

  if (serviceType == "servicios") {
    servicesSelected = services;
  }

  services.forEach(function (obj, indice) {
    if (obj.idService == idService && obj.serviceType == serviceType) {
      serviceSelected = obj;
      return;
    }
  });
  console.log(serviceSelected);

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
            <Image width={"50%"} src={reactSvg} />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row">
              <Paragraph style={{ fontSize: "18px" }}>
                Ofrecemos un servicio profesional y completo de{" "}
                {serviceSelected.serviceDetail}. <br />
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
