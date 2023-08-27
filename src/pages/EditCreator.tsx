import { useEffect, useState } from "react";

import { AiOutlineUser } from "react-icons/ai";

import { BsFillImageFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { getCreatorById, postCreator } from "../client";
import Input from "../components/inputs/Input";
import Description from "../components/Description";
import SocialMedias from "../components/SocialMedias";
import CustomButton from "../components/inputs/CustomButton";

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
type creatorType = {
  created_at: string;
  id: number;
  name: string;
  url: string;
  description: string;
  twitter?: string | null;
  instagram?: string | null;
  youtube?: string | null;
};

function EditCreator() {
  const [name, setName] = useState<string>("");
  const [desc, setdDesc] = useState<string>("");
  const [socials, setSocials] = useState({});
  const [image, setImage] = useState<string>("");
  const [user, setUser] = useState<creatorType>();

  console.log(user);
  const query = new URLSearchParams(location.search);
  const id: string | null = query.get("id");

  const HandleC = async () => {
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
    if (posted === "success") {
      toast.success(posted);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (id) {
        console.log(parseInt(id));
        const data: creatorType | null = await getCreatorById(parseInt(id));
        console.log(data);
        if (data) {
          console.log(data);
          setUser(data);
        }
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="text-stone-50 grid justify-center w-full h-full">
      <div className="bg-explosion bg-cover bg-right bg-no-repeat w-full h-[120%] absolute mix-blend-color-dodge translate-z-0 "></div>
      <div className="w-60 m-7">
        <Input
          name="Name"
          Change={setName}
          subtitle="The Name of the Creator"
          icon={AiOutlineUser}
          value={user?.name}
        />
      </div>
      <div className="w-60 m-7">
        <Input
          name="Image"
          Change={setImage}
          subtitle="An image of the Creator (optional)"
          icon={BsFillImageFill}
          value={user?.url}
        />
      </div>
      <div className="w-60 m-7 ">
        <Description Change={setdDesc} value={user?.description} />
      </div>
      <SocialMedias
        setState={setSocials}
        state={socials}
        value={{
          youtube: (user as socialType)?.youtube,
          instagram: (user as socialType)?.instagram,
          twitter: (user as socialType)?.twitter,
        }}
      />
      <div className="flex justify-between my-8">
        <div onClick={() => HandleC()} className="">
          <CustomButton title="Submit" />
        </div>
        <CustomButton title="Cancel " />
      </div>
    </div>
  );
}

export default EditCreator;
