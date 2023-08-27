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
};
function SocialMedias({ setState, state, value }: Prop) {
  return (
    <div>
      <div className="w-60 m-7">
        <Input
          name="Youtube"
          Change={(value) => setState({ ...state, youtube: value })}
          subtitle="The handle without the @"
          icon={BiLogoYoutube}
          value={value ? value.youtube : undefined}
        />{" "}
      </div>
      <div className="w-60 m-7">
        <Input
          name="Twitter"
          Change={(value) => setState({ ...state, twitter: value })}
          subtitle="The handle without the @"
          icon={BsTwitter}
          value={value ? value.twitter : undefined}
        />
      </div>
      <div className="w-60 m-7">
        <Input
          name="Instagram"
          Change={(value) => setState({ ...state, instagram: value })}
          subtitle="The handle without the @"
          icon={BsInstagram}
          value={value ? value.instagram : undefined}
        />
      </div>
    </div>
  );
}

export default SocialMedias;
