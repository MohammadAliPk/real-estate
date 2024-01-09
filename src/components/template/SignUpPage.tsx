"use client";

import styles from "@/template/SignUpPage.module.css";
import toastHandler from "@/utils/toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toastHandler("error", "لطفا تمامی فیلد ها را پر کنید");
    }

    if (password !== rePassword) {
      toastHandler("error", "رمز عبور با تکرار آن برابر نیست");
    }

    try {
      setIsLoading(true);
      const res = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
      });
      if (res.status === 201) {
        toastHandler("success", "ثبت نام با موفقیت انجام شد");
        setIsLoading(false);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err: any) {
      toastHandler("error", err.response.data.error);
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label htmlFor="email">ایمیل :</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">رمز عبور :</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="rePassword">تکرار رمز عبور :</label>
        <input
          type="text"
          id="rePassword"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {isLoading ? (
          <ThreeDots
            color="#fff"
            height={45}
            ariaLabel="mutating-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button onClick={submitHandler}>ثبت نام</button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
    </div>
  );
}

export default SignUpPage;
