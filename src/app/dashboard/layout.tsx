import DashboardSidebar from "@/layout/DashboardSidebar";
import { Session, getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface Children {
  children: React.ReactNode;
}

async function DashboardLayout({ children }: Children) {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session) {
    redirect("/login");
  }
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default DashboardLayout;
