import React, { Component } from "react";

import { Grid, Button } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";

class DashboardPanel extends Component {
  render() {
    console.log(this.props.location);
    // Stlye
    const dashboardLinkStyle = { textDecoration: "none" };

    const dashboardButtonStyle = {
      width: "200px",
      height: "200px",
      justifyContent: "center",
      margin: "10px",
      textAlign: "center",
      textTransform: "none",
      textDecoration: "none",
    };

    return (
      <div>
        <Link to="/students" style={dashboardLinkStyle}>
          <Button variant="contained" color="primary" style={dashboardButtonStyle}>students</Button>
        </Link>
        <Link to="/tutors" style={dashboardLinkStyle}>
          <Button variant="contained" color="secondary" style={dashboardButtonStyle}>tutors</Button>
        </Link>
        <Link to="/courses" style={dashboardLinkStyle}>
          <Button variant="contained" style={dashboardButtonStyle}>courses</Button>
        </Link>
      </div>
    );
  }
}

export function ReturnDashboardPanelButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <Grid container justify="flex-start">
      <Button variant="contained" onClick={handleClick}>Back</Button>
    </Grid>
  );
}

export default DashboardPanel;
