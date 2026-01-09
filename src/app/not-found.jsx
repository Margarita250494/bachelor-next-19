"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NotFound() {
  const pathname = usePathname();

  const [url] = useState(() =>
    typeof window !== "undefined" ? window.location.href : ""
  );

  return (
    <>
      <h1>Page Not Found</h1>
      <p>The requested URL {url} was not found on this server.</p>
      <p>The requested URL {pathname} was not found on this server.</p>
    </>
  );
}