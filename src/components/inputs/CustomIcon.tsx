import { IconType } from "react-icons";
type Props = {
  icon: IconType;
  link?: string;
  handle?: string;
};

function CustomIcon({ icon: Icon, link, handle }: Props) {
  const handleNavigate = () => {
    console.log(handle);
    if (handle === "youtube") {
      console.log("youtube");
      window.location.href = `https://m.youtube.com/@${link}`;
      return;
    }
    if (handle === "instagram") {
      console.log("instagram");
      window.location.href = `https://www.instagram.com/${link}`;
      return;
    }
    if (handle === "twitter") {
      console.log("twitter");
      window.location.href = `https://twitter.com/${link}`;
      return;
    }
  };
  // let body: unknown;

  return (
    <div
      onClick={() => {
        handleNavigate();
      }}
      className="cursor-pointer mx-3"
    >
      <Icon size={26} />
    </div>
  );
}

export default CustomIcon;
