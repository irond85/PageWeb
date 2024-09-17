import React from "react";
import { Layout, Col } from "antd";
import "../App.css";
import MenuHeaderComponent from "./MenuHeaderComponent";
import { HomeOutlined } from "@ant-design/icons";

const { Header } = Layout;
const nameItems = ["Servicios", "Nuestros trabajos", "Contacto"];
const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: nameItems[index],
}));
const HeaderComponent = () => {
  return (
    <Layout
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10, //esta propiedad permite colocar en el top el header
      }}
    >
      <Header
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: 0,
          backgroundColor: "white",
          borderBottom: "1px solid #aaa",
          height: "6rem",
        }}
      >
        <div className="divLogo">
          <img
            className="logo"
            src="https://unavatar.io/irond85"
            alt="Logo pagina web"
          />
        </div>
        <Col span={12} style={{ marginRight: "20%" }}>
          <MenuHeaderComponent />
        </Col>
        <div>
          <a href="/">
            <HomeOutlined style={{ fontSize: "2rem", color: "#08c" }} />
          </a>
        </div>
      </Header>
    </Layout>
  );
};
export default HeaderComponent;
