import React, { useState, useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { get_api } from "../../api";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    var response = await get_api("users/");
    setUser(response)

    if (response == null) {
    } else {
      // console.log("response");
    }
  };

  const userColumns = [
    { field: "userId", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email ID",
      width: 200,
    },
    {
      field: "deactivate",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        if (params.row.deactivate === 0 ){
          return (
            <div className={`cellWithStatus deactive`}>
              deactive
            </div>
          );
        }
        else{
          return (
            <div className={`cellWithStatus active`}>
              active
            </div>
          );
        }
      },
    },
  ];
  




  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/76567" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={user}
        getRowId={row => row.userId}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
