import React from "react";
import RRD from "react-router-dom";
import {useAuth} from "./hook";
import {useUser} from "./context";

import {
  LoggedLayout,
  AnonymousLayout
} from "./layout";

import {
  Loading
} from "./page";

const Router = () => {
  const [user, loading] = useAuth();
  const [usr] = useUser();
  const Layout = user && !user.isAnonymous ? LoggedLayout : AnonymousLayout;

  if (loading)
    return <Loading />;

  return (
    <>
      <Layout />
    </>
  )
}

export default Router;