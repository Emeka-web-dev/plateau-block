"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useState } from "react"
import { publicKey, serviceId, templateId } from "@/sanity/env"
import { Spinner } from "./Spinner"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be a valid address"
  }),
  phone: z.string().min(5, {message: "Phone Number must be at least 9 character"}),
  message: z.string().min(4, {message: "Message must be above 4 characters"})
})


export default function ProfileForm() {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "",
          email: "",
          phone: "",
          message: ""
        }
      })
      
      const onSubmit = (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        emailjs.send(serviceId, templateId, {
          name: values.fullName,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }, publicKey).then(() => {
          toast.success("Successfully sent");
        }).catch(() => {
          toast.error("Failed to send")
        }).finally(() => {
          setIsLoading(false);
          form.reset();
        })
      };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Full Name" type="text" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email Address" type="email" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter Phone Number" type="tel" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea placeholder="Enter Message" className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" rows={3} {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={isLoading}>{isLoading ? <Spinner /> : "Submit" }</Button>
      </form>
    </Form>
  )
}
