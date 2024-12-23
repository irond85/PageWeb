import React from "react";
import { Layout, Col } from "antd";
import "../App.css";
import MenuHeaderComponent from "./MenuHeaderComponent";
import { HomeOutlined } from "@ant-design/icons";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img
              className="logo"
              src={logo}
              alt="Logo plomeros y constructores sas"
            />
          </Link>
        </div>
        <Col span={12} style={{ marginRight: "20%" }}>
          <MenuHeaderComponent />
        </Col>
        <div>
          <Link to="/">
            <HomeOutlined style={{ fontSize: "2rem", color: "#08c" }} />
          </Link>
        </div>
      </Header>
    </Layout>
  );
};
export default HeaderComponent;
