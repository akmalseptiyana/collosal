import * as React from "react";
import { Link } from "gatsby";

import { Logo } from "@src/components/ui/icons";

export function Footer() {
  return (
    <footer className="container mt-[104px] pb-[65px]">
      <main className="grid grid-cols-2 gap-12 md:grid-cols-4">
        <section>
          <figure>
            <Logo />
          </figure>
          <p className="mt-[21px] text-base font-medium leading-8 text-muted">
            Copyright © 2021 <br /> Design By Collosal LLC
          </p>
        </section>
        {footerLinks.map(({ heading, links }) => (
          <section key={heading}>
            <h3 className="text-sm font-medium text-white">{heading}</h3>
            <ul className="mt-[19px] space-y-[10px]">
              {links.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.href}
                    className="text-base font-normal leading-[28px] text-muted"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </footer>
  );
}

const footerLinks = [
  {
    heading: "SERVICES",
    links: [
      { href: "/", text: "Web Development" },
      { href: "/", text: "App Development" },
      { href: "/", text: "UI Design" },
      { href: "/", text: "Consultation" },
      { href: "/", text: "Maintenance" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { href: "/", text: "About" },
      { href: "/", text: "Contact" },
      { href: "/", text: "Send Quote" },
      { href: "/", text: "Privacy Policy" },
      { href: "/", text: "Term of Service" },
      { href: "/", text: "Jobs" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { href: "/", text: "Support" },
      { href: "/", text: "Documentation" },
      { href: "/", text: "License" },
      { href: "/", text: "Sitemap" },
    ],
  },
];
