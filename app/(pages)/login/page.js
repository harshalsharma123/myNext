"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Toster from "@/toster/Toster";
import { login } from "@/redux/slices/authSlice";
import publicWrapper from "@/authWrapper/publicWrapper";
import { getCookie, setCookie } from "cookies-next";
import { pagesEndPoints } from "@/utils/Constant";
import { callLogin } from "@/services/apiClient";
import { useLoader } from "@/contexts/LoaderContext";

function Login() {
  const isAuthenticated = getCookie("isAuthenticated");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const { setLoading } = useLoader();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(pagesEndPoints.HOME);
    }
  }, [isAuthenticated, router]);

  // const handleLogin = () => {
  //   if (!email || !password) {
  //     Toster("Please fill email and password !", "error");
  //     return;
  //   }
  //   if (email == "Mindiii@gmail.com" && password == "Mindiii@123") {
  //     Toster("Login success !", "success");
  //     setCookie("isAuthenticated", "true", { maxAge: 60 * 60 * 24, path: "/" }); // Cookie expires in 1 day
  //     dispatch(login({ email, password }));
  //     router.push(pagesEndPoints.HOME);
  //   } else {
  //     Toster("Invalid email or password !", "error");
  //   }
  // };

  const handleLogin = async () => {
    if (!email || !password) {
      Toster("Please fill email and password !", "error");
      return;
    }

    try {
      setLoading(true);
      const response = await callLogin(email.trim(), password);
      console.log(response, "response");

      if (response.data.accessToken) {
        Toster("Login success !", "success");
        setCookie("isAuthenticated", response.data.accessToken, {
          maxAge: 60 * 60 * 24,
          path: "/",
        }); // Cookie expires in 1 day
        dispatch(login(response.data));
        router.push(pagesEndPoints.HOME);
        setLoading(false);
      }
    } catch (error) {
      // Toster("LOGIN_FAILED !", "error");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-2 text-center">Login Page</h1>
        <p className="text-center text-sm">
          {/* Mindiii@gmail.com <br /> */}
          emilys
        </p>
        <p className="mb-6 text-center text-sm">
          {/* Mindiii@123 <br />  */}
          emilyspass
        </p>
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
export default publicWrapper(Login);
