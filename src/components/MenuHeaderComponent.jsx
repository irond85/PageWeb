import React, { useState } from "react";
import {
  DatabaseOutlined,
  ProductOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link
        to="services"
        style={{ textDecoration: "none" }}
        rel="noopener noreferrer"
      >
        Servicios
      </Link>
    ),
    key: "services",
    icon: <ProductOutlined />,
    children: [
      {
        type: "group",
        label: "Plomeria",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Electricidad",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Historias de clientes",
    key: "history",
    icon: <DatabaseOutlined />,
    disabled: true,
  },
  {
    label: "¿Quienes somos?",
    key: "we",
    icon: <DatabaseOutlined />,
  },
  {
    label: "Contacta con nosotros",
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
