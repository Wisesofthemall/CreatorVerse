import { useState } from "react";
import Input from "./inputs/Input";
import { AiOutlineUser } from "react-icons/ai";
import SocialMedias from "./SocialMedias";
import CustomButton from "./inputs/CustomButton";
import Description from "./Description";
import { BsFillImageFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { postCreator } from "../client";

type socialType = {
  youtube?: string;
  twitter?: string;
  instagram?: string;
};
type infoType = {
  name: string;
  desc: string;
  image?: string;
  youtube?: string;
  twitter?: string;
  instagram?: string;
};

function AddCreator() {
  const [name, setName] = useState<string>("");
  const [desc, setdDesc] = useState("");
  const [socials, setSocials] = useState({});
  const [image, setImage] = useState("");

  const HandleC = async () => {
    //! Please Debug Later
    const info: infoType = { name, image, desc, ...socials };
    function verifySocial(obj: socialType): boolean {
      if (obj.instagram && obj.instagram.length > 0) {
        return false;
      }
      if (obj.twitter && obj.twitter.length > 0) {
        return false;
      }
      if (obj.youtube && obj.youtube.length > 0) {
        return false;
      }
      return true;
    }

    if (name.length == 0) {
      toast.error("Please enter Creator name!");
      return;
    }
    if (desc.length == 0) {
      toast.error("Please enter a desription!");
      return;
    }
    if (Object.values(socials).length === 0 || verifySocial(socials)) {
      toast.error("Please add atleast one social media handle");
      return;
    }
    //  name: string,
    // url: string,
    // desc: string,
    // youtube: string,
    // instagram: string,
    // twitter: string,
    const posted = await postCreator(
      name,
      image,
      desc,
      info.youtube || "",
      info.instagram || "",
      info.twitter || "",
    );
    console.log(posted);
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
          subtitle="An image of the Creator (optional)"
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
