import { Card, Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { imagesServices } from "../utils/images.jsx";

const styleColumns = { marginTop: "1%" };
const styleContain = { width: "100%", height: "100%", objectFit: "contain" };

const CardComponent = ({
  srcImgCard,
  titleCard,
  descriptionCard,
  hoverCard = true,
  dividerCard = true,
  colsFormat = true,
  linkTo = "",
  dynamicImage = false,
}) => {
  const altImg = "image" + titleCard;
  const className = colsFormat
    ? "col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 col-xxl-3"
    : "";

  const getImage = dynamicImage ? imagesServices.get(srcImgCard) : srcImgCard;

  return (
    <>
      <div style={styleColumns} className={className}>
        <Link to={linkTo} style={{ textDecoration: "none" }}>
          <Card
            hoverable={hoverCard}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              textAlign: "center",
              padding: "5px",
            }}
          >
            <div style={{ height: "250px" }}>
              <img style={styleContain} alt={altImg} src={getImage} />
            </div>
            <div>{dividerCard && <Divider />}</div>

            <h4>{titleCard}</h4>
            <p>{descriptionCard}</p>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default CardComponent;
