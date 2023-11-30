import SideBarToggle from "@/components/SideBarToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CommandDialog } from "@/components/ui/command";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { client } from "@/sanity/lib/client";
import { aboutQuery, aboutStateQuery } from "@/sanity/lib/queries";

const inter = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Think Plateau",
  description: "Things you don't know about Plateau",
  icons: {
    icon: [
      {
        url: "/think-plateau.png",
        href: "/think-plateau.png"
      }
    ]
  }
};

export const revalidate = 30;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const about = await client.fetch(aboutStateQuery)
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Layout state={about}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
