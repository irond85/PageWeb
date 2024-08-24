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
        <a href="/servicios" target="_blank" rel="noopener noreferrer">
          Servicios
        </a>
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
      style={{borderBottom: "1px solid #aaa",}}
    />
  );
};
export default MenuHeaderComponent;
