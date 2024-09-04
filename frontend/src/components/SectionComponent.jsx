import { React, children } from "react";
import { Layout, Typography } from "antd";
const { Title, Paragraph } = Typography;
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
          width: "100%",
          height: heightSection,
          margin: "35px 0",
        }}
      >
        <div className="row" style={styleRows}>
          <Title level={1} style={{ color: "#666", textAlign: "center" }}>
            {titleSection}
          </Title>
          {children}
        </div>
      </Content>
    </Layout>
  );
};
export default SectionComponent;
