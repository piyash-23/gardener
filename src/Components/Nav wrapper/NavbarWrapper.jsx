"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "../Navbar/Nabvar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return <Navbar isHomePage={isHomePage} />;
}
