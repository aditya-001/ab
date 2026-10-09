import React, { useState } from 'react'
import ContactForm from '../components/ContactForm.jsx'
import { contactVisual } from '../data/animeAssets.js'

export default function ContactPage(){
  const [list, setList] = useState(()=>{
    try { return JSON.parse(localStorage.getItem('guestbook')||'[]') } catch { return [] }
  })

  const deleteWish = (indexToDelete) => {
    setList(prev => {
      const updated = prev.filter((_, i) => i !== indexToDelete)
      try { localStorage.setItem('guestbook', JSON.stringify(updated)) } catch {}
      return updated
    })
  }

  const clearAllWishes = () => {
    setList([])
    try { localStorage.setItem('guestbook', JSON.stringify([])) } catch {}
  }

  return (
    <section className="grid gap-4 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/60 bg-white/70 shadow-xl">
        <img src={contactVisual.url} alt={contactVisual.alt} loading="lazy" className="h-52 sm:h-72 w-full object-cover lg:h-full" />
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <h3 className="h-font text-3xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">Send a Sweet Note</h3>
          <p className="mb-3 sm:mb-4 mt-2 text-xs sm:text-sm text-black/70">Leave a birthday message and get a downloadable e-card.</p>
          <ContactForm onWishAdded={() => {
            try { setList(JSON.parse(localStorage.getItem('guestbook')||'[]')) } catch {}
          }} />
        </div>
        <div className="rounded-2xl border border-white/60 bg-white/75 p-3.5 sm:p-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-pink-100 pb-2">
            <h4 className="font-semibold text-black/80">Guestbook Entries ({list.length})</h4>
            {list.length > 0 && (
              <button
                type="button"
                onClick={clearAllWishes}
                className="text-xs font-semibold text-red-500 hover:text-red-700 hover:underline transition"
              >
                Clear all 🗑️
              </button>
            )}
          </div>
          <div className="mt-3 max-h-72 space-y-2 overflow-auto pr-1">
            {list.length===0 && <p className='text-sm text-black/60 py-2'>No entries yet. Be the first.</p>}
            {list.map((it,i)=> (
              <div key={i} className="group relative rounded-xl border border-pink-100/70 bg-white/90 p-3 text-sm shadow-sm transition hover:shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-black/80">{it.name}</p>
                  <button
                    type="button"
                    onClick={() => deleteWish(i)}
                    className="rounded p-1 text-xs text-gray-400 opacity-80 transition hover:bg-red-50 hover:text-red-600 hover:opacity-100"
                    title="Delete this message"
                    aria-label="Delete this message"
                  >
                    🗑️
                  </button>
                </div>
                <p className="mt-1 text-black/70">{it.msg}</p>
                <p className="mt-1 text-xs text-black/50">{new Date(it.at).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
