// src/pages/Signup.tsx
import { Formik } from "formik";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { signUpSchema } from "../../components/user.schema";
import { useState } from "react";
import { Button } from "../../components/Button";
import { AiOutlineUser } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { PiEyeBold, PiEyeClosed } from "react-icons/pi";
import { RiKey2Line } from "react-icons/ri";
import axiosInstance from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate()
  const handleSignUp = async (values: { fullname: string; email: string; password: string }) => {
    try {
      const apiUrl = "/users/signup";
      const response = await axiosInstance.post(apiUrl, values);
      window.localStorage.setItem("accessToken", response.data.token);
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log("User signed up:", response.data.user);
      navigate('/chatbot')
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleLogin = async () => {
    console.log("Google login clicked");
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email;
      const password = user.uid;
      const fullname = user.displayName;
      const pic = user.photoURL
      if (!email || !fullname || !password) {
        return <div>
          Something went wrong during Signing
        </div>
      }

      console.log(user);

      try {
        const apiUrl = '/users/signwithfirebase';

        const response = await axiosInstance.post(apiUrl, { fullname, email, password, pic});
        window.localStorage.setItem('accessToken', response.data.token);
        window.localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log('User details saved:', response.data.user);
        navigate('/chatbot');
      } catch (error) {
        console.log(error);
      }

    } catch (error) {
      console.log("Error during Google login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-white">
      <Formik
        initialValues={{ fullname: "", email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          handleSignUp(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-semibold  mb-4">Create <span className="text-[#154B8B]">Account</span></h1>
            <h2 className="text-gray-400 flex gap-2 items-center text-base font-normal mb-4">
              Already have an account? <Link to="/login" className="text-[#154B8B] underline">Sign in</Link>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  className="pl-9 pr-3 py-3"
                  startIcon={<AiOutlineUser />}
                  autoComplete="off"
                />
                <p className="text-xs font-normal text-red-400 mt-1">
                  {errors.fullname && touched.fullname && errors.fullname}
                </p>
              </div>
              <div>
                <Input
                  type="email"
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
              <Button type="submit" className="w-full cursor-pointer font-medium text-lg text-white py-2 rounded-md bg-[#154B8B]" disabled={isSubmitting}>
                Sign up
              </Button>
            </form>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-400 text-sm">or</span>
            </div>
            <div

              className="w-full font-medium text-lg py-2 cursor-pointer rounded-md bg-white text-black border mt-4 flex items-center justify-center gap-2"
              onClick={() => { handleGoogleLogin() }} // Ensuring the event handler is correctly bound
            >
              <FcGoogle size={24} />
              Continue with Google
            </div>
          </div>
        )}

      </Formik>
    </div>
  );
};

export default Signup;
