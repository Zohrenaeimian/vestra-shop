import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h1>Header</h1>

      <main>
        <Outlet />
      </main>

      <h1>Footer</h1>
    </>
  );
}

export default MainLayout;