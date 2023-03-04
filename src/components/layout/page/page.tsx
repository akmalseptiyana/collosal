import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export const Page: React.FC<Props> = ({ children }) => {
  return <section className="flex flex-1 flex-col">{children}</section>;
};
