// Home.js

import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import SideBar from "./Home/components/SideBar";

function Home() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <SideBar />
      <div>
        <Switch>
          <Route exact path={path}>
            <h2>Welcome to Home Page</h2>
          </Route>
          <Route path={`${path}/dashboard`} component={Dashboard} />
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/settings`} component={Settings} />
        </Switch>
      </div>
    </div>
  );
}

export default Home;
