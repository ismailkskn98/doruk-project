"use client";
import { useSidebarStore } from "@/store/sidebarStore";
import React from "react";
import SideNavbar from "./sideNavbar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { DialogClose } from "../ui/dialog";

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
          <Button variant="ghost" className="sm:hidden absolute top-3 right-3 cursor-pointer" size="icon-lg">
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
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
