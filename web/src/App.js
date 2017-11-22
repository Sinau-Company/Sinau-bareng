import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Answer from "./pages/Answer";
// import Question from "./pages/Question";
import AskQuestion from "./pages/AskQuestion";
// import ListQuestion from "./pages/ListQuestion";
import Profile from "./pages/Profile";
// import ListProfile from "./pages/ListProfile";

import NotFound from "./pages/NotFound";

import helpers from "./helpers"

const user = helpers.decodeToken();


const App = () => (
  <Router>
    <Switch>
      <Route path="/SignIn" component={SignIn} />
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/Answer" component={Answer} />
      <Route path="/AskQuestion" component={AskQuestion} />
      <Route path="/profile/:id" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default App;
