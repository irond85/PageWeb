import React from "react";
import { Button, Tooltip } from "antd";
import whatsappIcon from "../assets/whatsappIcon.png";

const FloatButtonComponent = () => {
  return (
    <>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Tooltip title="Escribenos a nuestro Whatsapp!" placement="left">
          <Button
            style={{ width: "72px", height: "72px" }}
            type="text"
            shape="circle"
            href="https://api.whatsapp.com/send/?phone=573016264147&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={whatsappIcon}
              alt="whatsapp icon"
            />
          </Button>
        </Tooltip>
      </div>
      {/* <FloatButton
        style={{ width: "32px", height: "32px" }}
        icon={<WhatsAppOutlined />}
        href="https://api.whatsapp.com/send/?phone=573016264147&text&type=phone_number&app_absent=0"
        target="_blank"
        tooltip={<div>Escribenos a nuestro Whatsapp!</div>}
      /> */}
    </>
  );
};

export default FloatButtonComponent;
