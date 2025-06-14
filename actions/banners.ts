"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

// Define the type based on your Banner model
export interface BannerProps {
  title: string;
  link1: string;
  link2: string;
  description: string;
  imageUrl: string;
}

// Create a banner
export async function createBanner(data: BannerProps) {
  try {
    const newBanner = await db.banner.create({ data });
    revalidatePath("/dashboard/banners");
    return newBanner;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Get all banners
export async function getAllBanners() {
  try {
    const banners = await db.banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return banners;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Update a banner by ID
export async function updateBannerById(id: string, data: BannerProps) {
  try {
    const updatedBanner = await db.banner.update({
      where: { id },
      data,
    });
    revalidatePath("/dashboard/banners");
    return updatedBanner;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Get a single banner by ID
export async function getBannerById(id: string) {
  try {
    const banner = await db.banner.findUnique({
      where: { id },
    });
    return banner;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Delete a banner
export async function deleteBanner(id: string) {
  try {
    const deletedBanner = await db.banner.delete({
      where: { id },
    });
    return {
      ok: true,
      data: deletedBanner,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Create banners in bulk
export async function createBulkBanners(banners: BannerProps[]) {
  try {
    for (const banner of banners) {
      await createBanner(banner);
    }
  } catch (error) {
    console.log(error);
  }
}
