//all me code (TE)
import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, "handle submit");
    AxiosWithAuth()
      .post("/api/expat/auth/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/posts");
        console.log("Login res:", res);
      })
      .catch((err) => console.log("Login error:", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
