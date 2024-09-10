import React, { useState } from "react";
import "./LoginContent.scss";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginContent: React.FC = () => {
  // Login with Google
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log(result);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    } catch (error: any) {
      console.error("Error signing in with Google:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  // Login with email and password
  // Define state with types
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Define handleSubmit function with the event type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      // use `any` type for generic error object
      console.log(error);

      toast.error("Error Encouter", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="LoginContent text-white">
      <div className="p-10 py-24">
        <div className="">
          <div className="py-8">
            <h2 className="text-white font-bold text-3xl">
              Login to your Account
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label className="label-style" htmlFor="">
                Email Address
              </label>
              <input
                className="input-style"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
              />
            </div>
            <div className="mt-5">
              <button type="submit" className="btn">
                Login
              </button>
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
          <div className="mt-5 flex justify-center text-center">
            <button type="button" className="google-btn" onClick={googleLogin}>
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
