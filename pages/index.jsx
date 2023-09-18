import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Wrapper1 from "../components/Wrapper1";
import Link from "next/link";
import ResumeSvg from "../utils/Images/Home/Resume.svg";
import Logo from "../utils/Images/Logo2.svg";
// import OwlHello from "../utils/Images/Home/OwlHello.mp4";
import animationData from "../utils/Json/128872-wavey-birdie.json";
import Lottie from "react-lottie";
import Image from "next/image";
import LinkSvg from "../utils/Images/Projects/Link.svg";
import ExternalLinkSvg from "../utils/Images/Projects/ExternalLink.svg";
import Projects from "../utils/Data/Projects";
import OpenSvg from "../utils/Images/Projects/Open.svg";
import CloseSvg from "../utils/Images/Projects/Close.svg";
import Close_Svg from "../utils/Images/Projects/Close_.svg";
import ProjectTechItem from "../components/ProjectTechItem";
import JavascriptSvg from "../utils/Images/Skills/Languages/Javascript.svg";
import CplusSvg from "../utils/Images/Skills/Languages/C++.svg";
import CsharpSvg from "../utils/Images/Skills/Languages/Csharp.svg";
import DartSvg from "../utils/Images/Skills/Languages/Dart.svg";
import SoliditySvg from "../utils/Images/Skills/Languages/Solidity.svg";
import HtmlSvg from "../utils/Images/Skills/Frontend/Html.svg";
import TailwindCssSvg from "../utils/Images/Skills/Frontend/TailwindCss.svg";
import ReactSvg from "../utils/Images/Skills/Frontend/React.png";
import FlutterSvg from "../utils/Images/Skills/Frontend/Flutter.svg";
import NextJsSvg from "../utils/Images/Skills/Frontend/NextJs.svg";
import RazorpayPng from "../utils/Images/Skills/Frontend/Razorpay.png";
import NodeJsSvg from "../utils/Images/Skills/Backend/NodeJs.svg";
import MongoDbSvg from "../utils/Images/Skills/Backend/MongoDb.png";
import SSTSvg from "../utils/Images/Skills/Backend/SST.png";
import AWSSvg from "../utils/Images/Skills/Backend/AWS.svg";
import HardHatSvg from "../utils/Images/Skills/Backend/HardHat.svg";
import FigmaSvg from "../utils/Images/Skills/Technologies/Figma.svg";
import GithubSvg from "../utils/Images/Skills/Technologies/Github.svg";
import VsCodeSvg from "../utils/Images/Skills/Technologies/VsCode.svg";
import InstagramSvg from "../utils/Images/Social/Instagram.svg";
import LinkedinSvg from "../utils/Images/Social/Linkedin.svg";
import TwitterSvg from "../utils/Images/Social/Twitter.svg";
import MailSvg from "../utils/Images/Social/Mail.png";
import SkillItem from "../components/SkillItem";

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [index, setIndex] = useState(null);

  const ChangeActiveProject = (i) => {
    setActiveProject(Projects[i]);
    setIndex(i);
  };

  const CloseProject = () => {
    setActiveProject(null);
    setIndex(null);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#DE16FF] to-[#5F35B9] flex justify-center text-white flex-col items-center">
      {/* <NavBar /> */}

      {/* index */}
      <div className="relative flex justify-center">
        <Image
          src={Logo}
          className="absolute top-12 left-12 z-10"
          height={"32"}
          width={"32"}
        />
        <div className="flex items-center justify-between w-[80vw] max-w-[70rem] z-10 max500:w-[90vw] max800:justify-center h-screen">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col">
              <p className="font-Kalam">My Name is</p>
              <h2 className="font-JejuHallasan text-[2.1rem]">HARSH KESHRI</h2>
              <p className="font-JosefinSans">I am a Full Stack Developer</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-LexendPeta text-[1.2rem]">Resume</p>
              <Link
                href="https://drive.google.com/file/d/1iiB89PWGbQdTsrs0kKPA7852x_vgESfM/view?usp=sharing"
                target={"_blank"}
              >
                <Image src={ResumeSvg} />
              </Link>
            </div>
          </div>
          <div className="w-[23rem] h-[13rem] bg-[#4DFF89] rounded-lg shadow-xl flex items-center font-JosefinSans font-bold text-[1.2rem] justify-around text-[#232432] max800:hidden">
            <p>Hello There</p>
            <div className="h-[9rem] w-[9rem]">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="flex items-Start pt-20 h-[100%] gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] max500:mb-24 min-h-screen">
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

      {/* skills */}
      <div className="flex items-Start pt-20 gap-16 w-[80vw] max-w-[70rem] z-10 flex-col overflow-hidden max500:w-[90vw] min-h-screen">
        <p className="font-LexendPeta text-[1.8rem] font-semibold">Skills</p>
        <div className="flex flex-col pl-3 font-thin font-Inter ">
          <p className="w-[90%]">
            These are my skills which I use to create and develop things and I
            am not expert in all things but i use them to be an expert
          </p>
          <ul className="flex flex-wrap gap-x-32 gap-y-10 pl-3 mt-10 font-JosefinSans w-[70vw] max-w-[65rem] mb-20 max500:mb-24">
            <li className="">
              <p className="text-[1.3rem]">Languages:-</p>
              <ul className="flex flex-col gap-2 pt-2 pl-6 list-disc">
                <SkillItem svg={JavascriptSvg} name={"JavaScript"} />
                <SkillItem svg={CplusSvg} name={"C++"} />
                <SkillItem svg={CsharpSvg} name={"C#"} />
                <SkillItem svg={DartSvg} name={"Dart"} />
                <SkillItem svg={SoliditySvg} name={"Solidity"} />
              </ul>
            </li>
            <li>
              <p className="text-[1.3rem]">Frontend:-</p>
              <ul className="flex flex-col gap-2 pt-2 pl-6 list-disc">
                <SkillItem svg={HtmlSvg} name={"HTML"} />
                <SkillItem svg={TailwindCssSvg} name={"Tailwind Css"} />
                <SkillItem svg={ReactSvg} name={"React"} />
                <SkillItem svg={FlutterSvg} name={"Flutter"} />
                <SkillItem svg={NextJsSvg} name={"Next Js"} />
                <SkillItem svg={RazorpayPng} name={"RazorPay"} />
              </ul>
            </li>
            <li>
              <p className="text-[1.3rem]">Backend:-</p>
              <ul className="flex flex-col gap-2 pt-2 pl-6 list-disc">
                <SkillItem svg={NodeJsSvg} name={"Node Js"} />
                <SkillItem svg={NodeJsSvg} name={"Express"} />
                <SkillItem svg={MongoDbSvg} name={"MongoDb"} />
                <SkillItem svg={SSTSvg} name={"SST"} />
                <SkillItem svg={AWSSvg} name={"AWS"} />
                <SkillItem svg={NextJsSvg} name={"NEXT Js"} />
                <SkillItem svg={HardHatSvg} name={"HardHat"} />
                <SkillItem svg={RazorpayPng} name={"RazorPay"} />
              </ul>
            </li>
            <li>
              <p className="text-[1.3rem]">Technologies:-</p>
              <ul className="flex flex-col gap-2 pt-2 pl-6 list-disc">
                <SkillItem svg={FigmaSvg} name={"Figma"} />
                <SkillItem svg={GithubSvg} name={"Github"} />
                <SkillItem svg={VsCodeSvg} name={"Vs Code"} />
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* projects */}
      <div className="flex items-Start pt-20 h-[100%] gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] min-h-screen">
        <p className="font-LexendPeta text-[1.8rem] font-semibold">Projects</p>
        <div className="flex justify-between pl-3 font-thin font-Inter">
          <ul className="flex flex-col gap-2">
            {Projects.map((project, i) => {
              return (
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    ChangeActiveProject(i);
                  }}
                >
                  <div>
                    {index == i ? (
                      <Image src={OpenSvg} width="23"></Image>
                    ) : (
                      <Image src={CloseSvg} width="23"></Image>
                    )}
                  </div>
                  <p>{project.name}</p>
                </li>
              );
            })}
          </ul>
          <div
            className={`flex items-center justify-center max800:top-0  max800:fixed max800:w-screen max800:left-0 max800:h-screen max800:bg-[#23243273] max500:w-screen max500:bg-[#23243273] ${
              activeProject ? "flex" : "hidden"
            }`}
          >
            {activeProject && (
              <div className=" w-[25rem] min-h-[20rem] pb-5 bg-white rounded-xl text-[#232432] p-2 px-6 pt-4 gap-3 flex flex-col  max800:w-[calc(100vw-6rem)]  max800:h-[calc(100vh-3rem)] max800:ml-[1rem] max500:w-[calc(100vw-3rem)] relative">
                <div className="h-10">
                  {activeProject.isWebsite ? (
                    <Link
                      href={activeProject.webLink}
                      className="flex items-center gap-2 mb-2"
                      target={"_blank"}
                    >
                      <p className="font-LexendPeta text-[1.3rem]">
                        {activeProject && activeProject.name.split("(")[0]}
                      </p>
                      <Image src={LinkSvg} height="30" width="30" />
                    </Link>
                  ) : (
                    <p className="font-LexendPeta text-[1.3rem]">
                      {activeProject && activeProject.name.split("(")[0]}
                    </p>
                  )}
                </div>
                <p>{activeProject.description}</p>
                <div className="flex gap-1">
                  <p>Type -</p>
                  <p>{activeProject.type}</p>
                </div>
                <div className="flex gap-1">
                  <p>Github</p>
                  <Link
                    href={activeProject.githubLink}
                    target="_blank"
                    className="w-[calc(100%-6.8rem)] text-clip"
                  >
                    <Image src={ExternalLinkSvg} height="20" />
                  </Link>
                </div>
                <div>
                  <p>Technologies Used:-</p>
                  <ul className="flex flex-wrap gap-3 px-2 mt-2 text-white items-center">
                    {activeProject.technologies.map((tech) => {
                      return (
                        <ProjectTechItem img={tech.img} name={tech.name} />
                      );
                    })}
                  </ul>
                </div>
                <Image
                  src={Close_Svg}
                  className="absolute right-4 top-4 cursor-pointer"
                  height={"28"}
                  width={"28"}
                  onClick={CloseProject}
                />
              </div>
            )}
          </div>
          {!activeProject && (
            <div
              className={`w-[25rem] min-h-[20rem] pb-5 bg-white rounded-xl text-[#232432] p-2 px-6 pt-4 gap-3 flex justify-center items-center font-LexendPeta  max800:hidden`}
            >
              Click the Project to See
            </div>
          )}
        </div>
      </div>

      {/* social */}
      <div className="flex items-Start pt-20  gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] min-h-screen">
        <p className="font-LexendPeta text-[1.8rem] font-semibold">Social</p>
        <ul className="flex flex-col gap-4 pl-3 font-thin text-white font-LexendPeta">
          <li>
            <Link
              href={"https://github.com/airbornharsh"}
              className="flex items-center gap-3"
              target={"_blank"}
            >
              <Image src={GithubSvg} height="30" />
              <p className="text-[1.2rem] ">Github</p>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/airbornharsh"}
              className="flex items-center gap-3"
              target={"_blank"}
            >
              <Image src={LinkedinSvg} height="30" />
              <p className="text-[1.2rem] ">Linkedin</p>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.twitter.com/airbornharsh"}
              className="flex items-center gap-3"
              target={"_blank"}
            >
              <Image src={TwitterSvg} height="30" />
              <p className="text-[1.2rem] ">Twitter</p>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.instagram.com/airbornharsh"}
              className="flex items-center gap-3"
              target={"_blank"}
            >
              <Image src={InstagramSvg} height="30" />
              <p className="text-[1.2rem] ">Instagram</p>
            </Link>
          </li>
          <li>
            <a
              href={"https://harshkeshri1234567@gmail.com"}
              className="flex items-center gap-3"
              target={"_blank"}
            >
              <Image src={MailSvg} height="30" />
              <p className="text-[1.2rem] ">Mail</p>
            </a>
          </li>
        </ul>
      </div>

      {/* design */}
      <div className="w-[60vw] h-60 absolute -top-8 rounded-2xl -left-28 blur-[200px] bg-[#5f35b9a8]"></div>
    </div>
  );
}
