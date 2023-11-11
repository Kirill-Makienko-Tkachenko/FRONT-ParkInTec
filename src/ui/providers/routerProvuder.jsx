import AppRouter from "../Pages/router.tsx";
import { RouterProvider } from "react-router-dom";

const AppRouterProvider = () => {
  return (
    <RouterProvider router={AppRouter} />
  );
};

export default AppRouterProvider;