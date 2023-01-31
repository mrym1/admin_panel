import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./list.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Login from '../login/Login';

const List = () => {
  const token =  localStorage.getItem('token')

  if(token==null){
      {return <Login/>}
  }
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        {/* <Navbar /> */}
        <div className="buttons">
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button variant="contained" size="medium">
              Add User User
            </Button>
            <Button variant="contained" size="medium">
              Download
            </Button>
          </div>
        </Box>
      </div>
        <div className="searchCategories">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              size="small"
              label="Search by Categories name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Search by Country, state or City"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Search by Phone number"
              variant="outlined"
            />
          </Box>
        </div>
        <Datatable />
      </div>
    </div>
  );
};

export default List;
