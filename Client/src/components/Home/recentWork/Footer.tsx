import emailLogo from "../../../assets/svgs/email.svg";
import githubLogo from "../../../assets/svgs/github-brand.svg";
import linkedInLogo from "../../../assets/svgs/linkedin-brand.svg";

const Footer = () => {
  return (
    <div className="text-center py-4 lg:py-0">
      <p className="my-2 font-roboto px-7">Let's connect</p>
      <p className="my-2 font-roboto px-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </p>
      <div className="flex items-center justify-center space-x-2 pt-1">
        <a href="https://github.com/indra-g">
          <img
            className="h-6 w-6 md:h-7 md:w-7"
            src={githubLogo}
            alt="githubLogo"
          />
        </a>
        <a href="https://www.linkedin.com/in/indra-shekar-g-31a3561ba/">
          <img
            className="h-6 w-6 md:h-7 md:w-7"
            src={linkedInLogo}
            alt="linkedInLogo"
          />
        </a>
        <button>
          <img
            className="h-7 w-7 md:h-8 md:w-8"
            src={emailLogo}
            alt="emailLogo"
          />
        </button>
      </div>
    </div>
  );
};
export default Footer;
