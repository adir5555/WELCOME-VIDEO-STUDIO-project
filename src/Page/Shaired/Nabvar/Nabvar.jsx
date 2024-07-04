import { Link } from "react-router-dom";
import image from "../../../assets/image/logo.png";



const Nabvar = () => {
  const navOption = <>
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/Service'>Service</Link></li>
    <li> <Link to='/About'>About</Link></li>
    <li> <Link to='/Pages'>Pages</Link></li>
    <li> <Link to='/Blocks'>Blocks</Link></li>
    <li> <Link to='/Contact'>Contact</Link></li>


  </>
  return (
    // <div className="navbar bg-base-100">
    <div className="navbar z-10 max-w-screen-xl fixed text-white   
    ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navOption}
          </ul>
        </div>
        <li><img src={image} alt="" /></li>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOption}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn uppercase">Buy Now</a>
      </div>
    </div>
  );
};

export default Nabvar;