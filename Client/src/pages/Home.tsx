import Intro from "../components/Home/intro/Intro";
import WhatIDo from "../components/Home/whatIDo/WhatIDo";
import MyExpertise from "../components/Home/expertise/MyExpertise";
import RecentWork from "../components/Home/recentWork/RecentWork";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Contact />
      <Intro />
      <WhatIDo />
      <MyExpertise />
      <RecentWork />
    </div>
  );
};

export default Home;
