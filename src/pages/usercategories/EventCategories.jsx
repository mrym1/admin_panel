import React from "react";
import "./EventCategories.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Categories from "../../components/categories/Categories";
import Login from '../login/Login';

const User = () => {
  const token =  localStorage.getItem('token')

  if(token==null){
      {return <Login/>}
  }
  return (
    <div className="user">
      <Sidebar />
      <div className="userContainer">
        {/* <Navbar /> */}
        <Categories />
      </div>
    </div>
  );
};

export default User;
