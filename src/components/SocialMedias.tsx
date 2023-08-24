import React, { useState } from "react";
import Input from "./inputs/Input";

import { BiLogoYoutube } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import CustomButton from "./inputs/CustomButton";
function SocialMedias() {
  const [socials, setSocials] = useState({});

  const HandleC = () => {
    console.log(socials);
  };
  return (
    <div>
      <Input
        name="Youtube"
        Change={(value) => setSocials({ ...socials, youtube: value })}
        subtitle="The handle without the @"
        icon={BiLogoYoutube}
      />{" "}
      <Input
        name="Twitter"
        Change={(value) => setSocials({ ...socials, twitter: value })}
        subtitle="The handle without the @"
        icon={BsTwitter}
      />
      <Input
        name="Instagram"
        Change={(value) => setSocials({ ...socials, instagram: value })}
        subtitle="The handle without the @"
        icon={BsInstagram}
      />
      <div className="flex justify-between">
        <div onClick={() => HandleC()} className="">
          <CustomButton title="Submit" />
        </div>
        <CustomButton title="Cancel " />
      </div>
    </div>
  );
}

export default SocialMedias;
