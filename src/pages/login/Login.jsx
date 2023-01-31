import React, { useState } from "react";
import "./login.scss";
import TextField from "@mui/material/TextField";
import { post_api } from "../../api";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [err, setErr] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setTokens] = useState("")
  const navigate = useNavigate();

  // localStorage.setItem('token', response.data.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var response = await post_api("admin/login", {
      email: `${email}`,
      password: `${password}`,
    });

    if (response == null) {
    } else {
      console.log(response.token);
      const token = response.token;
      const _token = localStorage.setItem("token", token);
    }
    navigate("/");
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">MoneyVerse</span>
        <span className="title">Login</span>
        <form>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Sign in</button>

          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
