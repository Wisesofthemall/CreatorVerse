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
};
function SocialMedias({ setState, state }: Prop) {
  return (
    <div>
      <div className="w-60 m-7">
        <Input
          name="Youtube"
          Change={(value) => setState({ ...state, youtube: value })}
          subtitle="The handle without the @"
          icon={BiLogoYoutube}
        />{" "}
      </div>
      <div className="w-60 m-7">
        <Input
          name="Twitter"
          Change={(value) => setState({ ...state, twitter: value })}
          subtitle="The handle without the @"
          icon={BsTwitter}
        />
      </div>
      <div className="w-60 m-7">
        <Input
          name="Instagram"
          Change={(value) => setState({ ...state, instagram: value })}
          subtitle="The handle without the @"
          icon={BsInstagram}
        />
      </div>
    </div>
  );
}

export default SocialMedias;
