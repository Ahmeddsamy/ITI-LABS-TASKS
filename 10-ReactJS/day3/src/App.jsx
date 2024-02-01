import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout1 from "./Layouts/Layout1";
import Product from "./components/Product";
import Category from "./components/Category";
import Brand from "./components/Brand";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout2 from "./Layouts/Layout2";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Settings from "./components/Settings";
import AppSettings from "./components/AppSettings";
import ProfileSettings from "./components/ProfileSettings";
import WebSettings from "./components/WebSettings";

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
        element: <Settings />,
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
    element: <Layout2 />,
    children: [
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "about", element: <About /> },
      { path: "contactus", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default class App extends Component {
  render() {
    return <RouterProvider router={routers}></RouterProvider>;
  }
}
