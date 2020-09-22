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
    AxiosWithAuth()
      .post(
        "https://expat-journal-bw.herokuapp.com/api/expat/auth/login",
        `grant_type=password&username=${form.username}&password=${form.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        props.history.push("/");
      });
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
