"use client";

import Logo from "../Logo";
import Link from "next/link";
import { itemsNavbar } from "../../../../Data/itemsNavbar";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavbarMobile() {
  return (
    <div className="p-4 flex justify-between items-center bg-black text-white">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu size={28} />
        </SheetTrigger>

        <SheetContent side="left" className="bg-black">
          <SheetHeader>
            <SheetTitle className="text-white">Menú</SheetTitle>
            <SheetDescription className="text-gray-400">
              Navegación principal
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-4 mt-6">
            {itemsNavbar.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-white text-lg font-medium hover:text-[#E50914]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
