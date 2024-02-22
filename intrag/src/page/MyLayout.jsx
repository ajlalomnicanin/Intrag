import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const MyLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* {footer} */}
    </>
  );
};
