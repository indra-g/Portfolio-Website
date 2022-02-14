import Grid from "./Grid";

const MyExpertise = () => {
  return (
    <>
      <div data-aos="fade-right" className="min-h-screen ">
        <div className="text-center">
          <p className="text-gray-500 font-roboto font-medium tracking-widest text-sm p-5 pt-5 md:pt-10">
            MY SKILLS
          </p>
          <h1 className="text-4xl md:text-5xl font-medium md:py-5">
            My Expertise
          </h1>
        </div>
        <Grid />
      </div>
    </>
  );
};

export default MyExpertise;
