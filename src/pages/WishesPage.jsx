import React, { useEffect, useState } from 'react'
import { localAnimeImages, wishCards } from '../data/animeAssets.js'

const birthdayLetter = `Dearest one,

On this extraordinary day, I wish you endless happiness, boundless joy, and unforgettable moments filled with warmth.

May your life be as radiant as your smile, and may every dream you hold close to your heart come true. You bring sunshine, comfort, and pure magic into every life you touch.

Celebrate today knowing how deeply cherished and truly special you are. Happy Birthday! 💖✨`

export default function WishesPage(){
  const [guestName,setGuestName]=useState('')
  const [guestMsg,setGuestMsg]=useState('')
  const [displayedText, setDisplayedText] = useState('')
  const [isDone, setIsDone] = useState(false)
  const [list,setList]=useState(()=>{
    try { return JSON.parse(localStorage.getItem('guestbook')||'[]') } catch { return [] }
  })
  useEffect(()=>{ try { localStorage.setItem('guestbook', JSON.stringify(list)) } catch {} },[list])

  useEffect(() => {
    let index = 0
    setDisplayedText('')
    setIsDone(false)
    const interval = setInterval(() => {
      index++
      setDisplayedText(birthdayLetter.slice(0, index))
      if (index >= birthdayLetter.length) {
        setIsDone(true)
        clearInterval(interval)
      }
    }, 25)
    return () => clearInterval(interval)
  }, [])

  const handleToggleTyping = () => {
    if (isDone) {
      setDisplayedText('')
      setIsDone(false)
      let idx = 0
      const id = setInterval(() => {
        idx++
        setDisplayedText(birthdayLetter.slice(0, idx))
        if (idx >= birthdayLetter.length) {
          setIsDone(true)
          clearInterval(id)
        }
      }, 25)
    } else {
      setDisplayedText(birthdayLetter)
      setIsDone(true)
    }
  }

  const add = (e)=>{
    e.preventDefault()
    if (!guestMsg.trim()) return
    setList([{name:guestName||'Anon',msg:guestMsg,at:Date.now()}, ...list].slice(0,20))
    setGuestMsg('')
  }

  const deleteWish = (indexToDelete) => {
    setList(prev => prev.filter((_, i) => i !== indexToDelete))
  }

  const clearAllWishes = () => {
    setList([])
  }

  return (
    <section className="space-y-5 sm:space-y-6">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/60 bg-white/70 shadow-xl">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="flex flex-col justify-between p-4 sm:p-8 lg:p-10 bg-gradient-to-br from-white/95 via-pink-50/40 to-purple-50/30">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-100/70 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-pink-700 shadow-sm">
                  ✨ Birthday Letter
                </span>
                <button
                  type="button"
                  onClick={handleToggleTyping}
                  className="text-xs font-semibold text-pink-600 hover:text-pink-800 transition px-2.5 py-1 rounded-full bg-white/80 border border-pink-200 hover:bg-white shadow-sm"
                  title={isDone ? "Replay typing" : "Show all immediately"}
                >
                  {isDone ? "Replay ✍️" : "Skip ⏩"}
                </button>
              </div>

              <h2 className="h-font mt-2.5 sm:mt-3 text-3xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                Sweet Birthday Note
              </h2>

              <div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl border border-pink-100 bg-white/85 p-3.5 sm:p-5 shadow-sm backdrop-blur-sm">
                <p className="whitespace-pre-line text-xs sm:text-base leading-relaxed text-gray-700 font-normal min-h-[140px] sm:min-h-[160px]">
                  {displayedText}
                  {!isDone && (
                    <span className="inline-block w-2 h-4 sm:h-4.5 ml-1 bg-pink-500 animate-pulse align-middle rounded-sm" />
                  )}
                </p>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-1 border-t border-pink-100/80 pt-2.5 text-[11px] sm:text-xs text-pink-600/80 font-medium">
              <span>💌 Written with love & sweet wishes</span>
              <span>Forever & Always 🌸</span>
            </div>
          </div>

          <div className="relative min-h-[220px] sm:min-h-[320px] md:min-h-full">
            <img
              src={localAnimeImages[3].url}
              alt={localAnimeImages[3].alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <section className="grid gap-3 sm:gap-4">
          {wishCards.map((card) => (
            <article key={card.title} className="flex min-w-0 items-center gap-3 sm:gap-4 rounded-2xl border border-white/70 bg-white/80 p-3 sm:p-4 shadow-lg backdrop-blur transition hover:scale-[1.01] hover:border-pink-300">
              <img
                src={card.thumb}
                alt=""
                loading="lazy"
                className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-xl object-cover shadow-sm ring-2 ring-pink-100"
              />
              <div className="min-w-0">
                <h3 className="h-font text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">{card.title}</h3>
                <p className="mt-1 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700">{card.message}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg backdrop-blur">
          <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
            <span>✨ Add your wish</span>
          </h3>
          <form onSubmit={add} className="mt-4 flex flex-col gap-3">
            <input className="focus-ring rounded-xl border border-pink-100 bg-white/90 px-3.5 py-2.5 text-sm shadow-sm" placeholder="Name (optional)" value={guestName} onChange={e=>setGuestName(e.target.value)} />
            <textarea className="focus-ring rounded-xl border border-pink-100 bg-white/90 px-3.5 py-2.5 text-sm shadow-sm" placeholder="Your sweet message" rows={4} value={guestMsg} onChange={e=>setGuestMsg(e.target.value)} />
            <button className="focus-ring self-start rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-6 py-2.5 font-semibold text-white shadow-md shadow-pink-500/25 transition hover:scale-105 active:scale-95" type="submit">Send Wish 💌</button>
          </form>
          <div className="mt-4 flex items-center justify-between border-b border-pink-100 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-600">Messages ({list.length})</h4>
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
          <div className="mt-2 max-h-64 space-y-2 overflow-auto pr-1">
            {list.map((it,i)=> (
              <div key={i} className="group relative rounded-xl border border-pink-100/70 bg-white/90 p-3 text-sm shadow-sm transition hover:shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-gray-800">{it.name}</p>
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
                <p className="mt-1 text-gray-700">{it.msg}</p>
                {it.at && <p className="mt-1 text-[10px] text-gray-400">{new Date(it.at).toLocaleDateString()}</p>}
              </div>
            ))}
            {list.length===0 && <p className="py-2 text-sm text-gray-500">No wishes yet. Be the first to leave one!</p>}
          </div>
        </section>
      </div>
    </section>
  )
}
