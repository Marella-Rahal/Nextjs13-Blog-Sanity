import Link from "next/link";
import React from "react";
import { HiArrowUturnLeft } from "react-icons/hi2";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <Link href="/" className="text-[#b20b0b] flex items-center w-fit p-3">
        <HiArrowUturnLeft className="mr-3" />
        Go back to website
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
