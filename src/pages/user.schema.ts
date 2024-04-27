import * as yup from "yup";

export const signInSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password should be at least 6 characters long").required("Password is required"),
});

export const signUpSchema = yup.object().shape({
    fullname: yup.string().min(5, "Fullname should be at least 5 characters long").max(20, "Fullname should not be more than 20 characters long").required("Fullname is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password should be at least 6 characters long").required("Password is required"),
});