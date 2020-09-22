import * as yup from "yup"

export default yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required").min(8, ""),
})