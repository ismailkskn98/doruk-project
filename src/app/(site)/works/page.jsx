import WorksMain from "@/components/works";
import React, { Suspense } from "react";

export default function WorksPage() {
  return (
    <Suspense fallback={<div></div>}>
      <WorksMain />
    </Suspense>
  );
}
