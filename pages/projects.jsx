import React, { useState } from "react";
import Link from "next/link";
import Wrapper1 from "../components/Wrapper1";
import Image from "next/image";
import LinkSvg from "../utils/Images/Projects/Link.svg";
import ExternalLinkSvg from "../utils/Images/Projects/ExternalLink.svg";
import Projects from "../utils/Data/Projects";
import OpenSvg from "../utils/Images/Projects/Open.svg";
import CloseSvg from "../utils/Images/Projects/Close.svg";
import Close_Svg from "../utils/Images/Projects/Close_.svg";
import ProjectTechItem from "../components/ProjectTechItem";

const projects = () => {
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
    <Wrapper1>
      <div className="flex items-Start pt-20 gap-16 w-[80vw] max-w-[70rem] z-10 flex-col max500:w-[90vw] min-h-screen">
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
                        {activeProject.name}
                      </p>
                      <Image src={LinkSvg} height="30" width="30" />
                    </Link>
                  ) : (
                    <p className="font-LexendPeta text-[1.3rem]">
                      {activeProject.name}
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
    </Wrapper1>
  );
};

export default projects;
