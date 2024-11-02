import React from "react";
import { Card, Statistic } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const styleRow = { justifyContent: "center" };

const StatsComponent = () => {
  return (
    <div
      className="row"
      style={{ justifyContent: "center", textAlign: "center" }}
    >
      <h2>¡Vive, nosotros nos encargamos!</h2>
      <p>Miles de personas ya han confiado en nosotros, ¡únete a ellos!</p>

      <div className="row" style={styleRow}>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Card>
            <Statistic title="Total de servicios prestados" value={1759} />
          </Card>
        </div>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Card>
            <Statistic title="Servicios prestados este año" value={431} />
          </Card>
        </div>
      </div>
      <div className="row" style={styleRow}>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Card>
            <Statistic title="Servicios del mes anterior" value={53} />
          </Card>
        </div>
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
          <Card>
            <Statistic
              prefix={<LikeOutlined />}
              title="Porcentaje de satisfacción"
              value={99.2}
              suffix="%"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
