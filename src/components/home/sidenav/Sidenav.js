import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Developments</li>
        <li className="sidenavLi">E-commerce Website</li>
        <li className="sidenavLi">AMR Prediction using ML</li>
        <li className="sidenavLi">Portfolio Website</li>
        <li className="sidenavLi">Alpha Medic App Integrated with ML</li>
        <li className="sidenavLi">AI Image Genration Using MERN & DALL-E</li>
      </ul>
      <SidenavTitle title="U" subTitle="pdated Posts" />
      <ul>
        <li className="sidenavLi">AI Trainer at Outlier</li>
        <li className="sidenavLi">SOftware Development at ProDT</li>
        <li className="sidenavLi">
          Project Managment & Agile Methodology
        </li>
        <li className="sidenavLi">Hackathon and Development</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+91-9284931788</li>
        <li className="sidenavLi">shirishwaghmode2001@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav