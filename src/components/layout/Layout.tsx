import React, { CSSProperties } from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

type Children = {
  children: React.ReactNode;
};

type Style = {
  minHeight: string;
};

function Layout({ children }: Children) {
  const style: Style = {
    minHeight: "700px",
  };
  return (
    <>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
