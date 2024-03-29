import * as React from "react";
import { Link } from "gatsby";

import { navigationMenuLinks } from "@src/lib/navigation-menu-links";
import { Button } from "@src/components/ui/button";

export function MainNav() {
  return (
    <>
      <ul className="hidden items-center space-x-[50px] lg:flex">
        {navigationMenuLinks.map(({ href, name }) => (
          <li key={name} className="text-base text-white">
            <Link to={href}>{name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/contact">
        <Button variant="light-white" className="hidden lg:inline-flex">
          Contact
        </Button>
      </Link>
    </>
  );
}
