// import React from 'react'
import "./LoginContent.scss";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
const LoginContent = () => {
  return (
    <div className="LoginContent text-white">
      <div className="p-10 py-24">
        <div className="">
          <div className="py-8">
            <h2 className="text-white font-bold text-3xl">
              Login to your Account
            </h2>
          </div>
          <form action="">
            <div className="mt-3">
              <label className="label-style" htmlFor="">
                Email Address
              </label>
              <input
                className="input-style"
                type="text"
                name=""
                id=""
                placeholder="Enter your Email Address"
              />
            </div>
            <div className="mt-5">
              <label className="label-style" htmlFor="">
                Password
              </label>
              <input
                className="input-style"
                type="password"
                name=""
                id=""
                placeholder="Enter your Password"
              />
            </div>
            <div className="mt-5">
              <button className="btn">Login</button>
            </div>
          </form>
          <div className="mt-5">
            <p className="text-sm">
              Don't Have an Account?{" "}
              <span className="underline">
                <a href="/register">Register</a>
              </span>
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="google-btn"
              // onClick={googleSignup}
              onClick={() => {
                toast.success("Not Available..");
              }}
            >
              <span className="py-1">
                <FcGoogle size={15} />
              </span>
              <span className="text-sm">Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
