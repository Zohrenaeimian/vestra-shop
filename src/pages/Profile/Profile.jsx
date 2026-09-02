import ProfileSidebar from "../../components/profile/ProfileSidebar";
import Navbar from "../../components/layout/Navbar/Navbar";
import Header from "../../components/layout/Header/Header";
import Dashboard from "../../components/profile/Content/Dashboard/Dashboard";

function Profile() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Navbar />
      <div className="site-container py-6 sm:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <ProfileSidebar />

          <main className="flex-1">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Profile;
