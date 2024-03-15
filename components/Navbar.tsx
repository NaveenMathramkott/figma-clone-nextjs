import { NavbarProps } from "@/types/type";
import React from "react";
import ActiveUsers from "./users/ActiveUsers";
import Image from "next/image";

const Navbar = ({ activeElement }: NavbarProps) => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
      <Image src="/assets/logo.svg" alt="FigPro Logo" width={58} height={20} />
      <ActiveUsers />
    </nav>
  );
};

export default Navbar;
