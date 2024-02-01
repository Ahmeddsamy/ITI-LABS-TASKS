import { Component, useContext, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout1 from "./Layouts/Layout1";
import Product from "./components/Product";
import Category from "./components/Category";
import Brand from "./components/Brand";
import About from "./components/About";
import Contact from "./components/Contact";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Settings from "./components/Settings";
import AppSettings from "./components/AppSettings";
import ProfileSettings from "./components/ProfileSettings";
import WebSettings from "./components/WebSettings";
import { tokenContext } from "./context/tokenContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicOnlyRoute from "./components/PublicRoutes";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout1 />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "category", element: <Category /> },
      { path: "brand", element: <Brand /> },
      { path: "about", element: <About /> },
      { path: "contactus", element: <Contact /> },
      {
        path: "settings",
        element: (
          <ProtectedRoutes>
            {" "}
            <Settings />
          </ProtectedRoutes>
        ),
        children: [
          { path: "appsettings", element: <AppSettings /> },
          { path: "profilesettings", element: <ProfileSettings /> },
          { path: "websettings", element: <WebSettings /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "auth",
    element: <Layout1 />,
    children: [
      {
        path: "login",
        element: (
          <PublicOnlyRoute>
            <Login />
          </PublicOnlyRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicOnlyRoute>
            <Signup />
          </PublicOnlyRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  let { setToken } = useContext(tokenContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  return <RouterProvider router={routers}></RouterProvider>;
}
