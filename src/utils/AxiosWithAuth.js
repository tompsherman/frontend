import axios from "axios";

export default function AxiosWithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://expat-journal-bw.herokuapp.com/api/expat/auth",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
}
