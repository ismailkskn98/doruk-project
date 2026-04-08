"use client";
import { useSidebarStore } from "@/store/sidebarStore";
import React from "react";
import SideNavbar from "./sideNavbar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { IoCloseOutline } from "react-icons/io5";

export default function SideBar() {
  const sidebarOpen = useSidebarStore((state) => state.sidebarOpen);
  const setSidebarOpen = useSidebarStore((state) => state.setSidebarOpen);

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="p-0 border-l border-gray-200 shadow-sm data-[side=right]:xl:w-[30%]! data-[side=right]:xl:max-w-[30%]! data-[side=right]:min-[131.25rem]:w-[calc((100vw-1500px)/2)]! data-[side=right]:min-[131.25rem]:max-w-[calc((100vw-1500px)/2)]!"
      >
        <DialogClose asChild>
          <button className="sm:hidden absolute top-5 right-5 cursor-pointer">
            <IoCloseOutline className="text-2xl" />
          </button>
        </DialogClose>
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SideNavbar />
      </SheetContent>
    </Sheet>
  );
}
