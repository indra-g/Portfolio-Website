import webImg from "../../../assets/pngs/webImg.png";
// import typing from "../../../assets/pngs/typing.png";
import chilli from "../../../assets/pngs/chilli.png";
import timeManagement from "../../../assets/pngs/schedule.png";
import uiImg from "../../../assets/pngs/uiImg.png";

const Grid = () => {
  return (
    <div
      style={{ minHeight: "80vh" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-0 md:mx-10 lg:mx-20 my-10 md:my-0"
    >
      <div className="flex items-center space-x-5 md:space-x-10 justify-center">
        <img className="h-20 w-20 md:h-24 md:w-24" src={webImg} alt="webImg" />
        <div className="w-3/5">
          <h1 className="inline-block font-medium md:text-xl mb-4">
            Web Development
          </h1>
          <p className="text-md font-roboto">
            I'm a web developer with a flair for creating elegant solutions in
            the least amount of time. I have developed a lot of interactive and
            cool-looking websites. Passionate about software architecture and
            cloud computing.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-5 md:space-x-10 justify-center">
        <img className="h-20 w-20 md:h-24 md:w-24" src={uiImg} alt="webImg" />
        <div className="w-3/5">
          <h1 className="inline-block font-medium md:text-xl mb-4">
            UI/UX Design
          </h1>
          <p className="text-md font-roboto">
            I always had a passion for design since my childhood. I have
            designed clean, pixel-perfect interfaces for our website and mobile
            products. I have translated concepts into user flows, wireframes,
            and prototypes that lead to intuitive user experiences.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-5 md:space-x-10 justify-center">
        <img
          className="h-20 w-20 md:h-24 md:w-24"
          src={timeManagement}
          alt="webImg"
        />
        <div className="w-3/5">
          <h1 className="inline-block font-medium md:text-xl mb-4">
            Time Management
          </h1>
          <p className="text-md font-roboto">
            I always stay organized which helps me to maintain a clear picture
            of what I need to complete and when. I find ways to do things
            quicker by sourcing new transcription software and making a new
            system for sorting things.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-5 md:space-x-10 justify-center">
        <img className="h-20 w-20 md:h-24 md:w-24" src={chilli} alt="webImg" />
        <div className="w-3/5">
          <h1 className="inline-block font-medium md:text-xl mb-4">
            Hot Wings Challenge
          </h1>
          <p className="text-md font-roboto">
            But my best skill is actually eating hot wings.I am undisputed king
            of hot wings challenges. Cheetos and kurkure are my favorite snacks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
