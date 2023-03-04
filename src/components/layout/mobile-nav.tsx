import * as React from "react";
import { Link } from "gatsby";

import { Button } from "@src/components/ui/button";
import { Close } from "@src/components/ui/icons/close";
import { navigationMenuLinks } from "@src/lib/navigation-menu-links";
import { cn } from "@src/lib/utils";

type MobileNavProps = {
  isMobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
};

export function MobileNav({ isMobileMenu, setMobileMenu }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed z-50 top-0 w-3/5 bg-primary h-screen grid place-items-center transition-all ease-in-out duration-200 lg:hidden",
        isMobileMenu ? "right-0" : "-right-full",
      )}
    >
      <ul className="flex flex-col items-center space-y-[50px]">
        {navigationMenuLinks.map(({ href, name }) => (
          <li key={name} className="text-base text-white">
            <Link to={href}>{name}</Link>
          </li>
        ))}
      </ul>
      <Button
        variant="light-white"
        className="absolute bottom-10 left-2/4 -translate-x-2/4"
      >
        Contact
      </Button>

      <div
        className="absolute top-4 right-4"
        onClick={() => setMobileMenu(false)}
      >
        <Close />
      </div>
    </div>
  );
}
