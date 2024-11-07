"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function publicWrapper(Component) {
  return function PublicRoute(props) {
    const router = useRouter();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
      if (isAuthenticated) {
        router.push("/home");
      }
    }, [isAuthenticated, router]);

    return !isAuthenticated ? <Component {...props} /> : null;
  };
}
