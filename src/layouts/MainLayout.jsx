import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Navbar from "../components/layout/Navbar/Navbar";
import SearchBar from "../components/layout/SearchBar/SearchBar";
import Footer from "../components/layout/Footer/Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground dark:bg-olive dark:text-cream">
      <div className="relative z-30">
        <Header />
        <Navbar />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex translate-y-[45%] justify-center px-4">
          <div className="pointer-events-auto w-full max-w-2xl md:max-w-3xl">
            <SearchBar />
          </div>
        </div>
      </div>

      <main className="flex-1 pt-10 md:pt-12">
        <div className="site-container pb-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
