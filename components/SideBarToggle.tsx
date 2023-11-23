"use client";
import { useState, useEffect, use } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToggle } from "@/hooks/useToggle";
import { Button } from "./ui/button";
import { navLinks } from "./Header";
import Link from "next/link";

export default function SideBarToggle() {
  const { isOpen, onClose } = useToggle();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;

  return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Think Plateau</SheetTitle>
          </SheetHeader>
          <div className="">
            <Button className="py-3 my-5 w-full mx-auto" variant="outline">
              Search Article...
            </Button>
            <div className="flex flex-col my-5 space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className="capitalize font-semibold hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
  );
}