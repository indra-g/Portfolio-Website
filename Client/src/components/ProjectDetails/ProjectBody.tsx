import { useEffect, useState } from "react";

const ProjectBody: React.FC<{
  id: string;
  name: string;
  description1: string;
  projectLink: string;
  goToSiteLink: string;
  goToDesign: string;
  description2: string;
  img1Link: string;
  img2Link: string;
  downloadApp: string;
}> = (props) => {
  const [showGoToSite, setShowGoToSite] = useState(false);
  const [showGoToDesign, setShowGoToDesign] = useState(false);
  const [showDownloadApp, setShowDownloadApp] = useState(false);
  const { goToSiteLink, goToDesign, downloadApp } = props;
  useEffect(() => {
    if (goToSiteLink) {
      setShowGoToSite(true);
    }
    if (goToDesign) {
      setShowGoToDesign(true);
    }
    if (downloadApp) {
      setShowDownloadApp(true);
    }
  }, [downloadApp, goToDesign, goToSiteLink]);
  return (
    <div className="flex flex-col mx-auto items-center pt-10 pb-2">
      <div className="w-4/5 md:w-1/2 lg:w-2/5">
        <div className="flex items-center space-x-4">
          <div className="h-5 w-5 rounded-full flex-shrink-0 bg-secondary"></div>
          <h1 className="text-3xl md:text-4xl font-medium font-roboto">
            {props.name}
          </h1>
        </div>
        <div className="ml-9">
          <p className="my-4 text-gray-500 font-medium font-roboto">Summary</p>
          <p className="my-4 font-roboto">{props.description1}</p>
          <div className="flex space-x-6 my-4">
            <a
              href={props.projectLink}
              target="_blank"
              rel="noreferrer noopener"
              className="text-secondary hover:underline font-roboto"
            >
              Go to project
            </a>

            {showGoToSite && (
              <a
                href={props.goToSiteLink}
                target="_blank"
                rel="noreferrer noopener"
                className="text-secondary hover:underline font-roboto"
              >
                Go to site
              </a>
            )}
            {showGoToDesign && (
              <a
                href={props.goToDesign}
                target="_blank"
                rel="noreferrer noopener"
                className="text-secondary hover:underline font-roboto"
              >
                Go to figma
              </a>
            )}
            {showDownloadApp && (
              <a
                href={props.downloadApp}
                className="text-secondary hover:underline font-roboto"
              >
                Download app
              </a>
            )}
          </div>
        </div>
      </div>
      <img
        className="my-10 lg:relative lg:right-32 h-52 md:h-72 lg:h-96"
        src={props.img1Link}
        alt="projectImg"
      />
      <p className="my-4 font-roboto w-4/5 ml-9 md:w-1/2 lg:w-2/5 lg:relative lg:right-24">
        {props.description2}
      </p>
      <img
        className="my-10 lg:relative lg:left-24 h-52 md:h-72 lg:h-96"
        src={props.img2Link}
        alt="projectImg"
      />
    </div>
  );
};

export default ProjectBody;
