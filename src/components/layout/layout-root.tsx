import * as React from "react";
import { Header } from "@src/components/layout/header";

type LayoutRootProps = {
  children: React.ReactNode;
};

export function LayoutRoot({ children }: LayoutRootProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
