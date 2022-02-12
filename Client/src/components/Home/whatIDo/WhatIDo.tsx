import WhatIDoText from "./WhatIDoText";

import img2 from "../../../assets/images/img2.jpg";

const WhatIDo = () => {
  return (
    <div id="whatIDo" data-aos="fade-right" className="lg:flex">
      <img
        className="hidden lg:flex lg:flex-1 max-h-screen object-cover"
        src={img2}
        alt="img2"
      ></img>
      <WhatIDoText />
    </div>
  );
};
export default WhatIDo;
