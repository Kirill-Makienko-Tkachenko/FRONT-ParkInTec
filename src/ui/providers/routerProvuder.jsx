import AppRouter from "../Pages/router.jsx";
import { RouterProvider } from "react-router-dom";

const AppRouterProvider = () => {
  return (
    <RouterProvider router={AppRouter} />
  );
};

export default AppRouterProvider;