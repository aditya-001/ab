import React, { useState } from 'react'

export default function GalleryGrid({ items }) {
  const [active, setActive] = useState(null)
  const [likes, setLikes] = useState({})
  const like = (url) => setLikes(s=>({ ...s, [url]: (s[url]||0)+1 }))

  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((it, i) => (
          <button
            key={`${it.url}-${i}`}
            type="button"
            onClick={()=>setActive(it)}
            className="focus-ring group flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/80 text-left shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-pink-300 hover:shadow-md"
          >
            <div className="aspect-[4/5] w-full overflow-hidden bg-pink-50/50">
              <img
                src={it.url}
                alt={it.alt||'love moment'}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 items-center p-2.5 sm:p-3 text-xs sm:text-sm font-medium leading-snug text-gray-700 transition group-hover:text-pink-600">
              <span className="line-clamp-2">{it.caption}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal
          className="fixed inset-0 z-50 flex items-center justify-center lb-backdrop p-3 sm:p-4 backdrop-blur-sm"
          onClick={()=>setActive(null)}
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-pink-100 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-md"
            onClick={e=>e.stopPropagation()}
          >
            <button
              type="button"
              onClick={()=>setActive(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-sm font-bold text-white transition hover:bg-black"
              aria-label="Close modal"
            >
              ✕
            </button>

            <img
              src={active.url}
              alt={active.alt||'moment view'}
              className="max-h-[60vh] w-full rounded-2xl object-contain bg-black/5"
            />

            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                {active.caption}
              </p>
              <button
                type="button"
                className="self-start sm:self-auto shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-pink-500/25 transition active:scale-95"
                onClick={()=>like(active.url)}
              >
                Love 💖 {likes[active.url]||0}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
