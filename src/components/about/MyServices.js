import React from "react";
import { GiArtificialIntelligence } from 'react-icons/gi';
import { FaAppStoreIos } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I specialize in building dynamic, responsive web applications using HTML5, CSS, JavaScript, and frameworks like React, Express. With backend expertise in Node.js and databases like MySQL and MongoDB, 
        I deliver seamless user experiences and scalable solutions, from API development to deployment."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Mobile Application"
        subTitle="With experience in Android and iOS app development, I build mobile applications that prioritize functionality and user experience.
         My solutions are modern, mobile-ready, and integrated with cloud services for seamless performance across devices, tailored to meet client needs efficiently."
      />
      <ServicesCard
        icons={<GiArtificialIntelligence />}
        title="Machine Learning"
        subTitle="I have hands-on experience developing machine learning models using TensorFlow, PyTorch, scikit-learn, NumPy, and Matplotlib. My projects include predictive models like an antimicrobial resistance system and a diabetes detection model, with expertise in deep learning (CNNs, ANNs) and YOLO for object detection. 
        I also deploy models using Flask for seamless web integration."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Artificial Intelligence"
        subTitle="I specialize in AI and ML, working on real-world solutions like an AI image generator using MERN and DALL-E.
         My expertise includes LLMs, generative AI, and prompt engineering, with a focus on model training and optimization to create intelligent systems that enhance decision-making and automate tasks."
      />
    </div>
  );
};

export default MyServices;
