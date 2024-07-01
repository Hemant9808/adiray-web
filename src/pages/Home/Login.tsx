import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PiEyeBold, PiEyeClosed } from "react-icons/pi";
import { RiKey2Line } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import axiosInstance from "../../config/axios";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import Input from "../../components/Input";

const Login = () => {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const navigate = useNavigate();

    const validate = () => {
        const errors: { email?: string; password?: string } = {};
        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid";
        }
        if (!password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    const handleLogin = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const apiUrl = '/users/login';

            const response = await axiosInstance.post(apiUrl, { email, password });
            window.localStorage.setItem('accessToken', response.data.token);
            window.localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log('User details saved:', response.data.user);
            navigate('/chatbot');
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
            const email  = user.email ;
          
            console.log(user.email)
           
            console.log(user.uid)
            const password = user.uid ;
            const fullname = user.displayName ;
            const pic = user.photoURL
            
            if(!email || !fullname || !password){
                return <div>
                    Something went wrong during Signing
                </div>
            }
          
            console.log(user);
           
            try {
                const apiUrl = '/users/signwithfirebase';
    
                const response = await axiosInstance.post(apiUrl, {fullname , email , password ,pic});
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
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-4xl font-semibold text-left mb-4">
                    Welcome <span className="text-[#154B8B]">Back !!</span>
                </h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                    className="space-y-5"
                >
                    <div>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="pl-9 pr-3 py-3"
                            startIcon={<BiEnvelope />}
                            autoComplete="off"
                        />
                        <p className="text-xs font-normal text-red-400 mt-1">
                            {errors.email}
                        </p>
                    </div>
                    <div>
                        <Input
                            type={visible ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="pl-9 pr-8 py-3"
                            startIcon={<RiKey2Line />}
                            autoComplete="off"
                            endIcon={
                                visible ? <PiEyeBold onClick={() => setVisible(!visible)} /> : <PiEyeClosed onClick={() => setVisible(!visible)} />
                            }
                        />
                        <p className="text-xs font-normal text-red-400 mt-1">
                            {errors.password}
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <Link to="/forgot-password" className="text-blue-600 underline text-sm">Forgot Password?</Link>
                    </div>
                    <Button type="submit" className="w-full font-medium text-lg py-2 rounded-md bg-[#154B8B] text-white">
                        Login
                    </Button>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <span className="text-gray-400 text-sm">or</span>
                </div>
                <div
                  
                    className="w-full font-medium text-lg py-2 cursor-pointer rounded-md bg-white text-black border mt-4 flex items-center justify-center gap-2"
                    onClick={()=>{handleGoogleLogin()}} // Ensuring the event handler is correctly bound
                >
                    <FcGoogle size={24} />
                    Continue with Google
                </div>
                <h2 className="text-gray-400 flex gap-2 items-center text-base font-normal mt-6">
                    Are you new? <Link to="/sign-up" className="text-[#154B8B] underline">Sign up</Link>
                </h2>
            </div>
        </div>
    );
};

export default Login;
