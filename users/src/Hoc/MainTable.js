import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
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

function Users({ data, ...props }) {
  const history = useHistory();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

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

    bg: {
      color: "blue",
    },
    cursor: {
      cursor: "pointer",
    },
    avatar: {
      borderRadius: "50%",
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
            console.log(data);
            return (
              <StyledTableRow
                key={user.id}
                onClick={() => {
                  history.push(`/${user.id}`);
                }}
                className={classes.cursor}
              >
                <StyledTableCell align="right">
                  <img src={user.avatar} className={classes.avatar} />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.firstname}
                </StyledTableCell>

                <StyledTableCell align="right">{user.lastname}</StyledTableCell>
              </StyledTableRow>
            );
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
