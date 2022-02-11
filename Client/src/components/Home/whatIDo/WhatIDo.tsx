import Button from "../../UI/Button";

import img2 from "../../../assets/images/img2.jpg";
import line from "../../../assets/svgs/line.svg";

const WhatIDo = () => {
  return (
    <div data-aos="fade-up" className="lg:flex">
      <img
        className="hidden lg:flex lg:flex-1 max-h-screen object-cover"
        src={img2}
        alt="img2"
      ></img>
      <div
        id="whatIDo"
        className="flex-1 flex flex-col justify-evenly items-end"
      >
        <div className="flex space-x-2">
          <h6 className="text-primary font-roboto py-4 text-lg">What I Do</h6>
          <img src={line} alt="line"></img>
        </div>
        <div>
          <h1 className="text-right text-4xl font-roboto m-auto">
            I enjoy creating delightful,
            <br /> human-centered digital experiences.
          </h1>
        </div>
        <div>
          <p className="text-right font-medium m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad mini Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <Button text="View My Work" />
      </div>
    </div>
  );
};
export default WhatIDo;
