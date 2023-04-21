import React from "react";
import { NavBar } from "./Navbar/NavBar";
import { Footer } from "./Footer/Footer";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="bg-main text-white">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
