import React, { Component } from "react";

import DashboardPanel, { ReturnDashboardPanelButton } from "./DashboardPanel";

import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Students from "./Students";


class StudentEdit extends Component {
  render() {
    return (
      <>
        <StudentEditForm/>

      </>
    );
  }
}

function StudentEditForm () {
  return (
    <h1>Student Edit</h1>
  );
}

export default StudentEdit;