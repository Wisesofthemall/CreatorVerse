// import { getCreators } from "../client";
import { useEffect, useState } from "react";
import CreatorCard from "./CreatorCard";
import { getCreators } from "../client";

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
function ViewCreators() {
  const [creators, setCreators] = useState<creatorType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCreators();
      setCreators(data);
    }

    fetchData();
  }, []);

  return (
    <div className="grid justify-start px-14">
      <div className=" mt-10 flex flex-wrap  gap-8">
        {" "}
        {creators.map((data) => (
          <CreatorCard
            created_at={data.created_at}
            id={data.id}
            name={data.name}
            url={data.url}
            description={data.description}
            twitter={data.twitter}
            instagram={data.instagram}
            youtube={data.youtube}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ViewCreators;
