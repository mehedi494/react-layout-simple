import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Siderbar/Sidebar";


const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;