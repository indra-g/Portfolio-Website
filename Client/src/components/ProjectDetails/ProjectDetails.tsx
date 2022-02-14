import { useParams } from "react-router-dom";

import NavBar from "../Peripherals/NavBar";
import ProjectBody from "./ProjectBody";
import Footer from "../Peripherals/Footer";

const Dummy_ProjectDetails = {
  id: "p1",
  name: "Psg Tech Coding Club Website",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  projectLink: "",
  goToSiteLink: "",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  img1Link: "",
  img2Link: "",
};

const ProjectDetails: React.FC = (props) => {
  const { projectId } = useParams();
  return (
    <>
      <NavBar text="Making ideas come alive on the internet" />
      <ProjectBody
        name={Dummy_ProjectDetails.name}
        id={Dummy_ProjectDetails.id}
        summary={Dummy_ProjectDetails.summary}
        projectLink={Dummy_ProjectDetails.projectLink}
        goToSiteLink={Dummy_ProjectDetails.goToSiteLink}
        description={Dummy_ProjectDetails.description}
        img1Link={Dummy_ProjectDetails.img1Link}
        img2Link={Dummy_ProjectDetails.img2Link}
      />
      <Footer />
    </>
  );
};

export default ProjectDetails;
