import { useState } from "react";
import Input from "./inputs/Input";
import { AiOutlineUser } from "react-icons/ai";
import SocialMedias from "./SocialMedias";
import CustomButton from "./inputs/CustomButton";
import Description from "./Description";
function AddCreator() {
  const [name, setName] = useState<string>("");
  const [desc, setdDesc] = useState("");
  const [socials, setSocials] = useState({});

  const HandleC = () => {
    console.log({ ...socials, name, desc });
  };
  return (
    <div className="text-stone-50 grid justify-center">
      <div className="w-60 m-7">
        <Input
          name="Name"
          Change={setName}
          subtitle="The Name of the Creator"
          icon={AiOutlineUser}
        />
      </div>
      <div className="w-60 m-7 ">
        <Description Change={setdDesc} />
      </div>
      <SocialMedias setState={setSocials} state={socials} />
      <div className="flex justify-between">
        <div onClick={() => HandleC()} className="">
          <CustomButton title="Submit" />
        </div>
        <CustomButton title="Cancel " />
      </div>
    </div>
  );
}

export default AddCreator;
