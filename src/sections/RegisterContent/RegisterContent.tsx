// import React from 'react'
import "./RegisterContent.scss";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterContent = () => {
  return (
    <div className="RegisterContent text-white">
      <div className="p-64 py-10">
        <form action="">
          <div className="">
            {/* Back Button */}
            <div className="">
              <button
                type="button"
                className="bg-white text-black p-3 rounded-full"
                onClick={() => {
                  window.location.href = "/";
                }}
                aria-label="Go back"
              >
                <IoIosArrowBack size={15} />
              </button>
            </div>
            {/* Header */}
            <div className="my-5">
              <h2 className="text-3xl">Register</h2>
            </div>
            {/* Form Section */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="mt-5">
                <label className="label-style" htmlFor="">
                  Full Name
                </label>
                <input
                  className="input-style"
                  type="text"
                  placeholder="e.g : Anas Yakubu"
                />
              </div>
              <div className="mt-5">
                <label className="label-style" htmlFor="">
                  Email Address
                </label>
                <input
                  className="input-style"
                  type="text"
                  placeholder="e.g : yakubuanas04@gmail.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="label-style" htmlFor="">
                Password
              </label>
              <input
                className="input-style"
                type="password"
                placeholder="*******"
              />
            </div>
            <div className="mt-5">
              <p className="text-sm">
                Password must contain a special character (e.g @, $, #) ,
                Capital letter (e.g A, B, C) , lowercase letter (e.g a, b, c) ,
                numbers (e.g 1, 2, 3)
              </p>
              <p className="mt-3 text-sm">
                Password must be at least 8 characters long
              </p>
            </div>
            <div className="mt-5">
              <button className="btn">Register</button>
            </div>
            <div className="mt-5">
              <p className="text-sm">
                Already have an account?{" "}
                <span className="underline">
                  <a href="/auth">Login</a>
                </span>
              </p>
            </div>
            <div className="mt-5 text-center">
              <button
                type="button"
                className="google-btn"
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
        </form>
      </div>
    </div>
  );
};

export default RegisterContent;
