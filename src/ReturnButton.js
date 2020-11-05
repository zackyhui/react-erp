import React from "react";

import { Grid, Button } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

 export default function ReturnButton(props) {
  let history = useHistory();

  function handleClick() {
    console.log("back to: " + props.location);
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