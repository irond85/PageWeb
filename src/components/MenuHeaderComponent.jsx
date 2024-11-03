import React, { useState } from "react";
import {
  DatabaseOutlined,
  ProductOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: (
      <a href="#services" style={{ textDecoration: "none" }}>
        Servicios
      </a>
    ),
    key: "services",
    icon: <ProductOutlined />,
  },
  {
    label: (
      <a href="#contacto" style={{ textDecoration: "none" }}>
        Contacta con nosotros
      </a>
    ),
    key: "contact",
    icon: <InfoCircleOutlined />,
  },
];

const MenuHeaderComponent = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ borderBottom: "none", fontSize: "1rem" }}
    />
  );
};
export default MenuHeaderComponent;
