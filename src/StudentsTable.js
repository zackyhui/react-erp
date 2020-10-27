import React from "react";

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

import { Link } from "react-router-dom";
import StudentEdit from "./StudentEdit";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function StudentsTable(props) {
  const columns = [
    { id: "sid", label: "SID", align: "center" },
    { id: "name", label: "Name", align: "center" },
    { id: "age", label: "Age", align: "center" },
    { id: "class", label: "Class", align: "center" },
  ];

  const [rows, updateRows] = React.useState([]);
  const [totalRows, updateTotalRows] = React.useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(0);
 

  React.useEffect(() => {
    fetch("http://laravel-erp/api/students?page="+(page+1))
      .then((response) => response.json())
      .then((
        { 
          data: rows,
          links: links,
          per_page: rowsPerPage,
          total: totalRows,

        }) => {
        updateRows(rows);
        setRowsPerPage(rowsPerPage);
        updateTotalRows(totalRows);
        console.log(rows);
      });
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (rows == 0) {
    return (
      <h1> isLoading </h1>
    )
  } 
  else {
    return (
      <>
        <h1>Students</h1>
        <ReturnDashboardPanelButton />
        <Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows
                  
                  .map((row) => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.age}</TableCell>
                        <TableCell align="center">{row.class}</TableCell>
                        <TableCell align="center">
                          <Link
                            to="/student-edit"
                            style={{ textDecoration: "none" }}
                          >
                            <Button>
                              <EditIcon color="disabled" />
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20]}
            component="div"
            count={20}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </>
    ) 
}              
}
