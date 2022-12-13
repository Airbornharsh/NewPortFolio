import React from "react";
import Image from "next/image";
import Wrapper1 from "../components/Wrapper1";
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
import NodeJsSvg from "../utils/Images/Skills/Backend/NodeJs.svg";
import MongoDbSvg from "../utils/Images/Skills/Backend/MongoDb.png";
import SSTSvg from "../utils/Images/Skills/Backend/SST.png";
import AWSSvg from "../utils/Images/Skills/Backend/AWS.svg";
import FigmaSvg from "../utils/Images/Skills/Technologies/Figma.svg";
import GithubSvg from "../utils/Images/Skills/Technologies/Github.svg";
import VsCodeSvg from "../utils/Images/Skills/Technologies/VsCode.svg";

import SkillItem from "../components/SkillItem";

const skills = () => {
  return (
    <Wrapper1>
      <div className="flex items-Start pt-20 h-[100%] gap-16 w-[80vw] max-w-[70rem] z-10 flex-col overflow-hidden max500:w-[90vw]">
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
                <SkillItem svg={HtmlSvg} name={"Tailwind Css"} />
                <SkillItem svg={TailwindCssSvg} name={"Tailwind Css"} />
                <SkillItem svg={ReactSvg} name={"React"} />
                <SkillItem svg={FlutterSvg} name={"Flutter"} />
                <SkillItem svg={NextJsSvg} name={"Next Js"} />
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
    </Wrapper1>
  );
};

export default skills;
