import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen">
        {/* Header */}
        <Outlet />
      </main>
      <footer className="text-center p-5 text-white bg-gray-800">
        <div>Footer for our page</div>
      </footer>
    </div>
  );
};

export default AppLayout;
