import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text
      hover:cursor-pointer"
    >
      FormPro
    </Link>
  );
};

export default Logo;
