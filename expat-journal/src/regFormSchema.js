import * as yup from "yup"

export default yup.object().shape({
    username: yup.string().required("username is required"),
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required").min(8, "password must be 8 characters long"),
    checkbox: yup.boolean().oneOf([true], "you must agree to terms of service")
})