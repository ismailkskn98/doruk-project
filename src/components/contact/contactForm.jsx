import React from "react";
import ContactSchema from "./contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
  const schema = ContactSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", message: "" } });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="w-full flex flex-col items-start">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start w-full max-w-125 gap-6 sm:gap-8 lg:gap-12">
        <article className="flex flex-col items-start gap-2.5 lg:gap-5 w-full">
          <label htmlFor="name" className="font-helvetica-neue font-bold text-lg sm:text-xl lg:text-2xl leading-4">
            Name Surname:
          </label>
          <input {...register("name")} placeholder="" className="bg-custom-gray h-9 lg:h-12.5 w-full p-3" />
          {errors.name && <p>{errors.name.message}</p>}
        </article>

        <article className="flex flex-col items-start gap-2.5 lg:gap-5 w-full">
          <label htmlFor="email" className="font-helvetica-neue font-bold text-lg sm:text-xl lg:text-2xl leading-4">
            Mail:
          </label>
          <input {...register("email")} placeholder="" className="bg-custom-gray h-9 lg:h-12.5 w-full p-3" />
          {errors.email && <p>{errors.email.message}</p>}
        </article>
        <article className="flex flex-col items-start gap-2.5 lg:gap-5 w-full">
          <label htmlFor="message" className="font-helvetica-neue font-bold text-lg sm:text-xl lg:text-2xl leading-4">
            Text:
          </label>
          <textarea {...register("message")} placeholder="" className="bg-custom-gray w-full resize-none p-3 h-50 sm:h-70 lg:h-86" />
          {errors.message && <p>{errors.message.message}</p>}
        </article>
        <button type="submit" className="bg-custom-gray px-12 py-2.5 lg:py-3 w-full font-bold text-lg sm:text-xl lg:text-2xl hover:bg-[#c6c6c6] transition-all duration-200 cursor-pointer">
          Submit
        </button>
      </form>
    </section>
  );
}
