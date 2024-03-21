"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import sideBarImage from "../../../public/Images/sideImage.png";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation"; 

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e : any) => { // Removed type annotation from e
    try {
      e.preventDefault(); // Changed from e.preventDefaults()
      setLoading(true);
      const response = await axios.post("api/login", data); // Changed from responce to response
      console.log("login res==>", response);
      router.push("/");
    } catch (error : any) { // Removed type annotation from error
      console.log("error", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="grid grid-cols-2 container py-20">
      <div className="">
        <Image
          alt="login image"
          src={sideBarImage}
          height={780}
          width={900}
        />
      </div>
      <div className="container flex items-center flex-col">
        <form className="flex flex-col lg:mt-20" onSubmit={handleSubmit}>
          <p className="text-4xl">Log in to Exclusive</p>
          <p className="text-base py-3">Enter your details below</p>
      
          <input
            type="email"
            id="email"
            placeholder="Email or Phone Number "
            className="py-3 text-base focus:outline-none"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <hr />
          <input
            type="password" // Changed to lowercase
            id="password"
            placeholder="Password"
            className="py-3 text-base focus:outline-none"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <hr />

          <button
            type="submit" // Added type attribute
            className="bg-[#DB4444] py-2.5 px-20 border-2 my-2 mt-5 rounded text-white text-base"
            disabled={loading}
          >
            Create Account
          </button>
        </form>
        <div className="flex py-2.5 px-20 border-2 my-2 border-slate-200 rounded">
          <FcGoogle size={25} />
          <button className="ml-5 text-base">Sign up with Google</button>
        </div>
        <div className="flex justify-center mt-5">
          <p className="text-base mx-5">Don't have account?</p>{" "}
          <Link href="/register" className="underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login