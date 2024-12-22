import { Outlet } from "react-router-dom";
import StickyNavbar from "../../share/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <div className="mt-10 lg:max-w-[1340px] max-w-sm mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
