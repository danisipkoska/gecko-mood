import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./View/Home";
import { Test } from "./View/Test";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/test" component={Test} />
    </Switch>
  </BrowserRouter>
);
