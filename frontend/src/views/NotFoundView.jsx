import React from "react";
import { Result, Button, Layout, Row, Col } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";

const NotFoundView = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "100%" }}
      >
        <Col>
          <Result
            status="404"
            title="¡Ups! Parece que te has perdido..."
            subTitle="La página que estás buscando no existe."
            extra={[
              <Link to="/">
                <Button type="primary" key="back">
                  Volver al inicio
                </Button>
              </Link>,
            ]}
            // icon={<FrownOutlined style={{ fontSize: "100px" }} />}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default NotFoundView;
