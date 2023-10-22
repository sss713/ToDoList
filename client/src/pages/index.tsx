import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const About = lazy(() => import("./About/About"));
const Login = lazy(() => import("./Login"));
const ToDo = lazy(() => import("./ToDo"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<ToDo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
