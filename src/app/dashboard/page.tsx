import DashboardPage from "@/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { connectDB } from "@/utils/connectDB";
import User from "@/models/User";

interface ISession {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}

async function Dashboard() {
  const session = (await getServerSession(authOptions)) as ISession | undefined;

  try {
    await connectDB();
  } catch (err) {
    console.log(err);
  }

  const userEmail = session?.user?.email;

  const user = await User.findOne({ email: userEmail });

  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;
