import * as React from "react";
import { Link } from "gatsby";

import { MenuToggle } from "@src/components/ui/icons/menu-toggle";
import { MobileNav } from "@src/components/layout/mobile-nav";
import { Logo } from "@src/components/ui/icons/logo";
import { MainNav } from "@src/components/layout/main-nav";

export function Header() {
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  return (
    <header className="mt-[53px]">
      <div className="container h-10">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <MainNav />
          <MobileNav isMobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

          <div className="lg:hidden" onClick={() => setMobileMenu(true)}>
            <MenuToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
