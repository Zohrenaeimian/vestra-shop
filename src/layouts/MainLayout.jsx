import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function MainLayout() {
  return (
    <div
      className="
    flex
    min-h-screen
    flex-col
    bg-gray-100
    text-slate-900
    dark:bg-slate-950
    dark:text-white
  "
    >
      <Header />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
