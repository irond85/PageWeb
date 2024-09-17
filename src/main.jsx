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
        <Route path="/" element={<App />} />
        <Route path="services/:serviceType" element={<ServicesView />} />
        <Route
          path="services/:serviceType/:idService"
          loader={({ params }) => {
            params.serviceType; // abc
            params.idService; // 3
          }}
          // and actions
          action={({ params }) => {
            params.serviceType; // abc
            params.idService; // 3
          }}
          element={<DetailedServiceView />}
        />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
