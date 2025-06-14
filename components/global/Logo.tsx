import { cn } from "@/lib/utils";
import { CircleDollarSign, Code, Code2, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  variant = "light",
  size = "md",
  full = true,
  href = "/",
}: {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  full?: boolean;
  href?: string;
}) {
  if (variant === "light") {
    return (
      <Link href={href} className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-1">
          <span className="font-bold text-xl text-white">
                <Image
            src="/logo.png" // Make sure this file exists in your /public directory
            alt="Company Logo"
            width={80}
            height={80}
            className={cn("w-6 h-6", size === "lg" && "w-10 h-10")}
          />
            
          </span>
        </div>
        <span className={cn(" font-bold text-xl", size === "lg" && "text-4xl")}>
          Apprentice {full && <span className="text-blue-500"></span>}
        </span>
      </Link>
    );
  } else {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-1">
          <span className="text-blue-800 font-bold text-xl">
             <Image
            src="/logo.png" // Make sure this file exists in your /public directory
            alt="Company Logo"
            width={80}
            height={80}
            className=""
          />
          </span>
        </div>
        <span className="font-bold text-xl">
          Apprentice <span className="text-blue-100">Apprentice</span>
        </span>
      </Link>
    );
  }
}
