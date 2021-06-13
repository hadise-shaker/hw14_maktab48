import React,{useState,useEffect} from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router';

import { withStyles, makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyTable = ({id}) => {
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
        bg:{
          color: "blue"
        },
        cursor:{
          cursor: "pointer",
        }
        
      });
      const classes = useStyles();
         const [data, setData] = useState([]);
  const getData = async () => {
    const datasFromServer = await fetchData();
    setData(datasFromServer);
  };
  useEffect(() => {
    getData();
  }, []);
  const fetchData = async () => {
    try{   
       const response = await fetch(
      `https://60bf8aba97295a0017c432ab.mockapi.io/users/${id}`
  );
  console.log(response);
 
  const data = await response.json();
 
  toast.success("suspsk")
  return data;
}catch(err){

toast.error("error")
}

  };
    return (


             <StyledTableRow id={id} onClick={()=> {history.push(`/${id}`)}} className={classes.cursor} >

                <StyledTableCell align="right">
                  <img src={data.avatar} className="avatar" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data.firstname}
                </StyledTableCell>

                <StyledTableCell align="right">{data.lastname}</StyledTableCell>
              </StyledTableRow>


    )
}

export default MyTable
