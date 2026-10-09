import React, { useEffect, useRef, useState } from 'react'

const tracks = [
  { name: 'Song 1', src: '/assets/music/m3.ogg' },
  { name: 'Song 2', src: '/assets/music/m1.m4a' },
  { name: 'Song 3', src: '/assets/music/m2.m4a' },
  { name: 'Song 4', src: '/assets/music/m4.ogg' },
  { name: 'Song 5', src: '/assets/music/m5.mpeg' },
  { name: 'Song 6', src: '/assets/music/m6.ogg' },
]

export default function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.load()
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => setPlaying(false))
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [playing, currentTrackIndex])

  const togglePlay = () => {
    setPlaying(prev => !prev)
  }

  const nextTrack = (e) => {
    e.stopPropagation()
    setCurrentTrackIndex(prev => (prev + 1) % tracks.length)
    if (!playing) setPlaying(true)
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-pink-200/80 bg-white/80 p-0.5 shadow-sm backdrop-blur">
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        src={tracks[currentTrackIndex].src}
      />
      <button
        type="button"
        onClick={togglePlay}
        className={`flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold transition ${
          playing
            ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-sm'
            : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
        }`}
        title={playing ? 'Pause music' : 'Play background music'}
      >
        <span>{playing ? '🎵' : '🔇'}</span>
        <span>{playing ? `Music ${currentTrackIndex + 1}` : 'Music'}</span>
      </button>

      {playing && (
        <button
          type="button"
          onClick={nextTrack}
          className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] text-gray-500 hover:bg-pink-100 hover:text-pink-700 transition"
          title="Next song"
          aria-label="Next song"
        >
          ⏭️
        </button>
      )}
    </div>
  )
}

