import { React, children } from "react";
import { Layout } from "antd";
import "../App.css";

const { Content } = Layout;
const styleRows = {
  display: "flex",
  justifyContent: "center",
  margin: "0 5%",
};

const SectionComponent = ({
  children,
  colorBackground = "#f5f5f5",
  heightSection,
  titleSection,
}) => {
  return (
    <Layout style={{ background: colorBackground }}>
      <Content
        style={{
          height: heightSection,
          margin: "55px 0",
        }}
      >
        <div className="row" style={styleRows}>
          <h1 style={{ textAlign: "center" }}>{titleSection}</h1>
          {children}
        </div>
      </Content>
    </Layout>
  );
};
export default SectionComponent;
