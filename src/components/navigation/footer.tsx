import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "../ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t pt-4 pb-28 md:pb-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-y-4">
        <p className="text-sm">
          Copyright &copy; {currentYear}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => {
            const { href, icon: Icon } = link;
            return (
              <a
                key={index}
                href={href}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "rounded-full"
                )}
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
