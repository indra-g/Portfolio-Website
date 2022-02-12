import { Link } from "react-router-dom";

import Button from "../../UI/Button";
import line from "../../../assets/svgs/line.svg";

const WhatIDoText: React.FC = () => {
  return (
    <div
      className="flex-1 flex flex-col justify-evenly items-end h-screen lg:border-b lg:border-black"
    >
      <div className="flex space-x-2 mr-5 md:mr-20">
        <h6 className="text-primary font-roboto py-4 text-lg">What I Do</h6>
        <img src={line} alt="line"></img>
      </div>
      <div className="mx-5 md:mr-20">
        <h1 className="text-right  text-3xl md:text-4xl font-roboto">
          I enjoy creating delightful,
          <br /> human-centered digital experiences.
        </h1>
      </div>
      <div className="w-4/5 md:w-1/2 mx-5 md:mr-20">
        <p className="text-right font-medium m-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          mini Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <Link className="mx-5 md:mr-20" to="/projects">
        <Button text="View My Work" />
      </Link>
    </div>
  );
};
export default WhatIDoText;
