import React from "react";
import { Index } from "./routes/Index";
import ToastContainer from "../src/components/Notifications/ToastContainter";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Index />
    </>
  );
};

export default App;
