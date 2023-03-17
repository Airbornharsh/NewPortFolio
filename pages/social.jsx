import React from "react";
import Wrapper1 from "../components/Wrapper1";
import Image from "next/image";
import GithubSvg from "../utils/Images/Social/Github.svg";
import InstagramSvg from "../utils/Images/Social/Instagram.svg";
import LinkedinSvg from "../utils/Images/Social/Linkedin.svg";
import TwitterSvg from "../utils/Images/Social/Twitter.svg";
import MailSvg from "../utils/Images/Social/Mail.png";
import Link from "next/link";

const social = () => {
  return (
    <Wrapper1>
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
              href={"harshkeshri1234567@gmail.com"}
              className="flex items-center gap-3"
              target={"_blank"}
            >
              <Image src={MailSvg} height="30" />
              <p className="text-[1.2rem] ">Mail</p>
            </a>
          </li>
        </ul>
      </div>
    </Wrapper1>
  );
};

export default social;
