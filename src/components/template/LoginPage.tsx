"use client";

import styles from "@/template/SignUpPage.module.css";
import toastHandler from "@/utils/toast";
import { SignInResponse, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toastHandler("error", "لطفا تمامی فیلد ها را پر کنید");
      return;
    }

    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res?.error) {
        toastHandler("success", "با موفقیت وارد شدید");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toastHandler("error", res.error || "خطا در ورود");
      }
    } catch (err: any) {
      toastHandler("error", "خطا در ورود");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
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
        {isLoading ? (
          <ThreeDots
            color="#fff"
            height={45}
            ariaLabel="mutating-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button onClick={submitHandler}>ورود</button>
        )}
      </form>
      <p>
        هنوز حساب کاربری نساخته اید؟
        <Link href="/signup">ثبت نام</Link>
      </p>
    </div>
  );
}

export default LoginPage;
