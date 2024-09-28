import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="main-layout min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
