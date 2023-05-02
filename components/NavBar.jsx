import React from "react";
import Image from "next/image";
import HomeSvg from "../utils/Images/Nav/Home.svg";
import AboutSvg from "../utils/Images/Nav/about.svg";
import SkillSvg from "../utils/Images/Nav/skill.svg";
import ProjectSvg from "../utils/Images/Nav/project.svg";
import SocialSvg from "../utils/Images/Nav/social.svg";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed left-0 w-12 max500:w-screen bg-[#232432] rounded-r-xl flex justify-center items-center z-10 max500:bottom-0 max500:rounded-r-none max500:rounded-t-xl max800:z-20 bottom-[33vh]">
      <ul className="flex flex-col my-4 max500:justify-around max500:flex-row w-[100%]">
        <li
          className={`w-12 flex justify-center py-3 max500:py-1`}
          // className={`w-12 flex justify-center bg-[#313246] py-3 max500:py-1`}
        >
          <Link href={"/"}>
            <Image src={HomeSvg} height={"30"}></Image>
          </Link>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <Link href={"/about"}>
            <Image src={AboutSvg} height={"30"}></Image>
          </Link>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <Link href={"/skills"}>
            <Image src={SkillSvg} height={"30"}></Image>
          </Link>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <Link href={"/projects"}>
            <Image src={ProjectSvg} height={"30"}></Image>
          </Link>
        </li>
        <li className={`w-12 flex justify-center py-3 max500:py-1`}>
          <Link href={"/social"}>
            <Image src={SocialSvg} height={"30"}></Image>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
