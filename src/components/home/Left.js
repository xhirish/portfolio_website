import React from "react";
import { FiMail } from 'react-icons/fi';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import CV from "../../assets/Shirish_Resume.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Software Developer", "Full Stack Developer", "AI/ML Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Shirish Waghmode</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
  <a
    href="https://github.com/xhirish" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-designColor duration-300 cursor-pointer text-xl"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/shirish-waghmode/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-designColor duration-300 cursor-pointer text-xl"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://twitter.com/your-username" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-designColor duration-300 cursor-pointer text-xl"
  >
    <AiFillTwitterCircle />
  </a>
  <a
    href="shirishwaghmode2001@gmail.com"
    className="hover:text-designColor duration-300 cursor-pointer text-xl"
  ><FiMail />

  </a>
</div>

        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill/>
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;