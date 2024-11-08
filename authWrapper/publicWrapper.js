"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { pagesEndPoints } from "@/utils/Constant";

export default function publicWrapper(Component) {
  return function PublicRoute(props) {
    const router = useRouter();
    const isAuthenticated = getCookie("isAuthenticated");

    useEffect(() => {
      if (isAuthenticated) {
        router.push(pagesEndPoints.HOME);
      }
    }, [isAuthenticated, router]);

    return !isAuthenticated ? <Component {...props} /> : null;
  };
}
