import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { FaLinkedin } from 'react-icons/fa';

import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="3x Hackathon Winner" />
      <FunFactCard icon={<SiAntdesign />} des="10 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100 hours of coding" />
      <FunFactCard icon={<FaLinkedin />} des="3k LinkedIn" />

    </div>
  );
};

export default FunFact;
