"use client";
import React, { useEffect } from "react";
import {Toaster} from "sonner"
import { ThemeProvider } from "./ThemeProvider";
import SideBarToggle from "./SideBarToggle";
import CommandDialog from "./CommandDialog";
import { useStore } from "@/hooks/atom";

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
    }
  }
};

function Layout({ children, state }: Props) {
    const setDescription: any = useStore(state => state.setDescription);
    const setAddress: any = useStore(state => state.setAddress);
    const setNavLinks: any = useStore(state => state.setNavLinks);

    useEffect(() => {
        setDescription(state.description);
        setAddress(state.address);
        setNavLinks(state.socialLinks)
    }, [state, setDescription, setAddress, setNavLinks])
    return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <SideBarToggle />
      <CommandDialog />
      <Toaster theme="light" />
    </ThemeProvider>
  );
}

export default Layout;
