import React from "react";
import { Card, Divider } from "antd";
const { Meta } = Card;

const styleColumns = { marginTop: "1%" };
const styleContain = { width: "100%", height: "100%", objectFit: "contain" };

const CardComponent = ({ srcImgCard, titleCard, descriptionCard }) => {
  const altImg = "image" + titleCard;

  return (
    <>
      <div
        style={styleColumns}
        className="col-5 col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-3"
      >
        <Card
          hoverable
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        >
          <img style={styleContain} alt={altImg} src={srcImgCard} />
          <Divider />
          <a href="" style={{ textDecoration: "none" }}>
            <Meta title={titleCard} description={descriptionCard} />
          </a>
        </Card>
      </div>
    </>
  );
};

export default CardComponent;
