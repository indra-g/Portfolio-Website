import webImg from "../../../assets/pngs/webImg.png";
import uiImg from "../../../assets/pngs/uiImg.png";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-4/5 gap-10 lg:gap-0 md:mx-10 lg:mx-20 my-10 md:my-0">
      <div className="flex items-center space-x-5 md:space-x-10 justify-center">
        <img className="h-20 w-20 md:h-24 md:w-24" src={webImg} alt="webImg" />
        <div className="w-3/5">
          <h1 className="inline-block font-medium mb-4">Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad mini Ut enim ad
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-5 md:space-x-10 justify-center">
        <img className="h-20 w-20 md:h-24 md:w-24" src={uiImg} alt="webImg" />
        <div className="w-3/5">
          <h1 className="inline-block font-medium mb-4">UI/UX Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad mini Ut enim ad
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-5 md:space-x-10 justify-center">
        <img className="h-20 w-20 md:h-24 md:w-24" src={uiImg} alt="webImg" />
        <div className="w-3/5">
          <h1 className="inline-block font-medium mb-4">UI/UX Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad mini Ut enim ad
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-5 md:space-x-10 justify-center">
        <img className="h-20 w-20 md:h-24 md:w-24" src={webImg} alt="webImg" />
        <div className="w-3/5">
          <h1 className="inline-block font-medium mb-4">Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad mini Ut enim ad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
