// src/pages/Login.tsx
import { Formik } from "formik";
import { signInSchema } from "../../components/user.schema";
import { useState } from "react";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PiEyeBold, PiEyeClosed } from "react-icons/pi";
import { RiKey2Line } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import axiosInstance from "../../config/axios";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()
    const handleLogin = async (values: { email: string; password: string }) => {
        try {
            const apiUrl = '/users/login';

            // Making the POST request using Axios
            const response = await axiosInstance.post(apiUrl, values);
            window.localStorage.setItem('accessToken', response.data.token);
            window.localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log('User details saved:', response.data.user);
            navigate('/chatbot')
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const handleGoogleLogin = () => {
        // Add Google authentication logic here
        console.log("Google login clicked");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-white">
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={signInSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    handleLogin(values);
                    setSubmitting(false);
                }}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-4xl font-semibold text-center mb-4">
                            Welcome Back
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="Email address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className="pl-9 pr-3 py-3"
                                    startIcon={<BiEnvelope />}
                                    autoComplete="off"
                                />
                                <p className="text-xs font-normal text-red-400 mt-1">
                                    {errors.email && touched.email && errors.email}
                                </p>
                            </div>
                            <div>
                                <Input
                                    type={visible ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="pl-9 pr-8 py-3"
                                    startIcon={<RiKey2Line />}
                                    autoComplete="off"
                                    endIcon={
                                        visible ? <PiEyeBold onClick={() => setVisible(!visible)} /> : <PiEyeClosed onClick={() => setVisible(!visible)} />
                                    }
                                />
                                <p className="text-xs font-normal text-red-400 mt-1">
                                    {errors.password && touched.password && errors.password}
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <Link to="/forgot-password" className="text-blue-600 underline text-sm">Forgot Password?</Link>
                            </div>
                            <Button type="submit" className="w-full font-medium text-lg py-2 rounded-md bg-blue-800 text-white" disabled={isSubmitting}>
                                Login
                            </Button>
                        </form>
                        <div className="flex items-center justify-center mt-4">
                            <span className="text-gray-400 text-sm">or</span>
                        </div>
                        <Button type="button" className="w-full font-medium text-lg py-2 rounded-md bg-white text-black border mt-4 flex items-center justify-center gap-2" onClick={handleGoogleLogin}>
                            <FcGoogle size={24} />
                            Continue with Google
                        </Button>
                        <h2 className="text-gray-400 flex gap-2 items-center text-base font-normal mt-6">
                            Are you new? <Link to="/sign-up" className="text-blue-700 underline">Sign up</Link>
                        </h2>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Login;
