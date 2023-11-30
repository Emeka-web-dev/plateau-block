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
import { useSearch } from "@/hooks/useSearch";
import { useStore } from "@/hooks/atom";
import { SocialIcon } from "react-social-icons";

export default function SideBarToggle() {
  const { isOpen, onClose } = useToggle();
  const { onOpen } = useSearch();
  const [isMounted, setIsMounted] = useState(false);
  const name = useStore((state) => state.name);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;

  const handleToggle = () => {
    onClose();
    onOpen();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Think Plateau</SheetTitle>
        </SheetHeader>
        <div className="">
          <Button
            className="py-3 my-5 w-full mx-auto"
            variant="outline"
            onClick={handleToggle}
          >
            Search Article...
          </Button>
          <div className="flex flex-col my-5 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                onClick={onClose}
                className="capitalize font-semibold hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-5 pt-8">
            {name.navLinks.map((link) => (
              <Link key={link._key} href={link.link} onClick={onClose}>
                <SocialIcon
                  url={link.link}
                  style={{
                    width: "1.9rem",
                    height: "1.9rem",
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
