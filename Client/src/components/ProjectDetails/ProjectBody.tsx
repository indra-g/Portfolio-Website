import { Link } from "react-router-dom";
import CodingClub from "../../assets/pngs/CodingClub.png";

const ProjectBody = () => {
  return (
    <div className="flex flex-col mx-auto items-center pt-10 pb-2">
      <div className="w-4/5 md:w-1/2 lg:w-2/5">
        <div className="flex items-center space-x-4">
          <div className="h-5 w-5 rounded-full flex-shrink-0 bg-secondary"></div>
          <h1 className="text-3xl md:text-4xl font-medium font-roboto">
            Psg Tech Coding Club Website
          </h1>
        </div>
        <div className="ml-9">
          <p className="my-4 text-gray-500 font-medium font-roboto">Summary</p>
          <p className="my-4 font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <div className="flex space-x-6 my-4">
            <Link
              to="./"
              className="text-secondary hover:underline font-roboto"
            >
              Go to project
            </Link>
            <Link
              to="./"
              className="text-secondary hover:underline font-roboto"
            >
              Go to Site
            </Link>
          </div>
        </div>
      </div>
      <img
        className="my-10 lg:relative lg:right-32 h-52 md:h-72 lg:h-96"
        src={CodingClub}
        alt="projectImg"
      />
      <p className="my-4 font-roboto w-4/5 ml-9 md:w-1/2 lg:w-2/5 lg:relative lg:right-32">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <img
        className="my-10 lg:relative lg:left-24 h-52 md:h-72 lg:h-96"
        src={CodingClub}
        alt="projectImg"
      />
    </div>
  );
};

export default ProjectBody;
