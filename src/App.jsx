import { RouterProvider } from "react-router-dom";
import AppRouter from "./ui/Pages/router.jsx"; // The path to your AppRouter file

function App() {
  return (
    <RouterProvider router={AppRouter} />
  );
}

export default App;