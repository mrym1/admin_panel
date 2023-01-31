import React from "react";
import "./Messages.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rose from "../../img/rose.jpg";
import Messages from "./_Messages";
import Input from "./Input";

const messages = () => {
  return (
    <div className="chats">
      <div className="chatInfo">
        <ArrowBackIcon />
        <img className="profile" src={Rose} alt="" />
        <span>Maryam</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default messages;
