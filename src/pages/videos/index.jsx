import MainLayout from "@/layouts/MainLayout";
import { BsPlay } from "react-icons/bs";
import pic15 from "@/assets/pic15.jpg";
import pic6 from "@/assets/pic6.jpg";
import pic7 from "@/assets/pic7.jpg";
import pic8 from "@/assets/pic8.jpg";
import "./Videos.css";
import musics from "@/utils/musics";
import { Link } from "react-router-dom";

const VideosPage = () => {
  return (
    <MainLayout>
      <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 five:grid-cols-2   gap11">
        {musics.map((video, i) => (
          <div key={i} className="wrapper border-[#341717] p-0 m-0 border-[1px]">
            <img
              className="image"
              src={
                video?.thumbnail ??
                `https://i.ytimg.com/vi/${video?.ytId}/hqdefault.jpg`
              }
              alt=""
            />
            <Link
              to={`/music/${video.id}`}
              className="overlay flex flex-col items-center justify-center"
            >
              <p className="text-2xl text-white mt-4 font-bold text-center">
                {video.title}
              </p>
              <span className=" text-white flex items-center gap-x-3">
                Play
                <BsPlay size={30} />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default VideosPage;
