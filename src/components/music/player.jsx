import { usePlayer } from "@/contexts/PlayerContext";
import React, { useEffect, useRef, useState } from "react";
import Controls from "./controlls";
import { BiPause, BiPlay } from "react-icons/bi";
import useAverageColor from "@/hooks/use-average-color";

const Player = ({ src, ytId, thumbnail }) => {
  const vidEl = useRef(null);
  const {
    playerState,
    setPlayerState,
    currentPlaying,
    handleNext,
    handlePrev,
  } = usePlayer();
  const [showPausePlay, setShowPausePlay] = useState({
    state: false,
    timer: 0,
  });
  const [hide, setHide] = useState(false);
  const [timer, setTimer] = useState(0);
  // const avgColor = useAverageColor('/sample.mp4');

  const onContextMenuHandler = (e, el) => {
    e.preventDefault();
    console.log("right click", vidEl.current?.currentTime);
  };

  const handleOnTimeUpdate = () => {
    const progress = vidEl.current?.currentTime;
    console.log("progress", progress);
    setPlayerState({
      ...playerState,
      progress,
    });
    // if (curRef.currentTime === curRef.duration) handleNext()
  };

  const togglePlay = () => {
    clearTimeout(showPausePlay.timer);
    setShowPausePlay({ ...showPausePlay, state: true });
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
    setTimeout(() => {
      setShowPausePlay({ ...showPausePlay, state: false });
    }, 1000);
  };

  useEffect(() => {
    const curRef = vidEl.current;
    playerState.isPlaying ? curRef?.play() : curRef?.pause();
  }, [playerState.isPlaying, vidEl]);

  return (
    <div className=" aspect-video w-full">
      <iframe
        className=" w-full aspect-video"
        src={`https://www.youtube.com/embed/${ytId}?autoplay=1&si=xvMxYxXakoaxAvRi`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {/* <div className={`w-full flex gap-2 text-white relative player`}>
        <div
          onMouseMove={() => {
            setHide(false);
            clearTimeout(timer);
            const timeout = setTimeout(() => {
              setHide(true);
            }, 2000);
            setTimer(timeout);
          }}
          className=" flex bg-[#1a0707] shadow flex-col relative rounded-lg overflow-hidden aspect-video w-full"
          style={{
            // backgroundColor: avgColor,
          }}
        >
          <video
            ref={vidEl}
            onTimeUpdate={handleOnTimeUpdate}
            className="w-full cursor-pointer h-full object-contain"
            onClick={togglePlay}
            autoPlay={true}
            controls
            id="video"
            muted
            loop
            preload="auto"
            poster="https://www.ktpress.rw/wp-content/uploads/2022/01/Ariel-wayz-1024x736-1.jpg"
            onContextMenu={(e, el) => onContextMenuHandler(e, el)}
          >
            <source src="https://player.vimeo.com/external/338064905.sd.mp4?s=468058f956610f28d7d8cab7fbc5890b004a9481&profile_id=164&oauth2_token_id=57447761" />
          </video>
          {showPausePlay.state && (
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/10">
              <div
                onClick={togglePlay}
                className="flex items-center duration-300 justify-center rounded-full bg-stone-800/50 p-2"
              >
                {playerState.isPlaying ? (
                  <BiPause className="text-[3em]" />
                ) : (
                  <BiPlay className="ml-1 text-[3em]" />
                )}
              </div>
            </div>
          )}
        </div>
        {vidEl && <Controls togglePlay={togglePlay} vidEl={vidEl?.current} />}
      </div> */}
    </div>
  );
};

export default Player;
