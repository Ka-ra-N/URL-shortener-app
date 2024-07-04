import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="2xl:container">
      <header>
        <Header />
      </header>
      <main className="min-h-screen">
        {/* Header */}
        <Outlet />
      </main>
      <footer className="text-center p-5 text-white bg-violet-800">
        <div>Footer for our page</div>
      </footer>
    </div>
  );
};

export default AppLayout;
