import NavBar from "../components/Header/NavBar";
import img1 from "../assets/img1.jpg";

const Home = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="flex flex-col lg:flex-grow">
        <NavBar />
      </div>
      <img
        className="min-h-screen w-1/2 hidden lg:flex"
        src={img1}
        alt="img1"
      ></img>
    </div>
  );
};

export default Home;
