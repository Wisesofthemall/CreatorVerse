import { IconType } from "react-icons";

type Props = {
  name: string;
  Change: (value: string) => void;
  subtitle: string;
  icon: IconType;
  PlusSize?: boolean;
  value?: string;
};

function Input({ name, Change, subtitle, icon: Icon, PlusSize, value }: Props) {
  return (
    <div className="grid ">
      <div className="flex">
        <Icon className="mr-3" />
        <label className="font-bold text-lg ">{name}</label>
      </div>
      <p className="text-sm mb-1">{subtitle}</p>
      <input
        value={value ? value : undefined}
        onChange={(e) => Change(e.target.value)}
        className={`w-full ${
          PlusSize ? "h-36" : "h-full"
        } rounded-md text-black `}
        type="text"
        id="name"
        name="name"
      />
    </div>
  );
}

export default Input;
