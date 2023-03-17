import React, { useState } from "react";
import Boy from "../utils/Images/Auth/online-seller-listing-product-for-sale-7129320-5791991.webp";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";

const auth = () => {
  const { isLogin, setIsLogin } = useState(false);

  return (
    <div className="bg-white w-screen h-screen">
      <div className="flex justify-between px-10 py-5 font-bold h-[4rem]">
        <div className="font-sans">WEBSTER</div>
        <ul className="flex gap-6">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="flex justify-center  mt-[5rem]">
        <div className="h-[45rem] w-[70rem] bg-white rounded-3xl shadow-2xl flex">
          <div className="bg-[#2b58bf] w-[50%] h-[100%] rounded-l-3xl p-16 flex flex-col items-center">
            <Image src={Boy} className="" width={"380"} />
            <p className="text-white text-[1.5rem] text-center font-semibold">
              Let's Have a Step Forward To Technology.
            </p>
            <p className="text-white text-[1rem] text-center mt-6">
              jsb sheoc sfiojospjfiocsj ofjshoirj f shvn jfjsj ckjdsp jfivjs
              ijvijs wsh sjifhijs ofhv iifhisjfiohs fj siohij ioshf
              iosghuosjgpoh uogihsgi vjio
            </p>
            <button className="bg-white px-8 py-3 rounded-[2rem] font-semibold mt-4">
              Sign Up
            </button>
          </div>
          <div className="bg-white w-[50%] h-[100%] rounded-r-3xl p-16 flex flex-col items-center">
            <form className="flex flex-col items-center">
              <p className="text-[2rem] font-semibold">Hello Again !</p>
              <p className="text-center mt-2">
                sfvsk vj kv jgfgdgj ovdjo gfopvdovpod nslfvn nn gsnn n ovos jgrj
              </p>
              <div className="relative w-[100%] mt-10">
                <input
                  placeholder="Email"
                  className="bg-[#d9d9d9] px-4 py-2 w-[100%] rounded-lg border-[#ccdffb] border-[2px] text-black"
                />
                <p className="absolute right-4 top-0 text-[1.6rem] text-[#7c7c7c]">
                  @
                </p>
              </div>
              <div className="relative w-[100%] mt-6">
                <input
                  placeholder="Email"
                  className="bg-[#d9d9d9] px-4 py-2 w-[100%] rounded-lg border-[#ccdffb] border-[2px] text-black"
                />
                <AiOutlineEye className="absolute right-4 top-2 text-[1.6rem] text-[#7c7c7c] " />
              </div>
              <div className="flex justify-between w-[100%] mt-3">
                <div className="flex gap-2">
                  <input type="checkbox" className="bg-[#7c7c7c]" />
                  <p>Remember Me</p>
                </div>
                <p className="text-red-500">Recovery Password</p>
              </div>
              <button className="mt-[4rem] bg-[#2b58bf] w-[100%] py-3 rounded text-white font-semibold text-[1.2rem] h-[3.5rem]">
                Login
              </button>
              <button className="mt-[1.7rem] gap-3 bg-white w-[100%] py-3 rounded text-white font-semibold text-[1.2rem] h-[3.5rem] border-black border-[2px] flex justify-center items-center">
                <FcGoogle />
                <p className="text-black text-[0.8rem]">Sign In With Google</p>
              </button>
              <div className="flex gap-2 mt-[7.5rem]">
                <p>Don't you have an Account?</p>
                <p className="text-[#2b58bf]">Create One</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default auth;
