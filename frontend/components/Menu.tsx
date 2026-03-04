"use client";

import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Overlay from "./Overlay";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <HamburgerButton
        handleMenuToggle={handleMenuToggle}
        menuOpen={menuOpen}
      />

      {/* Overlay wrapper */}
      <div
        className={`fixed inset-0 z-40 bg-white shadow-xl transition-transform duration-900 ease-out
  ${menuOpen ? "translate-y-0" : "-translate-y-full"} rounded-b-2xl`}
      >
        <Overlay closeMenu={closeMenu} />
      </div>
    </>
  );
}
