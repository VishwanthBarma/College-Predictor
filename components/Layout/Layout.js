import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
