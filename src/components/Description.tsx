import { MdDescription } from "react-icons/md";
type Props = {
  Change: (value: string) => void;
  value?: string;
  dark?: boolean;
};

function Description({ Change, value, dark }: Props) {
  return (
    <div className={`grid ${dark ? "text-black" : ""}`}>
      <div className="flex">
        <MdDescription className="mr-3" />
        <label className="font-bold text-lg ">Description</label>
      </div>
      <p className="text-sm mb-1">Describe your creator</p>
      <textarea
        defaultValue={value ? value : ""}
        onChange={(e) => Change(e.target.value)}
        className={`w-full  h-36
         rounded-md text-black ${dark ? "bg-blue-300" : ""}`}
        id="name"
        name="name"
      />
    </div>
  );
}

export default Description;
