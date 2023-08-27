import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { FaCircleInfo } from "react-icons/fa6";
import { BiSolidPencil } from "react-icons/bi";

//import CustomIcon from "./inputs/CustomIcon";
import { IconType } from "react-icons";
import CustomIcon from "./inputs/CustomIcon";
import { useNavigate } from "react-router-dom";
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
type socialType = {
  icon: IconType;
  link: string;
  handle: string;
};
function CreatorCard({
  created_at,
  id,
  name,
  url,
  description,
  twitter,
  instagram,
  youtube,
}: creatorType) {
  console.log(created_at, id);
  const socials: socialType[] = [];
  const navigate = useNavigate();
  const truncate = (description: string): string => {
    if (description.length <= 95) {
      return description;
    }

    return `${description.substring(0, 95)}...`;
  };

  if (twitter && (twitter?.length > 0 || twitter !== null)) {
    socials.push({ icon: BsTwitter, link: twitter, handle: "twitter" });
  }
  if (instagram && (instagram?.length > 0 || instagram !== null)) {
    socials.push({
      icon: GrInstagram,
      link: instagram,
      handle: "instagram",
    });
  }
  if (youtube && (youtube?.length > 0 || youtube !== null)) {
    socials.push({ icon: ImYoutube, link: youtube, handle: "youtube" });
  }

  return (
    <div className="w-[23rem] h-[16rem] border-blue-800 border-1 border m-6 ">
      <div className="w-full grid h-3/6 border-x-sky-400 border-1 border justify-center bg-blue-500">
        <img className="w-[69%] " src={url} />
      </div>
      <div className="flex justify-items-stretch px-6 relative">
        <div className="text-stone-50 flex-1 font-bold text-lg">{name}</div>
        <div className="text-stone-50 flex-1 absolute right-0 py-2 px-3 flex ">
          <div
            onClick={() => navigate(`/ShowCreator/?id=${id}`)}
            className="mx-1 cursor-pointer"
          >
            <FaCircleInfo size={20} />
          </div>
          <div
            onClick={() => navigate(`/EditCreator/?id=${id}`)}
            className="mx-1 cursor-pointer"
          >
            <BiSolidPencil size={20} />
          </div>
        </div>
      </div>
      <div className="text-stone-50 px-5 flex">
        {socials.map((data) => (
          <CustomIcon
            key={data.link}
            icon={data.icon}
            handle={data.handle}
            link={data.link}
          />
        ))}
      </div>
      <div className="text-stone-50 px-2">{truncate(description)}</div>
    </div>
  );
}

export default CreatorCard;
