import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./Login.jsx"

import React from "react"
import Dashboard from "./DashboardPage.jsx"

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
])

export default AppRouter