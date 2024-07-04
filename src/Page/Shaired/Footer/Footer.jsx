import { FaInstagram } from 'react-icons/fa';
import icon from '../../../assets/image/logo.png';
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FiTwitter } from 'react-icons/fi';
import './Footers.css'
const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content  p-10">
      <div className=" grid-flow-col  items-center gap-x-60 ">
        <div>
          <img src={icon} alt="" />
        </div>
        <div className='flex' >
          <div className="containerF ">
            <TiSocialFacebook className='boxF text-5xl'></TiSocialFacebook>
          </div>
          <div className="containerF">
            <TiSocialLinkedin className='boxF text-5xl'></TiSocialLinkedin>
          </div>
          <div className="containerF">
            <FaInstagram className='boxF text-5xl'></FaInstagram>
          </div>
          <div className="containerF">
            <FiTwitter className='boxF text-5xl'></FiTwitter>
          </div>
        </div>

        <div >
          <p>Copyright © 2022 Rainbow-Themes. All<br /> Rights Reserved.</p>
        </div>
      </div>
      {/* <aside className="grid-flow-col items-center">

        <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
      </aside> */}
    </footer>
  );
};

export default Footer;