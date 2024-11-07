"use client";
import { useEffect } from "react";
// import { localStorageKeys, pagesEndPoints } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated, "isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login"); // Redirect to login if no token
    } else {
      router.push("/home");
    }
  }, [router]);

  return (
    <div className=" bg-white h-screen w-screen flex justify-center items-center">
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin border-primary"></div>
    </div>
  );
}
