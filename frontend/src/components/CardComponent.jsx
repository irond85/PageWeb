import React from "react";
import { Card, Divider } from "antd";

const styleColumns = { marginTop: "1%" };
const styleContain = { width: "100%", height: "100%", objectFit: "contain" };

const CardComponent = ({
  srcImgCard,
  titleCard,
  descriptionCard,
  hoverCard = true,
  dividerCard = true,
  colsFormat = true,
}) => {
  const altImg = "image" + titleCard;
  const className = colsFormat
    ? "col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-3"
    : "";

  return (
    <>
      <div style={styleColumns} className={className}>
        <a href="" style={{ textDecoration: "none" }}>
          <Card
            hoverable={hoverCard}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              textAlign: "center",
            }}
          >
            <img style={styleContain} alt={altImg} src={srcImgCard} />
            <div>{dividerCard && <Divider />}</div>

            <h4>{titleCard}</h4>
            <p>{descriptionCard}</p>
          </Card>
        </a>
      </div>
    </>
  );
};

export default CardComponent;
