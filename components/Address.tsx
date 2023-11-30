"use client";
import { useStore } from "@/hooks/atom";
import FormData from "./FormData"

function Address() {
    const name: any = useStore(state => state.name)
  return (
    <section className="max-w-[32rem] mx-auto px-5 py-10">
        <h4 className="uppercase text-2xl font-bold">send a message</h4>
        <FormData />
        <div className="space-y-2">
          <h3 className="uppercase text-2xl font-bold">OR IF YOU’RE OLD SCHOOL…</h3>
          <h3 className="uppercase text-[1.25rem] font-bold">SPOTEX MEDIA LLC</h3>
          <p className="font-semibold">{name.address.street}</p>
          <p className="font-semibold">{name.address.city}</p>
        </div>
      </section>
  )
}

export default Address