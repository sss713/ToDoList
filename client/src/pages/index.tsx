import { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

const About = lazy(() => import("./About/About"));
const Login = lazy(() => import("./Login"));
const ToDo = lazy(() => import("./ToDo"));

export const Routing = () => {
  const isAuth = useSelector((state: any) => state.user.isAuth);

  return (
    <Routes>
      <Route path="/" element={<About />} />
      {!isAuth && <Route path="/login" element={<Login />} />}
      <Route path="/todo" element={<ToDo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
