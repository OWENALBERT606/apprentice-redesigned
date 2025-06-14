import { getBannerById } from "@/actions/banners";
import BannerForm from "@/components/front-end/create-banner-fomr";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const banner = await getBannerById(id);
  return (
    <div className="p-8">
      <BannerForm initialData={banner} editingId={id} />
    </div>
  );
}
