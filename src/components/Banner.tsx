import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:space-x-3">
      <div className="flex flex-col space-y-3">
        <h1 className="text-6xl">Marella&apos;s Daily Blog</h1>
        <p className="font-bold">
          Welcome To{" "}
          <span className="underline decoration-4 decoration-[#ff4c4c]">
            Every Developers
          </span>{" "}
          favourite blog in the Devosphere
        </p>
      </div>
      <div className="self-start text-gray-500 font-bold lg:max-w-sm">
        New product features | The latest in technology | The weekly debugging
        nightmares & more!
      </div>
    </div>
  );
};

export default Banner;
