import React, { useState } from 'react'

export default function WishCard({ thumb, title, message }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <button className={`flip w-full ${flipped?'flipped':''}`} onClick={()=>setFlipped(f=>!f)} aria-label={`Wish: ${title}`}>
      <div className="flip-inner relative w-full h-44">
        <div className="flip-face absolute inset-0 rounded-2xl bg-white/70 border border-white/60 shadow p-4 text-left">
          <div className="flex gap-3 items-center">
            <img src={thumb} alt="thumb" loading="lazy" className="w-14 h-14 rounded-xl object-cover"/>
            <div>
              <p className="font-semibold text-black/80">{title}</p>
              <p className="text-sm text-black/60">Tap to reveal…</p>
            </div>
          </div>
        </div>
        <div className="flip-face flip-back absolute inset-0 rounded-2xl bg-white/90 border border-white/70 shadow p-4 text-left">
          <p className="text-black/80 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </button>
  )
}
