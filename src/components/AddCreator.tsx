import { useState } from "react";
import Input from "./inputs/Input";
import { AiOutlineUser } from "react-icons/ai";
import SocialMedias from "./SocialMedias";
import CustomButton from "./inputs/CustomButton";
import Description from "./Description";
import { BsFillImageFill } from "react-icons/bs";
import { toast } from "react-hot-toast";

function AddCreator() {
  const [name, setName] = useState<string>("");
  const [desc, setdDesc] = useState("");
  const [socials, setSocials] = useState({});
  const [image, setImage] = useState("");

  const HandleC = () => {
    const info = { name, image, desc, ...socials };
    console.log(info);
    if (name.length == 0) {
      toast.error("Please enter Creator name!");
      return;
    }
    if (desc.length == 0) {
      toast.error("Please enter a desription!");
      return;
    }
    if (Object.values(socials).length === 0) {
      toast.error("Please add atleast one social media handle");
      return;
    }
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
      <div className="w-60 m-7">
        <Input
          name="Image"
          Change={setImage}
          subtitle="An image of the Creator"
          icon={BsFillImageFill}
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
