import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ServicesView from "./views/ServicesView.jsx";
import DetailedServiceView from "./views/DetailedServiceView.jsx";
import NotFoundView from "./views/NotFoundView.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/PageWeb/" element={<App />} />
        <Route
          path="/PageWeb/services/:serviceType"
          element={<ServicesView />}
        />
        <Route
          path="/PageWeb/services/:serviceType/:idService"
          loader={({ params }) => {
            params.serviceType;
            params.idService;
          }}
          action={({ params }) => {
            params.serviceType;
            params.idService;
          }}
          element={<DetailedServiceView />}
        />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
