import React, { useEffect, useMemo, useState } from 'react'
import EventCard from '../components/EventCard.jsx'

function useCountdown(target){
  const [now,setNow]=useState(()=>Date.now())
  useEffect(()=>{ const t=setInterval(()=>setNow(Date.now()),1000); return ()=>clearInterval(t) },[])
  const diff = Math.max(0, target - now)
  const s = Math.floor(diff/1000)
  const d = Math.floor(s/86400)
  const h = Math.floor((s%86400)/3600)
  const m = Math.floor((s%3600)/60)
  const sec = s%60
  return { d,h,m,sec }
}

export default function EventsPage(){
  const mainDate = useMemo(()=> new Date(new Date().getFullYear(), 11, 25, 19, 0, 0).getTime(), []) // sample
  const {d,h,m,sec} = useCountdown(mainDate)

  return (
    <section className="space-y-4">
      <div className="rounded-2xl bg-white/70 border border-white/60 shadow p-4">
        <p className="font-semibold mb-2">Main Event Countdown</p>
        <div className="text-2xl font-mono">{d}d : {h}h : {m}m : {sec}s</div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <EventCard icon="🎂" title="Cake Time" when="7:00 PM" details="Cut the cake and make a wish!" />
        <EventCard icon="🎁" title="Surprise" when="7:30 PM" details="Tiny surprise segment (shh!)." />
        <EventCard icon="📹" title="Video Call" when="8:00 PM" details="Join call with friends and family." />
      </div>
    </section>
  )
}
