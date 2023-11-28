"use client"
import React from "react";
import { navLinks } from "./Header";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="dark:bg-black bg-[#252121] text-white grid grid-cols-1 md:grid-cols-2 relative pb-10 md:pb-0">
      <div className="flex flex-col md:items-end">
        <div className="md:max-w-xl md:p-5 md:mb-14">
          <div className="border-b md:border-b-0 py-6 md:p-3">
            <h3 className="text-center md:text-left text-2xl font-bold uppercase">
              think plateau
            </h3>
          </div>
          <p className="p-8 md:px-3 md:py-0 text-sm text-center md:text-left">
            Mark is the three-time #1 New York Times bestselling author of The
            Subtle Art of Not Giving a F*ck, as well as other titles. His books
            have sold around 20 million copies, been translated into more than
            65 languages, and reached number one in more than a dozen countries.
            In 2023, a feature film about his life and ideas was released
            worldwide by Universal Pictures.
          </p>
        </div>
        
      </div>
      <div className="grid grid-row-2 md:border-l">
        <div className=" md:border-b border-t md:border-t-0">
          <div className="max-w-lg py-4 md:pt-8 px-14 gap-y-4 grid grid-cols-2">
            {navLinks.map(link => (
              <Link key={link.name} href={`/${link.link}`} className="uppercase tracking-wider text-sm hover:underline">{link.name}</Link>
            ))}
          </div>
        </div>
        <div className=" pt-5 px-10 border-t md:border-t-0">social links</div>
      </div>
      <div className="w-full absolute bottom-2">
        <div className="max-w-[68rem] mx-auto w-full px-5 text-center md:text-left">
          <p className="text-gray-400 text-xs">© 2023 Infinity Squared Media LLC</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
