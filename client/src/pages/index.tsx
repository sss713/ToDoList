import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const About = lazy(() => import("./About/About"));
const Registration = lazy(() => import("./Registration"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
