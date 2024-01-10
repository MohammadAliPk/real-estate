import LoginPage from "@/template/LoginPage";
import { redirect } from "next/navigation";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Login() {
  const session = (await getServerSession(authOptions)) as Session;
  if (session) {
    redirect("/");
  }
  return <LoginPage />;
}

export default Login;
