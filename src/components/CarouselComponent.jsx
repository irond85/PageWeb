import React from "react";
import { Carousel } from "antd";
import "../styles/Components.css";
import images from "../utils/images.jsx";

const { banner1 } = images;

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
    <Carousel style={{ height: "500px" }} arrows autoplaySpeed={8000}>
      <div>
        <div style={contentStyle}>
          <img
            src={banner1}
            alt="Primera imagen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 75%",
            }}
          />
          <h1 style={{ transform: "translate(0%, -150%)"  }}>MENSAJEEEE</h1>
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
