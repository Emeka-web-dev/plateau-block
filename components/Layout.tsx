"use client";
import { useStore } from "@/hooks/atom";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import CommandDialog from "./CommandDialog";
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
      {children}
      <SideBarToggle />
      <CommandDialog />
      <Toaster position="top-center" />
    </div>
  );
}

export default Layout;
