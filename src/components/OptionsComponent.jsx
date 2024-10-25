import React from "react";
import { Row, Card } from "antd";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const styleCard = {
  height: "100%",
  width: "100%",
  padding: "0",
  placeContent: "center",
  textAlign: "center",
};

const styleButtons = { fontSize: "48px", color: "gray" };

const OptionsComponent = () => {
  return (
    <Row>
      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3">
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=573016264147&text&type=phone_number&app_absent=0"
        >
          <Card hoverable style={styleCard}>
            <WhatsAppOutlined style={styleButtons} />
            <p>Chat virtual</p>
          </Card>
        </a>
      </div>
      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3">
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=573016264147&text&type=phone_number&app_absent=0"
        >
          <Card hoverable style={styleCard}>
            <PhoneOutlined style={styleButtons} />
            <p>Línea telefónica</p>
          </Card>
        </a>
      </div>
      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3">
        <Card hoverable style={styleCard}>
          <div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href="https://www.instagram.com/plomerosyconstructores7/?igsh=c2RxZ3p4Ymt3aWxk"
                >
                  <InstagramOutlined style={styleButtons} />
                </a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61565573373718&mibextid=ZbWKwL"
                >
                  <FacebookOutlined style={styleButtons} />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <YoutubeOutlined style={styleButtons} />
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <TwitterOutlined style={styleButtons} />
              </div>
            </div>
          </div>
          <p>Redes sociales</p>
        </Card>
      </div>
    </Row>
  );
};

export default OptionsComponent;
