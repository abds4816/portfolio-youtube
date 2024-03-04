import React from "react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { navLinks } from "@/constants/nav-links";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 py-2 w-full bg-background/60 backdrop-blur-md z-50">
      <div className="container py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-x-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="capitalize font-medium hover:text-foreground"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
