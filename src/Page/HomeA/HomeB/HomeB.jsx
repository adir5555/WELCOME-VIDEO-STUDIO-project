import About from "../About/About";
import Aklima from "../Aklima/Aklima";
import Latest from "../Latest/Latest";
import LogoDi from "../LogoDi/LogoDi";


import OurWorks from "../OurWorks/OurWorks";
import Services from "../Services/Services";
import SwiperSl from "../SwiperSlide/SwiperSl";

import Video from "../Video/Video";


const HomeB = () => {
  return (
    <div>
      <Video></Video>
      <div className="max-w-screen-lg mx-auto">
        <About></About>
      </div>
      <Services></Services>
      <OurWorks></OurWorks>
      <SwiperSl></SwiperSl>
      <Aklima></Aklima>
      <Latest></Latest>
      <LogoDi></LogoDi>
     
     

    </div>
  );
};

export default HomeB;