"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 items-center border-b mb-5 px-5 h-14">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              'text-zinc-900':link.href===pathName,
              'text-zinc-400':link.href!==pathName,
              'hover:text-zinc-800 transition-colors':true
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
