import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title=" Scholastic " subTitle="Achievements" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Winner UNESCO India-Africa"
            category="Hackathon 2022"
            image={workImgThree}
          />
          <ProjectsCard
            title="Semi-Finalist Virtusa Jatayu"
            category="Hackathon 2023"
            image={workImgOne}
          />
          <ProjectsCard
            title="Winning Moments"
            category="Competition"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Winning Moments"
            category="Competiton"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Winner Smart India"
            category="Hackathon 2022"
            image={workImgFour}
          />
          <ProjectsCard
            title="Amazon ML Challenge top 140"
            category="Competition"
            image={workImgSix}
          />
          <ProjectsCard
            title="Ideas & Blog"
            category=""
            image={workImgEight}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
