import ProfileSidebar from "../../components/profile/ProfileSidebar";
import Navbar from "../../components/layout/Navbar/Navbar";
import Header from "../../components/layout/Header/Header";
import Dashboard from "../../components/profile/Content/Dashboard/Dashboard";

function Profile() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="site-container py-8">
        <div className="flex items-start gap-6">
          <ProfileSidebar />

          <main className="flex-1">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
}

export default Profile;
