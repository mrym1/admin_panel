import React, { useState, useContext } from "react";
import "./Chats.scss";
import { doc, addDoc, Timestamp, getDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

let _userDate = [
  {
    id: "000",
    name: "admin",
    email: "admin@gmail.com",
    password: 1234567,
    lastmsg: "dfg",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "001",
    name: "abc",
    email: "abc@gmail.com",
    password: 1234567,
    lastmsg: "",
    img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "002",
    name: "xyz",
    email: "xyz@gmail.com",
    password: 1234567,
    lastmsg: "",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "003",
    name: "adc",
    email: "adc@gmail.com",
    password: 1234567,
    lastmsg: "",
    img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
];

localStorage.setItem("userData", JSON.stringify(_userDate));

let _retrieveUserData = JSON.parse(localStorage.getItem("userData"));

// console.log(_retrieveUserData);

const Chats = () => {
  const handleSelect = async (user) => {
    try {
      // if (!res.exist()) {
        const docData = {
          lastMessage: "",
          new: true,
          timestamp: Timestamp.fromDate(new Date()),
          user1: {
            id: _userDate[0].id,
            image: _userDate[0].name,
            name: _userDate[0].name,
          },
          user2: {
            id: user.id,
            image: user.name,
            name: user.name,
          },
          users: [_userDate[0].id, user.id],
        };
        await addDoc(collection(db, "chats"), docData);
      // }
    } catch (err) {}
  };

  return (
    <div className="chats">
      {_userDate.map((user) => (
        <div
          className="userChat"
          onClick={() => handleSelect(user)}
          key={user.id}
        >
          <img src={user.img} alt="" />
          <div className="userChatInfo">
            <span>{user.name}</span>
            <p>{user.lastmsg}</p>
          </div>
          <div className="lastMsgTiming">
            <p>now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
