import React from "react";
import Image from "next/image";

const SkillItem = ({ svg, name }) => {
  return (
    <li className="flex items-center gap-2">
      <p>•</p>
      <Image src={svg} height="30"/>
      <p className="font-thin">{name}</p>
    </li>
  );
};

export default SkillItem;
