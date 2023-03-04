import * as React from "react";
import { Header } from "@src/components/layout/header";
import { Footer } from "@src/components/layout/footer";
import { Callout } from "@src/components/callout";

type LayoutRootProps = {
  children: React.ReactNode;
};

export function LayoutRoot({ children }: LayoutRootProps) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Callout />
      </main>
      <Footer />
    </>
  );
}
