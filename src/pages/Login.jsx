import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import {auth,signInWithEmailAndPassword} from "../firebaseConfig";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleLogin = async (data) => {
    const { email, password } = data;
    console.log(email, password);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      toast.success("You have successfully logged in.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>

      <div className="flex flex-col md:flex-row my-10">
        {/* Left Section for Image */}
        <div className="left w-full md:w-1/2">
          <img
            src="/assets/images/sideimg.png"
            className="w-full h-auto object-cover"
            alt="Login illustration"
          />
        </div>

        {/* Right Section for Form */}
        <div className="right w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="form-wrapper w-4/5 md:w-4/6">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Login to your account
            </h1>
            <h4 className="mt-2 text-lg">Enter your credentials below</h4>
            <form action="#" className="flex flex-col gap-6 mt-10" onSubmit={handleSubmit((data)=>{
           handleLogin(data);
            })}>
              <input
              {...register("email",{required:true})}
                type="text"
                placeholder="Email"
                className="bg-transparent outline-none border-b-2 border-gray-300 focus:border-red-500"
              />
               {errors.email && (
                <p className="text-red-500">Email is required.</p>
              )}
              <input
               {...register("password",{required:true})}
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none border-b-2 border-gray-300 focus:border-red-500"
              />
               {errors.password && (
                <p className="text-red-500">Password is required.</p>
              )}

              <Button btnTxt={"Login"}/>
                <a href="#" className="text-red-500">Forgot Password</a>
             
            </form>
            <div className="mt-4 text-center">
              <h1>
                <span>Don't have an account? </span>
                <Link to={"/signup"} className="underline text-red-500">
                  Sign up
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
