import * as React from "react";

type Props = {
  image: JSX.Element;
  name: string;
  role: string;
};

export function TeamCard({ image, name, role, ...rest }: Props) {
  return (
    <div className="h-[480px] w-[328px] rounded-[3px] bg-light" {...rest}>
      {image}
      <h3 className="team-name mt-9 ml-10 text-white">{name}</h3>
      <p className="team-job mt-2 ml-10 text-muted">{role}</p>
    </div>
  );
}
