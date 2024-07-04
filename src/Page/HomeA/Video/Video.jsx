
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import video from "../../../assets/image/30_wind_plus_1365_E_taisting_preview.mp4";
const Video = () => {
  return (

    <div className="hero">
      <video className="banner-video" autoPlay loop muted>
        <source src={video} />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">WELCOME VIDE STUDIO</h1>
          <p className="mb-5">
            There are many variations of passages of
            Lorem Ipsum availablebut the majority
            have suffered alteration.
          </p>
        
          <li> <link rel="stylesheet" href="" />
          <MdOutlineSlowMotionVideo className="text-8xl text-indigo-800"></MdOutlineSlowMotionVideo>
          </li>
        </div>
      </div>
    </div>

  );
};

export default Video;