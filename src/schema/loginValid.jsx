import * as Yup from "yup"

const loginSchema = Yup.object({
    email:Yup.string().email().required("* please enter your email"),
    password:Yup.string().min(8).required("* please enter password"),
})