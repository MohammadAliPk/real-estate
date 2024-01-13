import React from "react";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// styles
import styles from "@/layout/DashboardSidebar.module.css";

// icons
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import LogoutButton from "@/module/LogoutButton";

interface Children {
  children: React.ReactNode;
}

interface ISession {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}

async function DashboardSidebar({ children }: Children) {
  const session = (await getServerSession(authOptions)) as ISession | undefined;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {session?.user?.email ? (
          <p>{session.user.email}</p>
        ) : (
          <p>No email found in session</p>
        )}
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
