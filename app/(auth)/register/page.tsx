

import { getAllBanners } from "@/actions/banners";
import RegisterForm from "@/components/Forms/RegisterForm";
import { GridBackground } from "@/components/reusable-ui/grid-background";
import React from "react";

export default async function Page() {
  const banners = (await getAllBanners()) || [];
  return (
    <GridBackground>
      <div className="px-4">
        <RegisterForm banners={banners} />
      </div>
    </GridBackground>
  );
}
