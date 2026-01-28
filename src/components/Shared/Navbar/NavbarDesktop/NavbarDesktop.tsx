"use client";

import Logo from "./Logo";
import { itemsNavbar } from "../../../../Data/itemsNavbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useScrollposition from "./hooks/useScrollposition";
import { BellRing, Search } from "lucide-react";

export default function NavbarDesktop() {
  const scrollPosition = useScrollposition();

  return (
    <div
      id="navbar-desktop"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 text-white transition-all duration-300",
        scrollPosition > 50
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      {/* IZQUIERDA: Logo + Links */}
      <div className="flex items-center gap-10">
        <Logo />
        <div className="flex gap-6">
          {itemsNavbar.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-lg font-medium hover:text-[#E50914] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* DERECHA: Iconos y usuario */}
      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />
        <BellRing className="cursor-pointer hover:text-[#E50914] transition-colors duration-300" />
        <p className="font-semibold cursor-pointer hover:text-[#E50914] transition-colors duration-300">
          User
        </p>
      </div>
    </div>
  );
}
