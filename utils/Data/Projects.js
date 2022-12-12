import JavascriptSvg from "../Images/Skills/Languages/Javascript.svg";
import CplusSvg from "../Images/Skills/Languages/C++.svg";
import CsharpSvg from "../Images/Skills/Languages/Csharp.svg";
import DartSvg from "../Images/Skills/Languages/Dart.svg";
import SoliditySvg from "../Images/Skills/Languages/Solidity.svg";
import TailwindCssSvg from "../Images/Skills/Frontend/TailwindCss.svg";
import ReactSvg from "../Images/Skills/Frontend/React.png";
import FlutterSvg from "../Images/Skills/Frontend/Flutter.svg";
import NextJsSvg from "../Images/Skills/Frontend/NextJs.svg";
import NodeJsSvg from "../Images/Skills/Backend/NodeJs.svg";
import SSTSvg from "../Images/Skills/Backend/SST.png";
import AWSSvg from "../Images/Skills/Backend/AWS.svg";
import FigmaSvg from "../Images/Skills/Technologies/Figma.svg";
import GithubSvg from "../Images/Skills/Technologies/Github.svg";
import VsCodeSvg from "../Images/Skills/Technologies/VsCode.svg";

const Projects = [
  {
    name: "Gymnaism",
    description:
      "This is Gym Website where you can have the videos and courses for gyming",
    id: "gymnaism",
    githubLink: "https://github.com/Airbornharsh/Gymnaism",
    type: "Website",
    isWebsite: true,
    webLink: "https://gymnaism.netlify.app",
    technologies: [
      { name: "JavaScript", img: JavascriptSvg },
      { name: "React", img: ReactSvg },
      { name: "Aws", img: AWSSvg },
      { name: "Tailwind CSS", img: TailwindCssSvg },
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
      { name: "JavaScript", img: JavascriptSvg },
      { name: "Next Js", img: NextJsSvg },
      { name: "Tailwind CSS", img: TailwindCssSvg },
      { name: "Flutter", img: FlutterSvg },
    ],
  },
];

export default Projects;
