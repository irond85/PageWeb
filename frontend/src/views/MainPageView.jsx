import { Typography } from "antd";
import ServicesView from "./ServicesView.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import CarouselComponent from "../components/CarouselComponent.jsx";
import SectionComponent from "../components/SectionComponent.jsx";
import FloatButtonComponent from "../components/FloatButtonComponent.jsx";
const { Title } = Typography;

function MainPageView() {
  return (
    <>
      <HeaderComponent />
      <CarouselComponent />
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
          Servicios
        </Title>
        <ServicesView />
      </div>
      <br />
      <SectionComponent heightSection='450px' titleSection='Servicios Destacados'/>
      <FloatButtonComponent />
    </>
  );
}

export default MainPageView;
