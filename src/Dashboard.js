import React, { Component } from "react";

import { Grid, Button } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Students from "./Students";
import Tutors from "./Tutors";
import Courses from "./Courses";
import  DashboardPanel from "./DashboardPanel";

class Dashboard extends Component {
  render() {
    console.log("i render");
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <h1>Dashboard</h1>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Router>
              <Switch>
                <Route exact path="/" component= { DashboardPanel } />
                <Route path="/students" component={Students} />
                <Route path="/tutors" component={Tutors} />
                <Route path="/courses" component={Courses} />
              </Switch>
            </Router>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
