"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import CommonPageDesign from "../components/CommonPageDesign";
import { use } from "react";
import link from "next/link";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <CommonPageDesign>
      <div className="w-full flex justify-center gap-4 py-6 mt-10">
        
        {navLinks.map((link) =>{
            
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2  transition ${isActive ? "bg-cyan-800 text-white transition" : "hover:bg-gray-200 hover:text-black"}`}
              >
                {link.name}
              </Link>
            )
          }
        )}

      </div>
        {children}
    </CommonPageDesign>
  );
}
