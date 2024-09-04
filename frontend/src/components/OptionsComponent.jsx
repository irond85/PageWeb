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
        <Card hoverable style={styleCard}>
          <WhatsAppOutlined style={styleButtons} />
          <p>Chat virtual</p>
        </Card>
      </div>
      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3">
        <Card hoverable style={styleCard}>
          <PhoneOutlined style={styleButtons} />
          <p>Línea telefónica</p>
        </Card>
      </div>
      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3">
        <Card hoverable style={styleCard}>
          <div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <InstagramOutlined style={styleButtons} />
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <FacebookOutlined style={styleButtons} />
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
