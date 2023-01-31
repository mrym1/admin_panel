import React from "react";
import "./Chat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chat from "../../components/chats/Chats";
import Login from '../login/Login';
// import Messages from "../../components/messages/messages";


const chat = () => {
  const token =  localStorage.getItem('token')

  if(token==null){
      {return <Login/>}
  }
  return (
    <>
      <div className="chat">
        <Sidebar />
        <div className="chatContainer">
          {/* <Navbar /> */}
          {/* <Messages /> */}
          <Chat />
        </div>
      </div>
    </>
  );
};

export default chat;
