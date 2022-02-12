import Intro from "../components/Home/intro/Intro";
import WhatIDo from "../components/Home/whatIDo/WhatIDo";
import MyExpertise from "../components/Home/expertise/MyExpertise";
import RecentWork from "../components/Home/recentWork/RecentWork";

const Home = () => {
  return (
    <div>
      <Intro />
      <WhatIDo />
      <MyExpertise />
      <RecentWork />
    </div>
  );
};

export default Home;
