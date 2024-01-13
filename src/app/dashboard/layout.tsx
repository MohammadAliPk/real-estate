import DashboardSidebar from "@/layout/DashboardSidebar";
import React from "react";

interface Children {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Children) {
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default DashboardLayout;
