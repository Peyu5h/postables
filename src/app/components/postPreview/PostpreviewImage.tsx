import Image from "next/image";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const PreviewImage = ({ activePost }: { activePost: string }) => {
  const getIcon = () => {
    switch (activePost) {
      case "Instagram Story":
        return <FaInstagram className="text-lg" />;
      case "LinkedIn Post":
        return <FaLinkedin className="text-lg" />;
      case "Facebook Post":
        return <FaFacebookSquare className="text-lg" />;
      case "X Post":
        return <FaSquareXTwitter className="text-lg" />;
      default:
        return <FaInstagram className="text-lg" />;
    }
  };

  const getPostDimensions = () => {
    const baseWidth = 416;
    let aspectRatio: number;

    switch (activePost) {
      case "Instagram Story":
        aspectRatio = 9 / 16;
        break;
      case "X Post":
        aspectRatio = 3 / 4;
        break;
      default:
        aspectRatio = 1 / 1;
    }

    const height = Math.round(baseWidth / aspectRatio);
    return { width: baseWidth, height };
  };

  const { width, height } = getPostDimensions();

  return (
    <div className="group/preview relative flex h-fit w-fit flex-shrink-0 origin-bottom-left flex-col rounded-3xl transition-colors">
      <div
        className="relative flex h-12 w-full flex-shrink-0 select-none items-center gap-1 rounded-t-3xl bg-[#86B3E9]/80 px-5 text-white shadow-sm backdrop-blur-md"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="absolute inset-0 rounded-t-3xl bg-white/30"></div>
        <div className="relative z-10 flex w-full items-center gap-1">
          {getIcon()}
          <span className="flex-1 text-xs font-medium">{activePost}</span>
        </div>
      </div>
      <div
        className="relative overflow-hidden rounded-b-3xl transition-all duration-500 ease-in-out"
        style={{
          width: `${width}px`,
          height: `${height - 48}px`,
        }}
      >
        <div className="relative flex h-full w-full flex-1 items-center justify-center">
          <div
            className="absolute inset-0 h-full w-full bg-cover"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #FF783F, #FF7C67, #FFB77D, #F5DB00, #F8D003, #CFE76E, #7BEED9 , #00C3C8)",
              opacity: 1,
              willChange: "auto",
            }}
          />
          <Image
            src="https://res.cloudinary.com/dkysrpdi6/image/upload/v1729085596/postable/tweeeeeet_nv3vnu.png"
            alt="sample tweet"
            width={340}
            height={340}
            className="relative z-10 rounded-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewImage;
