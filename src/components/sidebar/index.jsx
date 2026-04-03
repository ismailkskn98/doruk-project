"use client";
import { useSidebarStore } from "@/store/sidebarStore";
import React from "react";
import SideNavbar from "./sideNavbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function SideBar() {
  const sidebarOpen = useSidebarStore((state) => state.sidebarOpen);
  const setSidebarOpen = useSidebarStore((state) => state.setSidebarOpen);

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="p-0 border-l border-gray-200 shadow-sm xl:w-[30%]! xl:max-w-[30%]! min-[1700px]:w-[calc((100vw-1500px)/2)]! min-[1700px]:max-w-[calc((100vw-1500px)/2)]!"
      >
        <SideNavbar />
      </SheetContent>
    </Sheet>
  );
}
