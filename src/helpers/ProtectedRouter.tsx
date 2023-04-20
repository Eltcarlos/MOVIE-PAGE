import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { state } from "../interfaces/state";
// public protection

const ProtectedRouter = () => {
  const { status } = useSelector((state: state) => state.authState);

  return status === "authenticated" ? <Outlet /> : <Navigate to="/login" />;
};

// admin router protection

// const AdminProtectedRouter = () => {
//   const {userInfo} = useSelector((state)=> state.userLogin)

// return userInfo?.token ? (
//   userInfo?.isAdmin ? (
// <Outlet/>
// ) : (
//  <Navigate to='/*' />
// )
// ) : (
//  <Navigate to='/login' />
// );
// }

export { ProtectedRouter };
