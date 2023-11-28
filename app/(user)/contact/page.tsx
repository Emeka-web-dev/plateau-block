import Link from "next/link";
import React from "react";
import FormData from "@/components/FormData";

type Props = {};

function page({}: Props) {
  return (
    <article>
      <div className="py-12 bg-[#dae5e6] dark:bg-[#323536] border-y-black dark:border-y-white border-y">
        <h3 className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl pb-4 md:pb-6 font-bold capitalize">
          Contact us
        </h3>
        <p className="max-w-2xl mx-auto text-center px-5">
          Thank you for your interest in contacting us. You can send us a
          message using the contact form below, or email{" "}
          <Link href="mailto:emekarexchukwu@gmail.com" className="underline">
            support@markmanson.net
          </Link>{" "}
          and we’ll get back to you.
        </p>
      </div>
      <section className="max-w-[32rem] mx-auto px-5 py-10">
        <h4 className="uppercase text-2xl font-bold">send a message</h4>
        <FormData />
        <div className="space-y-2">
          <h3 className="uppercase text-2xl font-bold">OR IF YOU’RE OLD SCHOOL…</h3>
          <h3 className="uppercase text-[1.25rem] font-bold">INFINITY MEDIA SQUARED LLC</h3>
          <p>8605 Santa Monica Blvd PMB 39160 West Hollywood, CA 90069</p>
        </div>
      </section>
    </article>
  );
}

export default page;
