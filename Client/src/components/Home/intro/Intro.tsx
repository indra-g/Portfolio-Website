import NavBar from "./NavBar";
import IntroText from "./IntroText";

import img1 from "../../../assets/images/img1.jpg";

const Intro: React.FC = () => {
  return (
    <div className="lg:flex">
      <div className="flex h-screen flex-col lg:flex-1">
        <NavBar />
        <IntroText />
      </div>
      <img
        className="max-h-screen object-cover lg:flex-1 hidden lg:flex overflow-x-auto"
        src={img1}
        alt="img1"
      ></img>
    </div>
  );
};
export default Intro;
