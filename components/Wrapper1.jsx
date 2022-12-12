import React from "react";
import NavBar from "./NavBar";

const Wrapper1 = (props) => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#DE16FF] to-[#5F35B9] flex justify-center text-white">
      <NavBar />
      {props.children}
      <div className="w-[60vw] h-60 absolute -top-8 rounded-2xl -left-28 blur-[70px] bg-[#5f35b9a8]"></div>
    </div>
  );
};

export default Wrapper1;
