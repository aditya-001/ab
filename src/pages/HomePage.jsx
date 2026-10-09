import React from 'react'
import { Link } from 'react-router-dom'
import { heroVisual, localAnimeImages } from '../data/animeAssets.js'

const previewImages = [localAnimeImages[4], localAnimeImages[6], localAnimeImages[11]]

export default function HomePage(){
  return (
    <section className="space-y-6">
      <div className="relative min-h-[65vh] sm:min-h-[74vh] overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/60 shadow-2xl">
        <img
          src={heroVisual.url}
          alt={heroVisual.alt}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-purple-950/30 to-black/15" aria-hidden />

        <div className="relative z-10 flex min-h-[65vh] sm:min-h-[74vh] items-end justify-center px-4 pb-8 pt-14 sm:items-center sm:pb-16 sm:pt-24">
          <div className="max-w-2xl text-center text-white">
            <span className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 rounded-full border border-pink-300/40 bg-pink-500/20 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-pink-200 shadow-[0_0_20px_rgba(244,114,182,0.35)] backdrop-blur-md">
              ✨ Anime Birthday Card ✨
            </span>
            <h1 className="h-font text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide bg-gradient-to-r from-pink-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              Happy Birthday
            </h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-lg leading-relaxed text-pink-100/95 font-medium drop-shadow">
              Wishing you the happiest birthday! May your special day overflow with gentle smiles, lovely surprises, and sweet memories you will always hold dear.
            </p>
            <Link
              to="/wishes"
              className="focus-ring mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-[0_8px_25px_rgba(244,63,94,0.45)] ring-2 ring-pink-300/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(244,63,94,0.65)] hover:from-pink-400 hover:to-purple-500 active:scale-95"
            >
              Next →
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {previewImages.map((image) => (
          <div key={image.url} className="group overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-pink-300 hover:shadow-pink-200/50">
            <img src={image.url} alt={image.alt} loading="lazy" className="h-44 sm:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  )
}
