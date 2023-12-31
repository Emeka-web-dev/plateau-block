"use client"
import Image from "next/image";
import Link from "next/link";
import { AlignRight, Search } from "lucide-react";
import { Button } from "./ui/button";
import {ModeToggle} from "./ThemeToggle";
import { cn } from "@/lib/utils";
import {useToggle} from "@/hooks/useToggle"
import { useSearch } from "@/hooks/useSearch";

export const navLinks = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "contact",
    link: "/contact",
  },
];
function Header() {
  const {onOpen} = useToggle()
  const {onOpen: openSearch} = useSearch()
  return (
    <header className="sticky top-0 w-full bg-background z-40">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between py-3">
        <Link href="/" className="flex space-x-2 items-center justify-center">
          <div className="relative w-12 h-12">
            <Image
              src="/think-plateau.png"
              layout="fill"
              className=" object-contain"
              alt="logo"
            />
          </div>
          <h1 className="font-bold">Think Plateau</h1>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={cn(
                "uppercase tracking-wider text-[0.85rem] font-semibold hover:underline"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4 items-center">
          <Button size="icon" variant="ghost" className="hidden md:flex" onClick={openSearch}>
            <Search className="w-5 h-5" />
          </Button>
          <div className="">
            <ModeToggle />
          </div>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon">
              <AlignRight className="w-5 h-5" onClick={onOpen} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
