import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteCreatorById, getCreatorById } from "../client";
import { IconType } from "react-icons";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import CustomButton from "../components/inputs/CustomButton";
import CustomIcon from "../components/inputs/CustomIcon";

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
  handle: string;
  name: string;
};
export default function ShowCreator() {
  const [user, setUser] = useState<creatorType | null>(null);
  const location = useLocation();
  //const navigate = useNavigate();

  const handleEdit = () => {
    console.log((user as creatorType).id);
    window.location.href = `/EditCreator/?id=${(user as creatorType).id}`;
  };

  console.log(location.search); // "?query=foo"

  const query = new URLSearchParams(location.search);
  const id: string | null = query.get("id");
  const socials: socialType[] = [];

  if (user?.twitter && (user?.twitter?.length > 0 || user?.twitter !== null)) {
    socials.push({ icon: BsTwitter, handle: "twitter", name: user.twitter });
  }
  if (
    user?.instagram &&
    (user?.instagram?.length > 0 || user?.instagram !== null)
  ) {
    socials.push({
      icon: GrInstagram,
      handle: "instagram",
      name: user.instagram,
    });
  }
  if (user?.youtube && (user?.youtube?.length > 0 || user?.youtube !== null)) {
    socials.push({ icon: ImYoutube, handle: "youtube", name: user.youtube });
  }

  const handleDelete = async () => {
    const pass = prompt('type "Delete" to delete');
    if (pass === "Delete") {
      if (id) {
        window.location.href = `/`;
        deleteCreatorById(parseInt(id));
      }
    } else {
      alert("Canceled");
      return;
    }
  };

  console.log(socials);
  useEffect(() => {
    async function fetchData() {
      if (id) {
        console.log(parseInt(id));
        const data = await getCreatorById(parseInt(id));
        console.log(data);
        if (data) {
          setUser(data);
        }
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="">
      <div className="text-stone-50 h-[51rem] w-full  px-10 pt-5">
        <div className=" h-3/4  md:flex ">
          <div className=" flex-1 ">
            <img className="w-full h-full  rounded-lg" src={user?.url} />
          </div>
          <div className=" flex-1 p-6">
            <div className="font-bold text-4xl text-blue-400 ">
              {user?.name}
            </div>
            <div className="font-bold text-md my-5 text-blue-400">
              {user?.description}
            </div>
            <div className="">
              {socials.map(({ handle, name, icon }) => {
                return (
                  <div key={handle} className="flex text-blue-400 m-5">
                    <CustomIcon icon={icon} handle={handle} link={name} />
                    <div className="text-4xl font-bold ml-4">@{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-8 text-green-500 flex justify-around ">
            {" "}
            <div onClick={() => handleEdit()} className="cursor-pointer ">
              <CustomButton title="EDIT" />
            </div>
            <div onClick={() => handleDelete()} className="">
              <CustomButton title="DELETE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
