import * as Yup from "yup"

const registerValid = Yub.object({
    firstname :Yub.string().required("*please enter"),
    lastname :Yup.string().required("*please enter lastname"),
    phone :Yup.string().number().min(10).required("*At least 10 number"),
    email :Yup.string().email().required("*please enter email"),
    password:Yup.string().min(8).required("*please enter password"),
    conpassword:Yup.string().min(8).required("*please confirm password")
})