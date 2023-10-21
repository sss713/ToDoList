import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const About = lazy(() => import("./About/About"));
const Registration = lazy(() => import("./Registration"));
const Authorization = lazy(() => import("./Authorization"));
const ToDo = lazy(() => import("./ToDo"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/todo" element={<ToDo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
