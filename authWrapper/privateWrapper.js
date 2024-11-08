"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { pagesEndPoints } from "@/utils/Constant";

export default function privateWrapper(Component) {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const isAuthenticated = getCookie("isAuthenticated");

    useEffect(() => {
      if (!isAuthenticated) {
        router.push(pagesEndPoints.LOGIN);
      }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <Component {...props} /> : null;
  };
}
