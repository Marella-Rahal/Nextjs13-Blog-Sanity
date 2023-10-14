"use client";

import Link from "next/link";

type propsType = {
  children: React.ReactNode;
  route: string;
};

const ClientSideRoute = ({ children, route }: propsType) => {
  return <Link href={route}>{children}</Link>;
};

export default ClientSideRoute;
