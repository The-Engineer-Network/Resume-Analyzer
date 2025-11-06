import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import { ProtectedRoute } from "./protected-routes";
import Dashboard from "../pages/dashboard";
import History from "../pages/history";
import Settings from "../pages/settings";
import Profile from "../pages/profile";
import Login from "../pages/login";
import AppLayout from "../components/app-layout";
import Signup from "../pages/signup";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          { path: "/history", element: <History /> },
          { path: "/settings", element: <Settings /> },
          { path: "/profile", element: <Profile /> },
        ],
      },
    ],
  },

  { path: "*", element: <div>404 – Page not found</div> },
]);

export default router;
