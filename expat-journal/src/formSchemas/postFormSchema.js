import * as yup from "yup"

export default yup.object().shape({
    name: yup.string().required("enter name of your post").min(2, "name must be more than 2 characters"),
    title: yup.string().required("enter a tagline for your post").min(2, "tagline must be more than 2 characters"),
    rating: yup.string().required("enter a rating for your post"),
    viewable: yup.string().required(""),
    location: yup.string().notRequired(),
    contact: yup.string().notRequired(),
    date: yup.string().notRequired(),
    notes: yup.string().notRequired()
})