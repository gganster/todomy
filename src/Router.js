import React from "react";
import RRD from "react-router-dom";
import {useAuth} from "./hook";

const Router = () => {
  const [user, loading] = useAuth();

  return (
    <>
    </>
  )
}

export default Router;