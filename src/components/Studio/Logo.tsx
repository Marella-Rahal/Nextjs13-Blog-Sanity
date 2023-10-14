import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  return (
    <div className="flex">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={50}
        height={50}
        className="opacity-70 pl-3"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;
