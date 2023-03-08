import * as React from "react";

type Props = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

export function SmallCardIcons({ Icon, title, description }: Props) {
  return (
    <div className="h-[141px] max-w-[241px] rounded-[3px] border border-light bg-light pt-[23px] pl-[22px] pr-[30px]">
      <div className="flex items-center gap-x-4">
        <figure>
          <Icon size={30} className="text-white" />
        </figure>
        <h3 className="small-card-title text-white">{title}</h3>
      </div>
      <p className="small-card-description mt-4 text-muted">{description}</p>
    </div>
  );
}
