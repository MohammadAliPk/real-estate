import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

type ResponseData = {
  message?: string;
  error?: string;
};

interface UserData {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json<ResponseData>(
        { error: "لطفا اطلاعات معتبر وارد کنید!" },
        { status: 422 }
      );
    }

    const existingUser: boolean =
      (await User.findOne({ email: email })) || false;

    if (existingUser) {
      return NextResponse.json<ResponseData>(
        { error: "کاربری  با این اطلاعات وجود دارد!" },
        {
          status: 422,
        }
      );
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      return NextResponse.json<ResponseData>(
        {
          error: "لطفا یک ایمیل معتبر وارد کنید",
        },
        { status: 422 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json<ResponseData>(
        {
          error: "رمز عبور حداقل 8 رقم باشد",
        },
        { status: 422 }
      );
    }
    const hashedPassword: string = await hashPassword(password);

    const newUser = (await User.create({
      email: email,
      password: hashedPassword,
    })) satisfies UserData;

    return NextResponse.json<ResponseData>(
      {
        message: "ثبت نام با موفقیت انجام شد",
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json<ResponseData>(
      { error: "مشکلی در سرور رخ داد!" },
      {
        status: 500,
      }
    );
  }
}
