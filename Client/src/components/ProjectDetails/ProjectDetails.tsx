import { useParams, Link } from "react-router-dom";

import CodingClub from "../../assets/pngs/CodingClub.png";
import NavBar from "../NavBar";
import Footer from "../Footer";

const ProjectDetails: React.FC = (props) => {
  const { projectId } = useParams();
  return (
    <>
      <NavBar text="Making ideas come alive on the internet" />
      <div className="flex flex-col mx-auto items-center py-10">
        <div className="w-1/3">
          <div className="flex items-center space-x-4">
            <div className="h-5 w-5 rounded-full flex-shrink-0 bg-secondary"></div>
            <h1 className="text-4xl font-medium font-roboto">
              Psg Tech Coding Club Website
            </h1>
          </div>
          <div className="ml-9">
            <p className="my-4 text-gray-500 font-medium font-roboto">
              Summary
            </p>
            <p className="my-4 font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
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
          className="my-10 relative right-32 h-96"
          src={CodingClub}
          alt="projectImg"
        />
        <p className="my-4 font-roboto w-1/3 relative right-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <img
          className="my-10 relative left-24 h-96"
          src={CodingClub}
          alt="projectImg"
        />
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetails;
