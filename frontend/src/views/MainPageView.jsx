import { Typography } from "antd";
import ServicesView from "./ServicesView.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import CarouselComponent from "../components/CarouselComponent.jsx";
import SectionComponent from "../components/SectionComponent.jsx";
import FloatButtonComponent from "../components/FloatButtonComponent.jsx";
import CardComponent from "../components/CardComponent.jsx";
import OptionsComponent from "../components/OptionsComponent.jsx";
import { Button, Tooltip } from "antd";
import reactSvg from "../assets/react.svg";
import whatsappIcon from "../assets/whatsappIcon.png";

const { Title } = Typography;

function MainPageView() {
  return (
    <>
      <HeaderComponent />
      <CarouselComponent />
      <SectionComponent
        colorBackground="#F79F18"
        heightSection="100%"
        titleSection="SOLICITA UN SERVICIO"
      >
        <div
          className="col-5 col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-6"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p>
            ¿Tienes un problema y necesitas una solución rápida? Comunícate con
            nosotros a través de nuestro WhatsApp.
          </p>
        </div>
        <div
          className="col-5 col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-3"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Button
            type="primary"
            shape="round"
            style={{ background: "#fff", color: "#000" }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={whatsappIcon}
              alt="whatsapp icon"
            />
            Clic aquí!
          </Button>
        </div>
      </SectionComponent>
      <div id="services">
        <Title
          level={1}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0px !important",
          }}
          id="services"
        >
          Nuestros Servicios
        </Title>
        <ServicesView />
      </div>
      <br />
      <SectionComponent
        heightSection="100%"
        titleSection="SOLICITA NUESTROS SERVICIOS DESTACADOS"
      >
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Instalación y Adecuación de neveras"}
          descriptionCard={
            "Esta es la descripcion de Instalación y Adecuación de neveras."
          }
        />
        <CardComponent
          srcImgCard={reactSvg}
          titleCard={"Instalación de Gas"}
          descriptionCard={"Esta es la descripcion de Instalación de Gas."}
        />
      </SectionComponent>
      <SectionComponent heightSection="100%" colorBackground="#fff">
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
          style={{ textAlign: "center", alignContent: "center" }}
        >
          <div className="row">
            <h1>PONTE EN CONTACTO</h1>
          </div>
          <div className="row">
            <p>
              Contamos con varias opciones para que te comuniques con nosotros y
              recibas una solución rápida.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <OptionsComponent />
        </div>
      </SectionComponent>
      <FloatButtonComponent />
    </>
  );
}

export default MainPageView;
