import { Image, Row, Typography } from "antd";
import { imagesClients } from "../utils/images.jsx";
const { c_2p, c_camse, c_ie, c_ja, c_lc, c_lfh, c_vt } = imagesClients;

const ClientsComponent = () => {
  const styleRows = { justifyContent: "center", margin: "0 5%" };

  return (
    <>
      <div className="row news-wrapper">
        <Image width={"65%"} src={c_2p} alt="cliente 2p" />
        <Image width={"65%"} src={c_camse} alt="cliente camse" />
        <Image width={"66%"} src={c_ie} alt="cliente ie" />
        <Image width={"65%"} src={c_ja} alt="cliente ja" />
        <Image width={"65%"} src={c_lc} alt="cliente lc" />
        <Image width={"65%"} src={c_lfh} alt="cliente lfh" />
        <Image width={"65%"} src={c_vt} alt="cliente vt" />
      </div>
    </>
  );
};

export default ClientsComponent;
