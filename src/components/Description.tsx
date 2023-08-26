import { MdDescription } from "react-icons/md";
type Props = {
  Change: (value: string) => void;
};

function Description({ Change }: Props) {
  return (
    <div className="grid ">
      <div className="flex">
        <MdDescription className="mr-3" />
        <label className="font-bold text-lg ">Description</label>
      </div>
      <p className="text-sm mb-1">Describe your creator</p>
      <textarea
        onChange={(e) => Change(e.target.value)}
        className={`w-full  h-36
         rounded-md text-black `}
        id="name"
        name="name"
      />
    </div>
  );
}

export default Description;
