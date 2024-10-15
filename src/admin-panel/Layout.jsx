import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";


const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Admin Sidebar */}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />

      {/* Admin Header */}
      <div className="flex flex-1 flex-col">
        <Header setOpen={setOpenSidebar} />

        <main className=" bg-muted/40 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
