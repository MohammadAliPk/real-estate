import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import { connectDB } from "@/utils/connectDB";
import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthOptions {
  session: {
    strategy: SessionStrategy;
  };
  providers: any[];
}

interface Credentials {
  email: string;
  password: string;
}

interface IUser {
  _id: string;
  email: string;
  password: string;
  createdAt: string | Date;
}

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // @ts-ignore
      async authorize(credentials: Credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (err) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!email || !password) {
          throw new Error("لطفا اطلاعات را به درستی وارد کنید");
        }

        const user = await User.findOne({ email: email });

        const isValid: boolean = await verifyPassword(password, user.password);

        if (!user || !isValid) {
          throw new Error("نام کاربری یا رمز عبور اشتباه است");
        }

        return email;
      },
    }),
  ],
};

export default NextAuth(authOptions);
