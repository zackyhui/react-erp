import React from "react";

import { Grid, Button } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function DashboardPanel() {
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
    <>
      <h1>Dashboard Panel</h1>
      <Link to="/students" style={dashboardLinkStyle}>
        <Button
          variant="contained"
          color="primary"
          style={dashboardButtonStyle}
        >
          students
        </Button>
      </Link>
      <Link to="/tutors" style={dashboardLinkStyle}>
        <Button
          variant="contained"
          color="secondary"
          style={dashboardButtonStyle}
        >
          tutors
        </Button>
      </Link>
      <Link to="/courses" style={dashboardLinkStyle}>
        <Button variant="contained" style={dashboardButtonStyle}>
          courses
        </Button>
      </Link>
    </>
  )
}


export function ReturnDashboardPanelButton(props) {
  let history = useHistory();

  function handleClick() {
    console.log(props.location);
    history.push({
      pathname: props.location,
    });
  }

  return (
    <Grid container justify="flex-start">
      <Button onClick={handleClick}>
        <ArrowBackIcon color="disabled" style={{ margin: "5px" }} />
      </Button>
    </Grid>
  )
}
