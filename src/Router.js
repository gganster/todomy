import React from "react";
import {useAuth} from "./hook";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  LoggedLayout,
  AnonymousLayout
} from "./layout";

import {
  Loading,
  Home,
  Register,
  Login,
  Profile
} from "./page";

const AppRouter = () => {
  const [user, loading] = useAuth();
  const Layout = user && !user.isAnonymous ? LoggedLayout : AnonymousLayout;

  if (loading)
    return <Loading />;

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/register"><Register /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/profile"><Profile /></Route>
          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default AppRouter;