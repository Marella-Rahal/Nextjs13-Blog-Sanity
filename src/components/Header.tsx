import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Link
      href={"/"}
      className="self-start flex space-x-3 items-center text-[#ff4c4c] pt-5"
    >
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={70}
        height={70}
        className="opacity-70"
      />
      <span>Marella Rahal&apos;s Blog</span>
    </Link>
  );
};

export default Header;
