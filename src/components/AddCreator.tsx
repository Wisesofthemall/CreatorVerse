import React, { useState } from "react";
import Input from "./inputs/Input";
import { AiOutlineUser } from "react-icons/ai";
import SocialMedias from "./SocialMedias";

function AddCreator() {
  const [name, setName] = useState<string>("");
  return (
    <div className="text-stone-50 grid justify-center">
      <Input
        name="Name"
        Change={setName}
        subtitle="The Name of the Creator"
        icon={AiOutlineUser}
      />
      <SocialMedias />
    </div>
  );
}

export default AddCreator;
