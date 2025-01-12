import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[69px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
