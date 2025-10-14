import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Wrapper1 from "../components/Wrapper1";
import Link from "next/link";
import ResumeSvg from "../utils/Images/Home/Resume.svg";
import Logo from "../utils/Images/Logo2.svg";
// import OwlHello from "../utils/Images/Home/OwlHello.mp4";
import animationData from "../utils/Json/128872-wavey-birdie.json";
// import Lottie from "react-lottie";
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
    <div className="min-h-screen  bg-gradient-to-br from-[#000] to-[#290e64] flex justify-center text-white flex-col items-center">
      {/* <NavBar /> */}

      {/* index */}
      <div id="home" className="relative flex justify-center">
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
          <div className="w-[23rem] h-[13rem] bg-[#006aff] rounded-lg shadow-xl flex items-center font-JosefinSans font-bold text-[1.2rem] justify-around text-white max800:hidden">
            <p>Hello There</p>
            <div className="h-[9rem] w-[9rem]">
              {/* <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* about */}
      <div
        id="about"
        className="flex items-Start pt-20 h-[100%] gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] max500:mb-24 min-h-screen"
      >
        <p className="font-LexendPeta text-[1.8rem] font-semibold">About Me</p>
        <div className="flex flex-col gap-10 pl-3 font-thin font-Inter">
          <p>
            Hello World, My Name is Harsh Keshri and I am a Full Stack Developer
            with expertise in modern technologies like React, Next.js,
            TypeScript, Node.js, AWS, and AI/ML integration. I specialize in
            building scalable applications and have extensive experience in
            Web3, blockchain development, and AI agent systems.
          </p>
          <p>
            Currently working as a Full Stack Developer at Zereus AI, where I've
            built AI trading frameworks using LangGraph and LangChain, developed
            scalable backend systems, and created Web3 integrations with Solana
            SDK.
          </p>
          <p>
            I have been coding since my 7th Standard (Java) but seriously dived
            into development in December 2021. My journey spans from web
            development to mobile apps, blockchain, and now AI/ML integration.
          </p>
          <p>
            I have experience across multiple domains including Full Stack
            Development, AI/ML Integration, Web3/Blockchain, Mobile Development
            (Flutter), and Cloud Infrastructure (AWS). I'm passionate about
            learning new technologies and implementing them in real-world
            applications.
          </p>
          <div className="pl-6">
            <p className="font-JosefinSans text-[1.5rem]">Education</p>
            <ul className="flex flex-col gap-1 pl-4 mt-2">
              <li className="flex gap-2 font-JosefinSans">
                <p className="font-bold">BTech(CSE) -</p>
                <p className="font-thin">
                  Government College of Engineering, Kalahandi (GPA: 8.2)
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

      {/* experience */}
      <div
        id="experience"
        className="flex items-start pt-20 gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] max500:mb-24 min-h-screen"
      >
        <p className="font-LexendPeta text-[1.8rem] font-semibold">
          Professional Experience
        </p>

        <div className="flex flex-col gap-12 pl-3 font-thin font-Inter w-full">
          {/* Zereus AI */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-JosefinSans text-[1.5rem] font-bold text-white">
                  Full Stack Developer
                </h3>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  Full-time
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <h4 className="font-JosefinSans text-[1.2rem] font-semibold">
                  Zereus AI
                </h4>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">Remote</span>
              </div>
              <p className="text-gray-400 font-medium">
                July 2024 - Present
              </p>
            </div>

            <div className="mb-6">
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Key Responsibilities:
              </h5>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Built and deployed scalable backend systems using
                    TypeScript, Express, Django, PostgreSQL, MongoDB, and AWS,
                    ensuring reliability and modular design.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Developed an AI trading and research framework using
                    LangGraph, LangChain, Web3 APIs, and Solana SDK, enabling
                    multi-agent collaboration for automated analysis and
                    decision-making.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Designed and maintained Neo4j graph databases to map social
                    media sentiment and topic trends, identifying upcoming
                    opportunities and key influencer activity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Integrated WebSockets and modern state management (Zustand)
                    to deliver seamless, real-time user experiences across
                    platforms.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Built a TradingView dashboard with secure wallet integration
                    and on-chain trading support.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Key Achievements:
              </h5>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Reduced system response time by 40% through optimized
                    database queries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Implemented multi-agent AI system handling 10K+ daily
                    trading decisions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Achieved 99.9% uptime for critical trading infrastructure
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "Express",
                  "Django",
                  "PostgreSQL",
                  "MongoDB",
                  "AWS",
                  "LangGraph",
                  "LangChain",
                  "Web3",
                  "Solana SDK",
                  "Neo4j",
                  "WebSockets",
                  "Zustand",
                  "TradingView",
                ].map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Freelancing */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-JosefinSans text-[1.5rem] font-bold text-white">
                  Full Stack Developer
                </h3>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Contract
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <h4 className="font-JosefinSans text-[1.2rem] font-semibold">
                  Freelancing
                </h4>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">Remote</span>
              </div>
              <p className="text-gray-400 font-medium">
                April 2024 - July 2024
              </p>
            </div>

            <div className="mb-6">
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Key Responsibilities:
              </h5>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Integrated a custom-trained ML model with Next.js and Flask,
                    enabling real-time inference and improved data handling.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Built a text-to-speech module to enhance accessibility and
                    automate content delivery for clients.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Developed a dynamic website generator with a user-friendly
                    UI for non-technical users to create customizable web pages.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Delivered high-quality solutions under tight deadlines by
                    focusing on modular design, client feedback, and iterative
                    improvement.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Key Achievements:
              </h5>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Delivered 5+ client projects within tight deadlines
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Improved client website performance by 60% through
                    optimization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Reduced development time by 30% using reusable components
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Flask",
                  "Machine Learning",
                  "Text-to-Speech",
                  "React",
                  "TypeScript",
                  "Python",
                ].map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Intelligent Cloud Applications */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-JosefinSans text-[1.5rem] font-bold text-white">
                  Full Stack Developer
                </h3>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  Full-time
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <h4 className="font-JosefinSans text-[1.2rem] font-semibold">
                  Intelligent Cloud Applications
                </h4>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">Remote</span>
              </div>
              <p className="text-gray-400 font-medium">
                November 2022 - April 2024
              </p>
            </div>

            <div className="mb-6">
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Key Responsibilities:
              </h5>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Led frontend and backend development of cloud-based web
                    applications using React, Node.js, and AWS Serverless
                    architecture.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Improved application performance and responsiveness by
                    implementing Zustand for state management, caching
                    strategies, and API-level optimizations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Deployed AWS Lambda-based microservices, reducing
                    infrastructure complexity and improving scalability.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Enhanced security and maintainability by building robust
                    authentication flows, optimizing data access patterns, and
                    streamlining CI/CD pipelines.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Key Achievements:
              </h5>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Reduced infrastructure costs by 35% through serverless
                    optimization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Improved application load time by 50% through caching
                    strategies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Implemented CI/CD pipeline reducing deployment time by 70%
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "AWS",
                  "Serverless",
                  "Zustand",
                  "Lambda",
                  "CI/CD",
                  "Authentication",
                  "Microservices",
                ].map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bworkz Internship */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-JosefinSans text-[1.5rem] font-bold text-white">
                  Full Stack Developer Intern
                </h3>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                  Internship
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <h4 className="font-JosefinSans text-[1.2rem] font-semibold">
                  Bworkz
                </h4>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">Remote</span>
              </div>
              <p className="text-gray-400 font-medium">
                July 2022 - October 2022
              </p>
            </div>

            <div className="mb-6">
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Key Responsibilities:
              </h5>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Developed and deployed full-stack web applications
                    leveraging AWS Lambda and AWS S3 for efficient compute and
                    storage.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Created reusable React.js components and optimized UI
                    workflows to improve maintainability and UX consistency.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Collaborated with product teams to translate business logic
                    into scalable, production-ready features.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-2">•</span>
                  <span className="text-gray-300 leading-relaxed">
                    Optimized API response times and database queries, improving
                    backend performance and reducing user wait times.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Key Achievements:
              </h5>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Improved API response time by 45% through query optimization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Created 15+ reusable components reducing development time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-2">✓</span>
                  <span className="text-gray-300 leading-relaxed">
                    Successfully deployed 3 production applications
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-JosefinSans text-[1.1rem] font-semibold mb-3 text-white">
                Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "AWS Lambda",
                  "AWS S3",
                  "JavaScript",
                  "Node.js",
                  "Database Optimization",
                  "UI/UX",
                ].map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skills */}
      <div
        id="skills"
        className="flex items-Start pt-20 gap-16 w-[80vw] max-w-[70rem] z-10 flex-col overflow-hidden max500:w-[90vw] min-h-screen"
      >
        <p className="font-LexendPeta text-[1.8rem] font-semibold">Skills</p>
        <div className="flex flex-col pl-3 font-thin font-Inter ">
          <p className="w-[90%]">
            These are the technologies and tools I use to build scalable
            applications, AI systems, and Web3 solutions. I continuously learn
            and adapt to new technologies to stay at the forefront of
            development.
          </p>
          <ul className="flex flex-wrap gap-x-32 gap-y-10 pl-3 mt-10 font-JosefinSans w-[70vw] max-w-[65rem] mb-20 max500:mb-24">
            <li className="">
              <p className="text-[1.3rem]">Languages:-</p>
              <ul className="flex flex-col gap-2 pt-2 pl-6 list-disc">
                <SkillItem svg={JavascriptSvg} name={"JavaScript (ES6+)"} />
                <SkillItem svg={JavascriptSvg} name={"TypeScript"} />
                <SkillItem svg={JavascriptSvg} name={"Python"} />
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
                <SkillItem svg={TailwindCssSvg} name={"Tailwind CSS"} />
                <SkillItem svg={ReactSvg} name={"React"} />
                <SkillItem svg={NextJsSvg} name={"Next.js"} />
                <SkillItem svg={FlutterSvg} name={"Flutter"} />
                <SkillItem svg={JavascriptSvg} name={"Vite"} />
                <SkillItem svg={JavascriptSvg} name={"Zustand"} />
              </ul>
            </li>
            <li>
              <p className="text-[1.3rem]">Backend:-</p>
              <ul className="flex flex-col gap-2 pt-2 pl-6 list-disc">
                <SkillItem svg={NodeJsSvg} name={"Node.js"} />
                <SkillItem svg={NodeJsSvg} name={"Express.js"} />
                <SkillItem svg={JavascriptSvg} name={"Nest.js"} />
                <SkillItem svg={JavascriptSvg} name={"Flask"} />
                <SkillItem svg={JavascriptSvg} name={"Django"} />
                <SkillItem svg={MongoDbSvg} name={"MongoDB"} />
                <SkillItem svg={JavascriptSvg} name={"PostgreSQL"} />
                <SkillItem svg={JavascriptSvg} name={"Neo4j"} />
                <SkillItem svg={JavascriptSvg} name={"Redis"} />
                <SkillItem svg={AWSSvg} name={"AWS"} />
                <SkillItem svg={HardHatSvg} name={"HardHat"} />
              </ul>
            </li>
            <li>
              <p className="text-[1.3rem]">AI & Web3:-</p>
              <ul className="flex flex-col gap-2 pt-2 pl-6 list-disc">
                <SkillItem svg={JavascriptSvg} name={"LangGraph"} />
                <SkillItem svg={JavascriptSvg} name={"LangChain"} />
                <SkillItem svg={JavascriptSvg} name={"AI Agents"} />
                <SkillItem svg={JavascriptSvg} name={"Web3.js"} />
                <SkillItem svg={JavascriptSvg} name={"Solana SDK"} />
                <SkillItem svg={JavascriptSvg} name={"TradingView"} />
              </ul>
            </li>
            <li>
              <p className="text-[1.3rem]">DevOps & Tools:-</p>
              <ul className="flex flex-col gap-2 pt-2 pl-6 list-disc">
                <SkillItem svg={AWSSvg} name={"AWS (S3, Lambda)"} />
                <SkillItem svg={JavascriptSvg} name={"Docker"} />
                <SkillItem svg={JavascriptSvg} name={"CI/CD"} />
                <SkillItem svg={GithubSvg} name={"GitHub Actions"} />
                <SkillItem svg={FigmaSvg} name={"Figma"} />
                <SkillItem svg={VsCodeSvg} name={"VS Code"} />
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* projects */}
      <div
        id="projects"
        className="flex items-Start pt-20 h-[100%] gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] min-h-screen"
      >
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
                      if (!tech.img)
                        return (
                          <span className="text-accent border-accent border-[0.1rem] px-2 rounded">
                            {tech.name}
                          </span>
                        );
                      else
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
      <div
        id="social"
        className="flex items-Start pt-20  gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] min-h-screen"
      >
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
      <div className="w-[40vw] h-40 absolute -top-12 rounded-2xl -left-32 blur-[300px] bg-[#5f35b9a8]"></div>
    </div>
  );
}
