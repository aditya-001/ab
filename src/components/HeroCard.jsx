import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroCard() {
  return (
    <div className="mx-auto max-w-sm w-full">
      <div className="relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl p-6 text-center animate-[fadeIn_700ms_ease]">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/23/14/54/bear-1850228_1280.png"
          alt="Cute teddy bear"
          loading="eager"
          className="mx-auto w-40 h-40 object-contain drop-shadow"
        />
        <h1 className="h-font text-4xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mt-3">Happy Bday! 💖</h1>
        <p className="text-gray-700 mt-2 leading-relaxed">Happy Birthday! May your day be blessed with endless happiness, love, and sunshine.</p>
        <Link to="/wishes" className="mt-5 inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold shadow-md shadow-pink-500/25 transition hover:scale-105 active:scale-95 focus-ring">Next →</Link>
      </div>
    </div>
  )
}
