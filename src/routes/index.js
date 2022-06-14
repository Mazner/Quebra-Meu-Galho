import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Sobre, Cadastro, BuscarServico } from "../pages";
import { HOME, SOBRE, CADASTRO, BUSCARSERVICO } from "./routes";

export function AppRoutes () {
  const location = useLocation();

  if (location.pathname === "/") return <Navigate to={HOME} />;

  return (
    <Routes>
      {/* <Route exact path={HOME} element={<Home />} /> */}
      <Route path={HOME} element={<Home />} />
      <Route path={SOBRE} element={<Sobre />} />
      <Route path={CADASTRO} element={<Cadastro />} />
      <Route path={BUSCARSERVICO} element={<BuscarServico />} />
    </Routes>
  );
};
