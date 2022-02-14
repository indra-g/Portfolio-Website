import Footer from "./Footer";

import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

import line from "../../../assets/svgs/line.svg";

const RecentWork = () => {
  return (
    <div data-aos="fade-right" className="min-h-screen">
      <div className="flex justify-between mx-5 md:mx-20 py-10 lg:py-16">
        <div className="flex items-center space-x-2">
          <img src={line} alt="line"></img>
          <h6 className="text-primary font-roboto md:text-lg">Recent Works</h6>
        </div>
        <Link
          to="/projects"
          className="flex text-gray-400 font-regular space-x-2 hover:text-gray-700 transition duration-300 font-roboto items-center"
        >
          <LayersOutlinedIcon />
          <h6>All Projects</h6>
        </Link>
      </div>
      <div style={{ height: "65vh" }} className="flex items-center">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};
export default RecentWork;
