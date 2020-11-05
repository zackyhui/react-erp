import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DashboardPanel from "./DashboardPanel";

import StudentsTable from "./StudentsTable"
import StudentEdit from "./StudentEdit";

import Tutors from "./Tutors";

import Courses from "./Courses";

// All page routing in url depends on here 
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPanel} />
        <Route exact path="/students" component={() => <StudentsTable />} />
        <Route path="/tutors" component={Tutors} />
        <Route path="/courses" component={Courses} />
        <Route
          exact
          path="/studentedit/:sid"
          component={(props) => <StudentEdit sid={props.match.params.sid} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
