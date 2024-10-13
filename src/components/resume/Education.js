import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="AI Trainer"
          subTitle="Outlier AI"
          des=""
        />
        <ResumeCard
          badge="Jan 24 - Jul 24"
          title="Software Development Intern"
          subTitle="Prodt Consulting Services"
          des=""
        />
        <ResumeCard
          badge="June 2022 - July 2023"
          title="Machine Learning Research Intern"
          subTitle="Clavictor Academy Pvt ltd"
          des=""
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019 - 2024"
          title="Vellore Institute of Technology"
          subTitle="Bhopal, India"
          des="MTech Computer Science & Engineering spl Artificial Intelligence"
        />
        <ResumeCard
          badge="2017 - 2019"
          title="Fergusson College"
          subTitle="Pune, India"
          des="Intermediate"
        />
       
      </div>
    </div>
  );
};

export default Education;
