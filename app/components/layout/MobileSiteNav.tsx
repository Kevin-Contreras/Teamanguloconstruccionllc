"use client";

import { NavBar } from "./NavBar";

/** Mobile nav at layout root — keeps fixed positioning reliable on iOS. */
export function MobileSiteNav() {
  return (
    <div className="lg:hidden">
      <NavBar variant="overlay" />
    </div>
  );
}
