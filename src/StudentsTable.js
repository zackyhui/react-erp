import React, { useState, useEffect } from "react";

import { CircularProgress, Button } from "@material-ui/core";
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

import ReturnButton from "./ReturnButton";

import axios from "axios";

export default function StudentsTable() {
  const columns = [
    { id: "sid", label: "SID", align: "center" },
    { id: "name", label: "Name", align: "center" },
    { id: "age", label: "Age", align: "center" },
    { id: "class", label: "Class", align: "center" },
  ];

  const [rows, updateRows] = useState([]);
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalRows, setTotalRows] = useState(0);

  const [isLoading, setIsLoading] = useState(true);


  //console.log(typeof rowsPerPage, rowsPerPage, 1);
  console.log(page, 1);
  /*
  useEffect(() => {
    setIsLoading(true);
    fetch("http://laravel-erp/api/students/size/" + rowsPerPage + "?page=" + (page + 1))
      .then((response) => response.json())
      .then(
        ({
          data: rows,
          meta,
        }) => {

          // Get students data
          updateRows(rows);
          
          // Get rows per page
          const rowsPerPage = meta.per_page;
          setRowsPerPage(rowsPerPage);

          // Get total rows
          const totalRows = meta.total;
          setTotalRows(totalRows);
         
          // Set Timeout for loading
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);

        }
      );
  }, [page, rowsPerPage]);
*/

useEffect(() => {
  setIsLoading(true);
  axios({
    method: 'GET',
    url: "http://laravel-erp/api/students/size/" + rowsPerPage,
    params: {
      page: (page + 1)
    }
  })
  .then((response) => {
              
              // Assign data in response as api & Get students data
              const api = response.data;
              console.log(api);

              const rows = api.data;
              updateRows(rows);
        
              // Get rows per page
              const rowsPerPage = api.meta.per_page;
              setRowsPerPage(rowsPerPage);
      
              // Get total rows
              const totalRows = api.meta.total;
              setTotalRows(totalRows);
             
              // Set Timeout for loading
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <>
      <h1>Students</h1>
      <ReturnButton location="/" />
      {isLoading ? (
        <CircularProgress/>
      ) : (
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

              <TableBody >
                {rows.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.age}</TableCell>
                      <TableCell align="center">{row.class}</TableCell>
                      <TableCell align="center">
                        <Link
                          to={"/studentedit/" + row.id}
                          style={{ textDecoration: "none" }}
                        >
                          <Button id={row.id}>
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
            count={totalRows}
            rowsPerPage={Number(rowsPerPage)}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
