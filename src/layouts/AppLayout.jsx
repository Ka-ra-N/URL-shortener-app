import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main>
        {/* Header */}
        <Outlet />
      </main>
      <footer>{/* Footer */}</footer>
    </div>
  );
};

export default AppLayout;
