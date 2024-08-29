import React from "react";
import { Layout } from "antd";
import CardComponent from "../components/CardComponent.jsx";
import "../App.css";
import reactSvg from "../assets/react.svg";

const { Content } = Layout;
const styleRows = {
  display: "flex",
  justifyContent: "center",
  margin: "0 5%",
};

const SectionComponent = ({ heightSection, titleSection }) => {
  return (
    <Layout>
      <Content
        style={{
          height: heightSection,
          margin: "5px 0",
        }}
      >
        <div className="row" style={styleRows}>
          <h2 style={{ textAlign: "center" }}>{titleSection}</h2>
        </div>
        <div className="row" style={styleRows}>
          <CardComponent
            srcImgCard={reactSvg}
            titleCard={"Electricidad"}
            descriptionCard={"Esta es la descripcion de electricidad"}
          />
          <CardComponent
            srcImgCard={reactSvg}
            titleCard={"Electricidad"}
            descriptionCard={"Esta es la descripcion de electricidad"}
          />
        </div>
      </Content>
    </Layout>
  );
};
export default SectionComponent;
