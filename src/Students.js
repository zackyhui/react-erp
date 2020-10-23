import React from "react";

import DashboardPanel from "./DashboardPanel";

import StudentsTable from "./StudentsTable"

import StudentEdit from "./StudentEdit";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Students() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <DashboardPanel/>} />
          <Route exact path="/students" component={() => <StudentsTable />} />
          <Route path="/student-edit" component={StudentEdit} />
        </Switch>
      </Router>
    </>
  );
}
