import Player from "@/components/music/player";
import Suggested from "@/components/music/suggested";
import MainLayout from "@/layouts/MainLayout";
import musics from "@/utils/musics";
import React, { useEffect } from "react";
import { BsMusicNote } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const MusicIdPage = () => {
  const [music, setMusic] = React.useState(null);
  const params = useParams();
  const otherMusics = musics.filter((music) => music.id !== Number(params.id));

  useEffect(() => {
    const music = musics.find((music) => music.id === Number(params.id));
    console.log('music', params.id, musics);
    setMusic(music);
  }, [params.id]);

  return (
    <MainLayout noBanner>
      <div className="min-h-[90vh] p-4 text-white flex flex-col">
        <div className="flex gap-3 w-full">
          <div className="flex lg:w-2/3 w-full flex-col">
            <Player ytId={music?.ytId}  />
            <div className="w-1/2 mt-4 px-3 gap-y-2 flex-col flex">
              <h1 className=" font-luckyGuy">{music?.title}</h1>
              <span>
                {music?.description}
              </span>
              <span>Released: {music?.released}</span>
            </div>
          </div>
          <Suggested />
        </div>
        <h1 className=" mt-6 text-xl px-2">More Videos</h1>
        {/* horizontal scroll */}
        <div className="flex flex-nowrap gap-4 overflow-x-auto mt-4">
          {otherMusics.map((music, i) => (
            <Link
              to={`/music/${music.id}`}
              key={i}
              className="flex border min-w-[300px] duration-300 p-0 m-0 border-[#454040] cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
            >
              <img
                className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
                src={music?.thumbnail ?? `https://i.ytimg.com/vi/${music?.ytId}/hqdefault.jpg`}
                alt={music?.title}
              />
              <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
                <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                  <BsMusicNote />
                </button>
                <span className=" font-roboto-serif">{music?.released}</span>
                <p className="text-2xl mt-4 font-bold text-center">{music.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MusicIdPage;
