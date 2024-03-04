import { navLinks } from "@/constants/nav-links";
import React from "react";

const MobileNav = () => {
  return (
    <div className="flex md:hidden fixed bottom-0 left-0 w-full py-4 border-t bg-background rounded-t-lg shadow-lg z-50">
      <nav className="container flex items-center justify-evenly">
        {navLinks.map((link, index) => {
          const { title, href, icon: Icon } = link;
          return (
            <a
              key={index}
              href={href}
              className="size-10 p-2 grid place-content-center"
            >
              <div className="flex flex-col items-center gap-y-1 hover:text-primary">
                <Icon className="size-6" />
                <span className="text-sm capitalize font-semibold">
                  {title}
                </span>
              </div>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileNav;
