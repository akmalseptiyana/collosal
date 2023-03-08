import * as React from "react";

type Props = {
  Icon: React.ElementType;
  value: string;
};

export function ListIcons({ Icon, value, ...rest }: Props) {
  return (
    <li className="flex items-center gap-x-[25px] rounded-[3px]" {...rest}>
      <figure className="flex h-[50px] w-[50px] items-center justify-center bg-light">
        <Icon size={20} className="text-white" />
      </figure>
      <p className="section-paragraph text-white">{value}</p>
    </li>
  );
}
