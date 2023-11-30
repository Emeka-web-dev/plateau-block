import Address from "@/components/Address";
import FormData from "@/components/FormData";
import Link from "next/link";



async function page() {
    
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
            emekarexchukwu@gmail.com
          </Link>{" "}
          and we’ll get back to you.
        </p>
      </div>
      <Address />
    </article>
  );
}

export default page;
