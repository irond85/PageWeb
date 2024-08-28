import HeaderComponent from "../components/HeaderComponent.jsx";
import CarouselComponent from "../components/CarouselComponent.jsx";
import { Typography } from "antd";
import ServicesView from "./ServicesView.jsx";
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

      <FloatButtonComponent />
    </>
  );
}

export default MainPageView;
