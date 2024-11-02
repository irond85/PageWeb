import HeaderComponent from "../components/HeaderComponent.jsx";
import CarouselComponent from "../components/CarouselComponent.jsx";
import SectionComponent from "../components/SectionComponent.jsx";
import FloatButtonComponent from "../components/FloatButtonComponent.jsx";
import CardComponent from "../components/CardComponent.jsx";
import OptionsComponent from "../components/OptionsComponent.jsx";
import StatsComponent from "../components/StatsComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";
import { Button } from "antd";
import reactSvg from "../assets/react.svg";
import whatsappIcon from "../assets/whatsappIcon.png";
import ServicesComponent from "../components/ServicesComponent.jsx";
import scrollToTop from "../hooks/scrollToTop.jsx";
import services from "../utils/services.jsx";

function MainPageView() {
  scrollToTop();

  let serviceSelecUno = services[Math.floor(Math.random() * services.length)];
  let serviceSelecDos =
    services[Math.floor(Math.random() * services.length) + 1];
  let serviceSelecTres =
    services[Math.floor(Math.random() * services.length) - 1];

  return (
    <>
      <HeaderComponent />
      <CarouselComponent />
      <SectionComponent colorBackground="#F79F18" heightSection="100%">
        <div
          className="col-5 col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-6"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <h2>SOLICITA UN SERVICIO</h2>
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
            style={{
              background: "#fff",
              color: "#000",
              textDecoration: "none",
            }}
            size="large"
            href="https://api.whatsapp.com/send/?phone=573016264147&text&type=phone_number&app_absent=0"
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

      <SectionComponent
        colorBackground="#FFF"
        heightSection="100%"
        titleSection="Nuestros Servicios"
      >
        <ServicesComponent />
      </SectionComponent>
      <br />
      <SectionComponent
        heightSection="100%"
        titleSection="SOLICITA NUESTROS SERVICIOS DESTACADOS"
      >
        <CardComponent
          key={serviceSelecUno.idService}
          titleCard={serviceSelecUno.serviceName}
          srcImgCard={serviceSelecUno.serviceImage}
          linkTo={`${serviceSelecUno.idService}`}
          dynamicImage
        />
        <CardComponent
          key={serviceSelecDos.idService}
          titleCard={serviceSelecDos.serviceName}
          srcImgCard={serviceSelecDos.serviceImage}
          linkTo={`${serviceSelecDos.idService}`}
          dynamicImage
        />
        <CardComponent
          key={serviceSelecTres.idService}
          titleCard={serviceSelecTres.serviceName}
          srcImgCard={serviceSelecTres.serviceImage}
          linkTo={`${serviceSelecTres.idService}`}
          dynamicImage
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
      <SectionComponent
        heightSection="100%"
        titleSection="¿POR QUÉ ELEGIRNOS?"
        colorBackground="#fff"
      >
        <div className="row" style={{ justifyContent: "center" }}>
          <CardComponent
            srcImgCard={reactSvg}
            titleCard={"Técnicos Especializados"}
            descriptionCard={"En cada uno de nuestros servicios."}
            hoverCard={false}
            dividerCard={false}
          />
          <CardComponent
            srcImgCard={reactSvg}
            titleCard={"Multiples Servicios"}
            descriptionCard={
              "Gran variedad de servicios para atender sus necesidades."
            }
            hoverCard={false}
            dividerCard={false}
          />
          <CardComponent
            srcImgCard={reactSvg}
            titleCard={"Herramientas Especializadas"}
            descriptionCard={
              "Contamos con herramientas calificadas y certificadas para cada servicio."
            }
            hoverCard={false}
            dividerCard={false}
          />
          <CardComponent
            srcImgCard={reactSvg}
            titleCard={"Garantía y confianza"}
            descriptionCard={"La certeza de un trabajo bien hecho."}
            hoverCard={false}
            dividerCard={false}
          />
        </div>
      </SectionComponent>
      <SectionComponent colorBackground="#F79F18" heightSection="100%">
        <div
          className="col-5 col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-6"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <p>
            ¿Necesitas que un técnico se encargue de alguna reparación o
            instalación en tu casa u oficina?
          </p>
          <h2>RESPUESTA OPORTUNA A TUS EMERGENCIAS</h2>
        </div>
        <div
          className="col-5 col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-3"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Button
            type="primary"
            shape="round"
            style={{
              background: "#fff",
              color: "#000",
              textDecoration: "none",
            }}
            size="large"
            href="https://api.whatsapp.com/send/?phone=573016264147&text&type=phone_number&app_absent=0"
          >
            <strong>SOLICITAR SERVICIO</strong>
          </Button>
        </div>
      </SectionComponent>
      <SectionComponent colorBackground="#fff" heightSection="100%">
        <StatsComponent />
      </SectionComponent>
      <SectionComponent
        colorBackground="#FFF"
        heightSection="100%"
        titleSection="NUESTROS CLIENTES"
      >
        <div className="row news-wrapper">
          <img src="out" alt="primera imagen" />
          <img src="out" alt="segunda imagen" />
        </div>
      </SectionComponent>
      <FooterComponent />
      <FloatButtonComponent />
    </>
  );
}

export default MainPageView;
