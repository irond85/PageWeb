import React from "react";
import { Carousel } from "antd";
import "../styles/Components.css";

const contentStyle = {
  margin: 0,
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselComponent = () => (
  <>
    <Carousel style={{height: "500px"}} arrows autoplay autoplaySpeed={8000}>
      <div>
        <div style={contentStyle}>
          <img src="" alt="Primera imagen" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="" alt="Segunda imagen" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="" alt="Tercera imagen" />
        </div>
      </div>
    </Carousel>
  </>
);
export default CarouselComponent;
