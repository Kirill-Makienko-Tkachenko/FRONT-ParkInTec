import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import Dashboard from "./DashboardPage.jsx";
import { Box } from "@chakra-ui/react";
import Splash from "./Splash.jsx";
import RegisterPage from "./RegisterPage.jsx";

function DummyPage() { // Para nada copie esta idea de la chamba, obviamente lo hice yo mismo
  return (
    <Box bg="brand.50" width="100vw" height="100vh" display="flex" alignItems="center" justifyContent="center">
      Pagina placeholder 
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/PH6jE5W_vAg?si=tD6XFC5ZN7uE6Khu&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Box>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/aboutus",
    element: <DummyPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/help",
    element: <DummyPage />,
  },
]);

export default AppRouter;
