// src/app/page.js
"use client"; // Mark as Client Component

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // for Next.js 13
import { useEffect, useState } from "react";
import Toster from "@/toster/Toster";
import { login } from "@/redux/slices/authSlice";
import AuthWrapper from "@/authWrapper/AuthWrapper";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated, "isAuthenticated login");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated, router]);

  const handleLogin = () => {
    if (!email || !password) {
      Toster("Please fill email and password !", "error");
      return;
    }
    if (email == "Mindiii@gmail.com" && password == "Mindiii@123") {
      dispatch(login({ email }));
      router.push("/home");
    } else {
      Toster("Invalid email or password !", "error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-2 text-center">Login Page</h1>
        <p className="text-center text-sm">Mindiii@gmail.com</p>
        <p className="mb-6 text-center text-sm">Mindiii@123</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleLogin}
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default Page;
// export default AuthWrapper(login);
