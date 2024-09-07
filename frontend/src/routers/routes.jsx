import App from "../App";
import NotFoundView from "../views/NotFoundView.jsx";
import ServicesView from "../views/ServicesView.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundView />,
  },
  {
    path: "services/:serviceType",
    element: <ServicesView />,
  },
  {
    path: "services",
    element: <ServicesView />,
  },
];

export default routes;
