import React, { useState } from "react";
import Image from "next/image";

const ProjectTechItem = ({ img, name }) => {
  const [isHover, setIsHover] = useState(false);

  const ToggleHover = () => {
    setIsHover((e) => !e);
  };

  return (
    <li className="relative">
      <Image
        src={img}
        width="35"
        onMouseEnter={ToggleHover}
        onMouseLeave={ToggleHover}
      />
      {isHover && (
        <p className="bg-[#232432] px-1 py-1 rounded text-[0.6rem] absolute ">
          {name}
        </p>
      )}
    </li>
  );
};

export default ProjectTechItem;
