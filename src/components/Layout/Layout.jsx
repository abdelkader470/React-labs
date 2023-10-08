import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="" style={{ backgroundColor: "#2c0047" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
