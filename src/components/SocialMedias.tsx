import Input from "./inputs/Input";

import { BiLogoYoutube } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

type SocialProp = {
  youtube?: string;
  twitter?: string;
  instagram?: string;
};
type Prop = {
  setState: (value: SocialProp) => void;
  state: SocialProp;
  value?: SocialProp;
  dark?: boolean;
};
function SocialMedias({ setState, state, value, dark }: Prop) {
  return (
    <div className={`w-60 m-7 ${dark ? "text-black" : ""}`}>
      <div className={`w-60 m-7 ${dark ? "text-black" : ""}`}>
        <Input
          name="Youtube"
          Change={(value) => setState({ ...state, youtube: value })}
          subtitle="The handle without the @"
          icon={BiLogoYoutube}
          value={value ? value.youtube : undefined}
          dark={dark ? true : false}
        />{" "}
      </div>
      <div className="w-60 m-7">
        <Input
          name="Twitter"
          Change={(value) => setState({ ...state, twitter: value })}
          subtitle="The handle without the @"
          icon={BsTwitter}
          value={value ? value.twitter : undefined}
          dark={dark ? true : false}
        />
      </div>
      <div className="w-60 m-7">
        <Input
          name="Instagram"
          Change={(value) => setState({ ...state, instagram: value })}
          subtitle="The handle without the @"
          icon={BsInstagram}
          value={value ? value.instagram : undefined}
          dark={dark ? true : false}
        />
      </div>
    </div>
  );
}

export default SocialMedias;
