import React from "react";
import Image from "next/image";
import HomeSvg from "../utils/Images/Nav/Home.svg";
import AboutSvg from "../utils/Images/Nav/about.svg";
import SkillSvg from "../utils/Images/Nav/skill.svg";
import ProjectSvg from "../utils/Images/Nav/project.svg";
import SocialSvg from "../utils/Images/Nav/social.svg";
const NavBar = () => {
  return (
    <div className="fixed left-0 w-12 max500:w-screen bg-[#232432] rounded-r-xl flex justify-center items-center z-10 max500:bottom-0 max500:rounded-r-none max500:rounded-t-xl max800:z-20 bottom-[33vh]">
      <ul className="flex flex-col my-4 max500:justify-around max500:flex-row w-[100%]">
        <li
          className={`w-12 flex justify-center py-3 max500:py-1`}
          // className={`w-12 flex justify-center bg-[#313246] py-3 max500:py-1`}
        >
          <a href={"#home"}>
            <Image src={HomeSvg} height={"30"} alt="Navigate to Home section" />
          </a>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <a href={"#about"}>
            <Image src={AboutSvg} height={"30"} alt="Navigate to About section" />
          </a>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <a href={"#experience"}>
            <Image src={AboutSvg} height={"30"} alt="Navigate to Experience section" />
          </a>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <a href={"#skills"}>
            <Image src={SkillSvg} height={"30"} alt="Navigate to Skills section" />
          </a>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <a href={"#projects"}>
            <Image src={ProjectSvg} height={"30"} alt="Navigate to Projects section" />
          </a>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <a href={"#social"}>
            <Image src={SocialSvg} height={"30"} alt="Navigate to Social section" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
