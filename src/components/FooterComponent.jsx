import React from "react";
import { Layout, Row, Typography, Space } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61565573373718&mibextid=ZbWKwL"
            >
              <FacebookFilled />
            </a>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="https://www.instagram.com/plomerosyconstructores7/?igsh=c2RxZ3p4Ymt3aWxk"
            >
              <InstagramFilled />
            </a>
          </Space>
        </div>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Title level={2} style={{ color: "#666" }}>
            Contáctanos
          </Title>
          <Paragraph style={styleText}>
            Escríbenos:{" "}
            <a
              href="mailto:plomerosyconstructoressas@gmail.com"
              style={{ color: "#666" }}
            >
              plomerosyconstructoressas@gmail.com
            </a>
            <br />
            Colombia +57: 310 626 41 47 - 320 717 28 87
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
          <div
            className="row"
            style={{
              margin: "0",
              color: "#666",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-6">
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li>
                  <Link
                    to="/services/plomeria"
                    style={{ textDecoration: "none", color: "#666" }}
                  >
                    Plomería
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/electricidad"
                    style={{ textDecoration: "none", color: "#666" }}
                  >
                    Electricidad
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/obras"
                    style={{ textDecoration: "none", color: "#666" }}
                  >
                    Obras y Reformas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/gases"
                    style={{ textDecoration: "none", color: "#666" }}
                  >
                    Gas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-6">
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Link
                    to="/services/instalaciones"
                    style={{ textDecoration: "none", color: "#666" }}
                  >
                    Instalaciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/pintura"
                    style={{ textDecoration: "none", color: "#666" }}
                  >
                    Pintura
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/soldadura"
                    style={{ textDecoration: "none", color: "#666" }}
                  >
                    Soldadura
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/vidrieria"
                    style={{ textDecoration: "none", color: "#666" }}
                  >
                    Vidrieria
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
