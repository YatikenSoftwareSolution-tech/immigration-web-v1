"use client"
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().nonempty({ message: "First Name is required" }),
  lastName: z.string().nonempty({ message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid Email Address" }),
  phone: z.string().nonempty({ message: "Phone Number is required" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="mx-auto shadow-xl rounded-xl w-4/5 flex gap-10 px-8 py-16 bg-white mb-[10%]">
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-gray-600 mb-4">
          Get in <span className="text-secondary">touch</span>, ask a <span className="text-secondary">question</span>!
        </h3>
        <p className="text-3xl font-bold mb-4">The pleasure is all ours!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Input
              {...register("firstName")}
              placeholder="First Name"
              aria-label="First Name"
              className="p-4 border-gray text-secondary rounded-lg"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

            <Input
              {...register("lastName")}
              placeholder="Last Name"
              aria-label="Last Name"
              className="p-4 border border-gray text-gray rounded-lg"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Input
              {...register("email")}
              placeholder="Email Address"
              aria-label="Email Address"
              className="p-4 border border-gray text-gray rounded-lg"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <Input
              {...register("phone")}
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="p-4 border border-gray text-gray rounded-lg"
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </div>

          <Textarea
            {...register("message")}
            placeholder="Your Message"
            aria-label="Your Message"
            className="p-4 border border-gray text-gray rounded-lg"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}

          <Button type="submit" className="bg-secondary text-white px-10 py-6 rounded-lg flex items-center gap-2">
            Send <ArrowRight />
          </Button>
        </form>
      </div>

      <div className="flex-1">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091544!2d-122.41941508468128!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c69b7b497%3A0xc6a8a88ef1e7f9f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1672520627280!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
