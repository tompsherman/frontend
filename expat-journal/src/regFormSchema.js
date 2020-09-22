import * as yup from "yup"

export default yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required").min(8, "password must be 8 characters long"),
    checkbox: yup.string().required("you must agree to terms of service")
})