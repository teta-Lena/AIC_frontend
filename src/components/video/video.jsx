import React, { useRef, useState } from "react";
import vid from "../../assets/y2mate.com - Ariel Wayz  SHAYO Official Video_720p - Trim - Trim.mp4";

import {
  FaVideo,
  FaMicrophone,
  FaEdit,
  FaSignOutAlt,
  FaMicrophoneSlash,
  FaVideoSlash,
  FaPlay,
  FaPause,
} from "react-icons/fa";

function VideoControls() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [username, setUsername] = useState("Your Name");

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    // Mute/unmute logic
  };

  const handleToggleCamera = () => {
    setIsCameraOn(!isCameraOn);
    // Toggle camera logic
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
    // Pause/resume logic
  };

  const handleEditName = () => {
    // Edit name logic
  };

  const handleLeaveStudio = () => {
    // Leave studio logic
  };

  return (
    <div>
      <div className="home-container">
        <div className="home-video">
          <div className="video-wrapper flex flex-col max-h-[575px] w-3/4">
            <video autoPlay loop muted className="home-video">
              <source src={vid} type="video/mp4" />
            </video>
          </div>
        </div>

        <div id="live-controls">
          <button onClick={handleToggleMute}>
            {isMuted ? <FaMicrophone /> : <FaMicrophoneSlash />}
          </button>
          <button onClick={handleToggleCamera}>
            {isCameraOn ? <FaVideo /> : <FaVideoSlash />}
          </button>
          <button onClick={handleTogglePause}>
            {isPaused ? <FaPlay /> : <FaPause />}
          </button>
          <button onClick={handleEditName}>
            <FaEdit />
          </button>
          <button onClick={handleLeaveStudio}>
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoControls;
