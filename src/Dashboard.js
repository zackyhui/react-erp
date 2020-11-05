import React from "react";

import { Grid } from "@material-ui/core";



import Router from "./Router";


export default function Dashboard() {
    console.log("i render");
    return (
        <>
        <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6}>
            <Router/>
            </Grid>
            <Grid item xs={3} />
        </Grid>
        </>
    )
}
