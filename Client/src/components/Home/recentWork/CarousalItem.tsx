import codingClub from "../../../assets/pngs/CodingClub.png";
import { Link } from "react-router-dom";

const CarouselItems = () => {
  return (
    <div className="h-full flex flex-col justify-evenly lg:flex lg:flex-row items-center lg:justify-center">
      <div className="w-72 order-2 text-center lg:text-left lg:order-1 align-top">
        <h1 className="text-3xl lg:text-5xl my-2">Psg Tech Coding Club </h1>
        <p className="text-gray-400 text-sm my-2">WEBSITE</p>
        <p className=" my-2">2021</p>
        <Link
          className="text-secondary hover:underline my-2"
          to="/ProjectDetails"
        >
          View Project
        </Link>
      </div>
      <div className="hidden lg:flex w-80 h-80 rounded-full bg-secondary -z-10 absolute"></div>
      <img
        className="h-2/5 order-1 lg:order-2"
        src={codingClub}
        alt="codinglcubimg"
      />
    </div>
  );
};

export default CarouselItems;
