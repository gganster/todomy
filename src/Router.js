import React from "react";
import RRD from "react-router-dom";
import {useAuth} from "./hook";

import {
  LoggedLayout,
  AnonymousLayout
} from "./layout";

import {
  Loading
} from "./page";

const Router = () => {
  const [user, loading] = useAuth();

  if (loading)
    return <Loading />;

  const Layout = AnonymousLayout;

  return (
    <>
      <Layout />
    </>
  )
}

export default Router;