import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[69px] min-h-[calc(100vh - 269px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
