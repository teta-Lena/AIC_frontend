import { createContext, useContext, useState } from 'react'
import { getRandomIndex } from '@/utils';

const PlayerContext = createContext({
  playerState: {
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
    isFullScreen: false,
    isPicInPic: false,
    volume: 50,
    loop: 'none',
    shuffle: false
  },
  setPlayerState: () => {},
  currentPlaying: {
    file: {},
    url: '/sample.mp4',
  },
  setCurrentPlaying: () => {},
  files: [],
  setFiles: () => {},
  handleNext: () => {},
  handlePrev: () => {},
  handleLoop: () => {},
  handleShuffle: () => {},
  showPlayer: false,
  setShowPlayer: () => {}
})

// eslint-disable-next-line react-refresh/only-export-components
export const usePlayer = () => useContext(PlayerContext)

export const PlayerProvider = ({ children }) => {
  const [files, setFiles] = useState([])
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
    isFullScreen: false,
    isPicInPic: false,
    volume: 50,
    loop: 'none',
    shuffle: false
  })
  const [playedIndex, setPlayedIndex] = useState([])
  const [currentPlaying, setCurrentPlaying] = useState({
    file: files[0],
    url: '',
  })
  const [showPlayer, setShowPlayer] = useState(false)

  const handleNext = () => {
    const index = files.findIndex(
      (file) => file.name === currentPlaying?.file?.name
    )
    const nextIndex = playerState.shuffle? getRandomIndex(files.length, playedIndex) : index + 1
    if (index < files.length - 1 || playerState.shuffle) {
      const file = files[nextIndex]
      const url = URL.createObjectURL(file)
      setCurrentPlaying({ file, url })
    } else if (index === files.length -1 && playerState.loop === 'all') {
      const file = files[0]
      const url = URL.createObjectURL(file)
      setCurrentPlaying({ file, url })
    }

    if(playedIndex.length === files.length){
      setPlayedIndex([])
    } else {
      setPlayedIndex([...playedIndex, nextIndex])
    }
  }

  const handlePrev = () => {
    const index = files.findIndex(
      (file) => file.name === currentPlaying.file?.name
    )
    if (index > 0) {
      const file = files[index - 1]
      const url = URL.createObjectURL(file)
      setCurrentPlaying({ file, url })
    }
  }

  const handleLoop = (el) => {
    if (playerState.loop === 'none') {
      el.loop = false
      setPlayerState({ ...playerState, loop: 'all' })
    } else if (playerState.loop === 'all') {
      el.loop = true
      setPlayerState({ ...playerState, loop: 'one' })
    } else {
      el.loop = false
      setPlayerState({ ...playerState, loop: 'none' })
    }
  }

  const handleShuffle = ()=> {
    setPlayerState({ ...playerState, shuffle: !playerState.shuffle })
  }

  return (
    <PlayerContext.Provider
      value={{
        playerState,
        setPlayerState,
        currentPlaying,
        setCurrentPlaying,
        files,
        setFiles,
        handleNext,
        handlePrev,
        handleLoop,
        handleShuffle,
        showPlayer,
        setShowPlayer
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}