import React from "react";
// import loader from "../../../public";
import loader from "../../../public/loader.gif";
import Image from "next/image";
import { useLoader } from "@/contexts/LoaderContext";

// function for loader
const Loader = () => {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000090] z-50">
      {/* <Image
        src={loader}
        alt="about-image"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      /> */}
      <div className="border-8 w-[50px] h-[50px] border-dashed border-[#c53163] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
