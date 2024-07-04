import { Outlet } from "react-router-dom";
import Nabvar from "../Page/Shaired/Nabvar/Nabvar";
import Footer from "../Page/Shaired/Footer/Footer";


const Main = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;