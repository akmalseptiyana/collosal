import * as React from "react";

type Props = {
  Icon: React.ElementType;
  cardName: string;
};

export function CardListIcon({ Icon, cardName, ...rest }: Props) {
  return (
    <li
      className="flex h-[60px] max-w-[498px] items-center space-x-[21px] rounded-[3px] border border-light bg-light pl-[22px]"
      {...rest}
    >
      <figure>
        <Icon size={30} className="text-white" />
      </figure>
      <h3 className="small-card-title text-white">{cardName}</h3>
    </li>
  );
}
