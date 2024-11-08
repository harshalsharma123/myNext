"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { pagesEndPoints } from "@/utils/Constant";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = getCookie("isAuthenticated");
  console.log(isAuthenticated, "isAuthenticated app.js");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(pagesEndPoints.LOGIN);
    } else {
      router.push(pagesEndPoints.HOME);
    }
  }, [router, isAuthenticated]);

  return (
    <div className=" bg-white h-screen w-screen flex justify-center items-center">
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin border-primary"></div>
    </div>
  );
}
