import React from "react";
import { columns } from "./columns";
import { Banner, Category } from "@prisma/client";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllBanners } from "@/actions/banners";

export default async function page() {
  const banners: Banner[] = (await getAllBanners()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Banners"
        linkTitle="Add Banner"
        href="/dashboard/banners/new"
        data={banners}
        model="banner"
      />
      <div className="py-8">
        <DataTable data={banners} columns={columns} />
      </div>
    </div>
  );
}
