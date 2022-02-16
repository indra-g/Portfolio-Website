import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useHttp from "../../hooks/useHttp";

import NavBar from "../Peripherals/NavBar";
import ProjectBody from "./ProjectBody";
import Footer from "../Peripherals/Footer";

const ProjectDetails: React.FC = (props) => {
  const { projectId } = useParams();
  const { error, isLoading, getdata, data }: any = useHttp();
  const url = `/api/projectDetails/${projectId}`;

  useEffect(() => {
    getdata(url);
  }, [getdata, url]);

  let content;
  let projects;

  if (error) {
    content = <h1 className="font-roboto font-semibold text-2xl">Something went wrong</h1>;
  }
  if (isLoading) {
    content = <CircularProgress />;
  }
  if (data) {
    projects = (
      <ProjectBody
        name={data.name}
        id={data.id}
        description1={data.description1}
        projectLink={data.githubLink}
        goToSiteLink={data.websiteLink}
        description2={data.description2}
        img1Link={data.img1}
        img2Link={data.img2}
      />
    );
  }

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 116px)" }}>
        <NavBar text="Making ideas come alive on the internet" />
        {!projects && (
          <div
            style={{ minHeight: "71vh" }}
            className="flex justify-center items-center"
          >
            {content}
          </div>
        )}
        {projects && projects}
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
