import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { localAnimeImages, messageVisual } from '../data/animeAssets.js'

export default function MessagePage(){
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(()=>{
    setShowConfetti(true)
    const timer = setTimeout(()=>setShowConfetti(false), 5000)
    return ()=>clearTimeout(timer)
  },[])

  return (
    <section className="relative space-y-6">
      {showConfetti && <Confetti />}

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white/60 shadow-2xl">
          <img
            src={messageVisual.url}
            alt={messageVisual.alt}
            className="h-full min-h-[250px] sm:min-h-[400px] w-full object-cover"
          />
        </div>

        <div className="flex rounded-2xl sm:rounded-3xl border border-white/60 bg-white/80 p-5 text-center shadow-xl backdrop-blur sm:p-8">
          <div className="m-auto max-w-xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-pink-600">Special message</p>
            <h2 className="h-font mt-2 text-3xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">For Your Birthday</h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 font-medium">
              Your smile brings boundless warmth and joy to my world.
              <br/>
              Having someone as wonderful as you is the greatest gift of all.
              <br/>
              Happy Birthday, with all my heart and love.
            </p>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
              May every hour of today be as bright, gentle, and lovely as you are.
            </p>
            <Link to="/contact" className="focus-ring mt-6 sm:mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-pink-500/30 ring-2 ring-pink-300/40 transition hover:scale-105 active:scale-95">
              Leave a Message 💌
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {[localAnimeImages[8], localAnimeImages[10], localAnimeImages[13]].map((image) => (
          <div key={image.url} className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow">
            <img src={image.url} alt={image.alt} loading="lazy" className="h-40 sm:h-44 w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

function Confetti(){
  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden>
      {Array.from({length:50}).map((_,i)=>{
        const delay = Math.random()*1000
        const x = Math.random()*100
        const dur = 2000 + Math.random()*2000
        const colors = ['#FF6B8A','#7CE7C4','#FFD700','#FF69B4','#87CEEB']
        const col = colors[Math.floor(Math.random()*colors.length)]
        return (
          <div
            key={i}
            className="absolute h-3 w-3 rounded-full"
            style={{
              left: x+'%',
              top: '-10px',
              background: col,
              animation: `confettiFall ${dur}ms linear ${delay}ms forwards`
            }}
          />
        )
      })}
    </div>
  )
}
