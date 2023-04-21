import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrincipalScreen } from "../pages/PrincipalScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { HomeScreen } from "../pages/HomeScreen";
import { ProtectedRouter } from "../helpers/ProtectedRouter";
import NotFound from "../pages/NotFound";
import { SingleMovie } from "../pages/SingleMovie";
import { WatchPage } from "../pages/WatchPage";

export const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="*" element={<NotFound />} />

      {/* PRIVATE ROUTES */}
      <Route element={<ProtectedRouter />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id" element={<WatchPage />} />
      </Route>
    </Routes>
  );
};
