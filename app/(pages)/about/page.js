"use client";

import privateWrapper from "@/authWrapper/privateWrapper";
import React from "react";
import { useSelector } from "react-redux";

function page() {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  console.log(isAuthenticated, "isAuthenticated about-us");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-2 text-center">
          About-us page
        </h1>
      </div>
    </div>
  );
}
export default privateWrapper(page);
