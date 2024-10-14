import React from "react";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import {auth,createUserWithEmailAndPassword} from "../firebaseConfig";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = () => {
  console.log(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const navigate = useNavigate();

  const handleSignup = async (data) => {
    const { email, password } = data;
    console.log(email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      toast.success("User registered successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/dashboard')
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
        <div className="left w-full md:w-1/2">
          <img
            src="/assets/images/sideimg.png"
            className="w-full h-auto object-cover"
            alt="Signup illustration"
          />
        </div>

        <div className="right w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="form-wrapper w-4/5 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Create an account
            </h1>
            <h4 className="mt-2 text-lg">Enter your details below</h4>
            <form
              action="#"
              className="flex flex-col gap-4 mt-10"
              onSubmit={handleSubmit((data) => {
                handleSignup(data);
              })}
            >
              <input
                {...register("Name")}
                type="text"
                placeholder="Name"
                className="bg-transparent outline-none border-b-2 border-gray-300 focus:border-red-500"
              />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none border-b-2 border-gray-300 focus:border-red-500"
              />
              {errors.email && (
                <p className="text-red-500">Email is required.</p>
              )}
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none border-b-2 border-gray-300 focus:border-red-500"
              />
              {errors.password && (
                <p className="text-red-500">Password is required.</p>
              )}
              <Button btnTxt={"Create an Account"} />
              <button className="border-2 border-red-500 font-semibold py-2 text-red-500 hover:bg-red-500 hover:text-white transition duration-300">
                Sign up with Google
              </button>
            </form>
            <div className="mt-4 text-center">
              <h1>
                <span>Already have an account? </span>
                <Link to={"/login"} className="underline text-red-500">
                  Login
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

export default Signup;
