import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Login from '../login/Login';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  const token =  localStorage.getItem('token')

  if(token==null){
      {return <Login/>}
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
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
                   label={input.label} 
                   variant="outlined"
                 />
               </Box>
                </div>
                  ))}
              <Box sx={{ "& button": { m: 1 } }}>
            <div>
              <Button variant="contained" size="medium">
                Send
              </Button>
            </div>
          </Box>
            </form>
                  {/* <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;