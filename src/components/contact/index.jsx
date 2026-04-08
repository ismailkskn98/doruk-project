"use client";
import { useHeaderStore } from "@/store/headerStore";
import { useIntroStore } from "@/store/introStore";
import React, { useEffect } from "react";
import MotionLeftView from "../common/motionLeftView";
import MotionRightView from "../common/motionRightView";
import ContactForm from "./contactForm";

export default function ContactMain() {
  const setTitle = useHeaderStore((state) => state.setTitle);
  const setLightTitle = useHeaderStore((state) => state.setLightTitle);
  const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

  useEffect(() => {
    setLightTitle("Contact");
    setTitle("");
    setIntroComplete(true);
  }, [setTitle, setLightTitle, setIntroComplete]);

  return (
    <main className="w-full flex flex-col items-start">
      <MotionLeftView className="w-full pb-4 pt-8 lg:py-12.5">
        <h1 className="uppercase font-bold text-xl sm:text-2xl lg:text-[32px] font-helvetica-neue">Contact</h1>
      </MotionLeftView>
      <MotionRightView className="w-full flex items-start justify-between pt-4 pb-8 sm:pt-8 sm:pb-12.5 lg:py-12.5 font-helvetica-neue">
        <ContactForm />
      </MotionRightView>
    </main>
  );
}
