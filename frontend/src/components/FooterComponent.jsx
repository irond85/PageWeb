import React from "react";
import { Layout, Row, Typography, Space } from "antd";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const styleText = { color: "#666", fontSize: "16px", textDecoration: "none" };

const FooterComponent = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgrounddivor: "#f0f2f5",
        padding: "20px 0",
        backgroundColor: "#C7C7C7",
      }}
    >
      <Row>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Title level={2} style={{ color: "#666" }}>
            Síguenos
          </Title>
          <Space size="middle" style={styleText}>
            <FacebookFilled />
            <TwitterSquareFilled />
            <InstagramFilled />
            <LinkedinFilled />
          </Space>
        </div>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Title level={2} style={{ color: "#666" }}>
            Contáctanos
          </Title>
          <Paragraph style={styleText}>
            Escríbenos:{" "}
            <a
              href="mailto:hola@sosasistencia.com"
              style={{ color: "#1890ff" }}
            >
              hola@correo.com
            </a>
            <br />
            Colombia: +57 300 912 4554 | +57 317 659 5965
          </Paragraph>
        </div>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Title level={2} style={{ color: "#666" }}>
            Información
          </Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="#" style={styleText}>
                Políticas de privacidad
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Title level={2} style={{ color: "#666" }}>
            Servicios
          </Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="#" style={styleText}>
                Plomería
              </a>
            </li>
            <li>
              <a href="#" style={styleText}>
                Electricidad
              </a>
            </li>
            <li>
              <a href="#" style={styleText}>
                Instalaciones
              </a>
            </li>
          </ul>
        </div>
      </Row>
      <div style={{ marginTop: 16 }}>
        <Paragraph style={{ color: "#fff", fontSize: "16px" }}>
          Plomeros y Constructores, 2024. Todos los derechos reservados.
        </Paragraph>
      </div>
    </Footer>
  );
};

export default FooterComponent;