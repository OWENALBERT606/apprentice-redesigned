
import NGODashboard from "@/components/dashboard/DashboardMain";
import DashboardMain from "@/components/dashboard/DashboardMain";
import OverViewCard from "@/components/OverViewCard";
import { DashboardWelcome } from "@/components/WelcomeBanner";
import { getAuthenticatedUser } from "@/config/useAuth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await getAuthenticatedUser();
  return (
    <main>
      <NGODashboard />
    </main>
  );
}
