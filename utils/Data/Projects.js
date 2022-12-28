import JavascriptSvg from "../Images/Skills/Languages/Javascript.svg";
import CplusSvg from "../Images/Skills/Languages/C++.svg";
import CsharpSvg from "../Images/Skills/Languages/Csharp.svg";
import DartSvg from "../Images/Skills/Languages/Dart.svg";
import SoliditySvg from "../Images/Skills/Languages/Solidity.svg";
import HtmlSvg from "../Images/Skills/Frontend/Html.svg";
import TailwindCssSvg from "../Images/Skills/Frontend/TailwindCss.svg";
import ReactSvg from "../Images/Skills/Frontend/React.png";
import FlutterSvg from "../Images/Skills/Frontend/Flutter.svg";
import NextJsSvg from "../Images/Skills/Frontend/NextJs.svg";
import NodeJsSvg from "../Images/Skills/Backend/NodeJs.svg";
import MongoDbSvg from "../Images/Skills/Backend/MongoDb.png";
import SSTSvg from "../Images/Skills/Backend/SST.png";
import AWSSvg from "../Images/Skills/Backend/AWS.svg";
import FigmaSvg from "../Images/Skills/Technologies/Figma.svg";
import GithubSvg from "../Images/Skills/Technologies/Github.svg";
import VsCodeSvg from "../Images/Skills/Technologies/VsCode.svg";

const Projects = [
  {
    name: "Poll3",
    description:
      "It is Polling app where you can just create your poll and share the link to other and they can vote using crypto wallet. This is based on Web 3 using Goerli Eth",
    githubLink: "https://github.com/Airbornharsh/pollingapp-web3",
    type: "Website",
    isWebsite: true,
    webLink: "https://poll3.vercel.app/",
    technologies: [
      { name: "Solidity", img: SoliditySvg },
      { name: "Next Js", img: NextJsSvg },
      { name: "Tailwind CSS", img: TailwindCssSvg },
      { name: "JavaScript", img: JavascriptSvg },
    ],
  },
  {
    name: "Gymnaism",
    description:
      "This is a Internship Test project which I was told to craete using React,SST and AWs. Where you can have the videos and courses for gyming. (Backend not working as Aws charges for it)",
    id: "gymnaism",
    githubLink: "https://github.com/Airbornharsh/Gymnaism",
    type: "Website",
    isWebsite: true,
    webLink: "https://gymnaism.netlify.app",
    technologies: [
      { name: "JavaScript", img: JavascriptSvg },
      { name: "Tailwind CSS", img: TailwindCssSvg },
      { name: "React", img: ReactSvg },
      { name: "Aws", img: AWSSvg },
      { name: "SST", img: SSTSvg },
    ],
  },
  {
    name: "Hopl",
    description:
      "This is two service Where customer can shop in the nearby store",
    id: "hopl",
    githubLink: "https://github.com/Airbornharsh/hopl",
    type: "App & Website",
    isWebsite: false,
    webLink: "",
    technologies: [
      { name: "Dart", img: DartSvg },
      { name: "JavaScript", img: JavascriptSvg },
      { name: "Flutter", img: FlutterSvg },
      { name: "Tailwind CSS", img: TailwindCssSvg },
      { name: "Mongo Db", img: MongoDbSvg },
      { name: "Next Js", img: NextJsSvg },
    ],
  },
  {
    name: "Arime",
    description: "Here you can get any anime Details",
    id: "arime",
    githubLink: "https://github.com/Airbornharsh/Arime",
    type: "Website",
    isWebsite: true,
    webLink: "https://arime.vercel.app",
    technologies: [
      { name: "JavaScript", img: JavascriptSvg },
      { name: "Tailwind CSS", img: TailwindCssSvg },
      { name: "Mongo Db", img: MongoDbSvg },
      { name: "Next Js", img: NodeJsSvg },
    ],
  },
  {
    name: "Mtrace",
    description:
      "you can store your details about your expenses categories wise (Due to heroku free tier down it is not working fine but it will be in sometime)",
    id: "tracer",
    githubLink: "https://github.com/Airbornharsh/Tracer",
    type: "Website",
    isWebsite: true,
    webLink: "https://mtrace.netlify.app",
    technologies: [
      { name: "JavaScript", img: JavascriptSvg },
      { name: "Tailwind CSS", img: TailwindCssSvg },
      { name: "React", img: ReactSvg },
      { name: "Mongo Db", img: MongoDbSvg },
      { name: "Express", img: NodeJsSvg },
    ],
  },
  {
    name: "Tic Tak Toe (Starter)",
    description:
      "It is a game of Tic Tak Toe where two player can player in same device. In future, I will add socket to it so that player can play from different Devices",
    id: "tictaktoe",
    githubLink: "https://github.com/Airbornharsh/TIC_TAK_TOE",
    type: "Website",
    isWebsite: true,
    webLink: "https://airbornharsh.github.io/TIC_TAK_TOE",
    technologies: [
      { name: "Html", img: HtmlSvg },
      { name: "CSS", img: TailwindCssSvg },
      { name: "JavaScript", img: JavascriptSvg },
    ],
  },
  {
    name: "Bingo (Starter)",
    description:
      "It is a game of bingo where two player can player in same device. In future, I will add socket to it so that player can play from different ",
    id: "bingo",
    githubLink: "https://github.com/Airbornharsh/BINGO",
    type: "Website",
    isWebsite: true,
    webLink: "https://airbornharsh.github.io/Snake_and_Ladder",
    technologies: [
      { name: "Html", img: HtmlSvg },
      { name: "CSS", img: TailwindCssSvg },
      { name: "JavaScript", img: JavascriptSvg },
    ],
  },
];

export default Projects;
