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
    bg-background
    text-foreground
    dark:bg-olive
    dark:text-cream
  "
    >
      <Header />

      <Navbar />

      <main className="flex-1">
        <div className="site-container py-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
