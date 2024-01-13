"use client";

import { signOut } from "next-auth/react";

// styles
import styles from "@/module/LogoutButton.module.css";

// icons
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  const logoutHandler = () => {
    signOut();
  };

  return (
    <button className={styles.button} onClick={logoutHandler}>
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
