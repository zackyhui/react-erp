import React, { Component } from "react";

import { ReturnDashboardPanelButton } from "./DashboardPanel";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      source: "initialize from constructor",
    };
  }
  componentDidMount() {
    fetch("http://laravel-erp/api/students")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.data,
          source: "call success from api",
        });
        console.table(json.data);
      });
  }

  render() {
    var { isLoaded, items, source } = this.state;

    if (!isLoaded) {
      console.log({ isLoaded, source });
      console.log({ items });
      return <div> Loading...</div>;
    } else {
      console.log({ isLoaded, source });
      console.log({ items });
      return (
        <div>
          <ReturnDashboardPanelButton />
          <h2>Students</h2>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">SID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Age</TableCell>
                  <TableCell align="center">Class</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{item.id}</TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.age}</TableCell>
                    <TableCell align="center">{item.class}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  }
}

export default Students;
