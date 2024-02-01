import React from "react";

import { Outlet } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import Footer2 from "../components/Footer2";

export default function Layout2() {
  return (
    <>
      <NavBar2 />
      <Outlet />
      <Footer2 />
    </>
  );
}
