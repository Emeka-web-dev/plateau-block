"use client";
import { useStore } from "@/hooks/atom";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import CommandDialog from "./CommandDialog";
import Footer from "./Footer";
import Header from "./Header";
import SideBarToggle from "./SideBarToggle";

type Props = {
  children: React.ReactNode;
  state: {
    description: string;
    socialLinks: [
      {
        link: string;
        name: string;
        _key: string;
      }
    ];
    address: {
      city: string;
      street: string;
    };
  };
};

function Layout({ children, state }: Props) {
  const setDescription: any = useStore((state) => state.setDescription);
  const setAddress: any = useStore((state) => state.setAddress);
  const setNavLinks: any = useStore((state) => state.setNavLinks);

  useEffect(() => {
    setDescription(state.description);
    setAddress(state.address);
    setNavLinks(state.socialLinks);
  }, [state, setDescription, setAddress, setNavLinks]);

  return (
    <div>
      <div className="min-h-[80vh] bg-[#f5f5f5] dark:bg-[#0a0a0a]">
        <Header />
        {children}
      </div>
      <Footer />
      <SideBarToggle />
      <CommandDialog />
      <Toaster position="top-center" />
    </div>
  );
}

export default Layout;
