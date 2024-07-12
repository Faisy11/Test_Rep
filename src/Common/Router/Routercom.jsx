import React from "react";
import { Path } from "./Router";
import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/LOgin";
import Home from "../../Pages/Home/Home";

export const Routercom = () => {
  const router = [
    {
      Path: Path.Index,
      Component: Login,
    },
    {
      Path: Path.home,
      Component: Home,
    },
  ];
  return (
    <>
      <Routes>
        {router.map(({ Path, Component }, i) => (
          <Route path={Path} key={i} Component={Component} />
        ))}
      </Routes>
    </>
  );
};
