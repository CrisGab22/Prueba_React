import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = ({setUser}) => {

  const navigate = useNavigate()

  const [infoUser, setInfoUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleUsername = (value) => {
    setInfoUser({
      username: value,
      password: infoUser.password,
    });
  };

  const handlePassword = (value) => {
    setInfoUser({
      username: infoUser.username,
      password: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (infoUser.username === "admin" && infoUser.password === "admin") {
      setUser(true)
      setError("");
      localStorage.setItem("token", JSON.stringify("Bearer"));
      navigate("/posts")
      
    } else setError("Datos inválidos");
  };

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center flex-column bg-light">
      <h3 className="pt-5">Login</h3>

      <form className="d-flex flex-column" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="d-flex mt-1 mb-2"
          placeholder="Username"
          value={infoUser.username}
          onChange={(e) => handleUsername(e.target.value)}
        />
        <input
          type="password"
          className="d-flex mt-1 mb-2"
          placeholder="Password"
          value={infoUser.password}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <input className="mt-1 mb-2" type="submit" />
      </form>
      <p className="d-flex text-danger fs-6 pt-3 pb-4 fw-bold">{error}</p>
    </div>
  );
};

export default Login;
