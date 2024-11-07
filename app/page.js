"use client";

import { useEffect } from "react";
// import { localStorageKeys, pagesEndPoints } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated, "isAuthenticated app.js");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [router, isAuthenticated]);

  return (
    <div className=" bg-white h-screen w-screen flex justify-center items-center">
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin border-primary"></div>
    </div>
  );
}
