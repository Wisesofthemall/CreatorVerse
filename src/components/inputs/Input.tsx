import React from "react";
import { IconType } from "react-icons";

type Props = {
  name: string;
  Change: (value: string) => void;
  subtitle: string;
  icon: IconType;
};

function Input({ name, Change, subtitle, icon: Icon }: Props) {
  return (
    <div className="grid w-60 m-7">
      <div className="flex">
        <Icon className="mr-3" />
        <label className="font-bold text-lg ">{name}</label>
      </div>
      <p className="text-sm mb-1">{subtitle}</p>
      <input
        onChange={(e) => Change(e.target.value)}
        className="w-full rounded-lg text-black"
        type="text"
        id="name"
        name="name"
      />
    </div>
  );
}

export default Input;
