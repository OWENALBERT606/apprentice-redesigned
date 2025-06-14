import { getAllBanners } from "@/actions/banners";
import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm";
import LoginForm from "@/components/Forms/LoginForm";
import { GridBackground } from "@/components/reusable-ui/grid-background";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const banners = (await getAllBanners()) || [];
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <GridBackground>
      <div className="px-4">
        <ForgotPasswordForm banners={banners} />
      </div>
    </GridBackground>
  );
}
