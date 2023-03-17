import React from "react";
import Wrapper1 from "../components/Wrapper1";

const About = () => {
  return (
    <Wrapper1>
      <div className="flex items-Start pt-20  gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] max500:mb-24 min-h-screen">
        <p className="font-LexendPeta text-[1.8rem] font-semibold">About Me</p>
        <div className="flex flex-col gap-10 pl-3 font-thin font-Inter">
          <p>
            Hello World, My Name is Harsh Keshri and I am a Full Stack Developer
            working with some technologies like React,Next Js,Tailwind Css,Node
            Js and more. I am that type of guy who is always excited to learn
            new things and implement that in his work.
          </p>
          <p>
            I am in Coding from my 7th Standard(Used Java) but I actually dived
            into it in December 2021.
          </p>
          <p>
            Web Development was the first field I chose to begin with and
            learned Flutter to enter the app development field.
          </p>
          <p>
            I have just scratched the Game Development(Using C#) field which was
            just for a Hackathon and have some basic knowledge of Blockchain
            (Solidity, Smart Contracts, Ethereum){" "}
          </p>
          <div className="pl-6">
            <p className="font-JosefinSans text-[1.5rem]">Education</p>
            <ul className="flex flex-col gap-1 pl-4 mt-2">
              <li className="flex gap-2 font-JosefinSans">
                <p className="font-bold">BTech(CSE) -</p>
                <p className="font-thin">
                  Government College of Engineering, Kalahandi (8.61 SGPA in 1st
                  Semester)
                </p>
              </li>
              <li className="flex gap-2 font-JosefinSans">
                <p className="font-bold">12th -</p>
                <p className="font-thin">
                  Nirmala English School, Rajgangpur (86.4%)
                </p>
              </li>
              <li className="flex gap-2 font-JosefinSans">
                <p className="font-bold">10th -</p>
                <p className="font-thin">
                  Nirmala English School, Rajgangpur (82.6%)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper1>
  );
};

export default About;
