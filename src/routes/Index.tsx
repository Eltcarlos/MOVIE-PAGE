import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrincipalScreen } from "../pages/PrincipalScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { HomeScreen } from "../pages/HomeScreen";

export const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
    </Routes>
  );
};
