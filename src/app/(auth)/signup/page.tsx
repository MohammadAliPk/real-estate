import SignUpPage from "@/template/SignUpPage";
import { redirect } from "next/navigation";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function SignUp() {
  const session = (await getServerSession(authOptions)) as Session;
  if (session) {
    redirect("/");
  }
  return <SignUpPage />;
}

export default SignUp;
