import React, { useEffect, useState, useRef } from "react";
import Loading from "./Loading";

import "../App.css";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MyTable from "../components/MyTable";

function Users({ data, ...props }) {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    tableContainer: {
      width: "50%",
      margin: "auto",
    },
    head: {
      backgroundColor: "blue",
    },
  });
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.head}>
          <TableRow>
            <StyledTableCell align="right">photo</StyledTableCell>
            <StyledTableCell align="right">first name</StyledTableCell>
            <StyledTableCell align="right">last name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => {
            return <MyTable id={user.id} key={user.id}></MyTable>;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Loading(
  Users,
  "https://60bf8aba97295a0017c432ab.mockapi.io/users"
);
