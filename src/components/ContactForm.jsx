import React, { useRef, useState } from 'react'

function heartBurst(x,y){
  const n = 16
  for(let i=0;i<n;i++){
    const el = document.createElement('span')
    el.textContent = '<3'
    el.style.position='fixed'
    el.style.left = x+'px'
    el.style.top = y+'px'
    el.style.pointerEvents='none'
    el.style.zIndex=60
    el.style.transition='transform 900ms, opacity 900ms'
    el.style.opacity='1'
    el.style.color='#FF6B8A'
    el.style.fontWeight='700'
    document.body.appendChild(el)
    const a = (i/n)*Math.PI*2
    const dx = Math.cos(a)*80, dy=Math.sin(a)*80
    requestAnimationFrame(()=>{
      el.style.transform = `translate(${dx}px, ${dy}px) scale(0.8)`
      el.style.opacity='0'
    })
    setTimeout(()=>document.body.removeChild(el), 1000)
  }
}

export default function ContactForm({ onWishAdded }){
  const [name,setName]=useState('')
  const [msg,setMsg]=useState('')
  const [url,setUrl]=useState('')
  const [sent,setSent]=useState(false)
  const linkRef = useRef(null)

  const onSubmit = (e)=>{
    e.preventDefault()
    if (!msg.trim()) return
    const { clientX, clientY } = (e.nativeEvent.changedTouches?.[0]) || e
    heartBurst(clientX||400, clientY||400)
    setSent(true)
    setTimeout(()=>setSent(false), 2500)

    const c = document.createElement('canvas')
    c.width=1000; c.height=600
    const g = c.getContext('2d')
    const grad = g.createLinearGradient(0,0,1000,600)
    grad.addColorStop(0,'#FFF0F6'); grad.addColorStop(0.5,'#FFEFD9'); grad.addColorStop(1,'#E8F9FF')
    g.fillStyle = grad; g.fillRect(0,0,1000,600)
    g.fillStyle = '#FF6B8A'; g.font='bold 52px Georgia'; g.fillText('Happy Birthday!', 300, 140)
    g.fillStyle = '#333'; g.font='28px Arial';
    const text = `${name ? name+',' : ''} ${msg}`
    wrapText(g, text, 120, 240, 760, 36)
    const data = c.toDataURL('image/png')
    setUrl(data)
    try {
      const gb = JSON.parse(localStorage.getItem('guestbook')||'[]')
      gb.unshift({name:name||'Anon',msg,at:Date.now()})
      localStorage.setItem('guestbook', JSON.stringify(gb.slice(0,20)))
      if (onWishAdded) onWishAdded()
    } catch {}
  }

  return (
    <div className="rounded-2xl border border-white/60 bg-white/75 p-4 shadow-lg">
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <input className="focus-ring rounded-xl bg-white/85 px-3 py-2" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
        <textarea className="focus-ring rounded-xl bg-white/85 px-3 py-2" placeholder="Write a sweet note" rows={4} value={msg} onChange={e=>setMsg(e.target.value)} />
        <button className="focus-ring self-start rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-6 py-2.5 font-semibold text-white shadow-md shadow-pink-500/25 transition hover:scale-105 active:scale-95" type="submit">Send Wish 💌</button>
      </form>
      {sent && <p className="mt-3 rounded-xl bg-pink-50 px-3 py-2 text-sm text-pink-700 font-medium">✨ Wish sent with love.</p>}
      {url && (
        <div className="mt-4 rounded-xl bg-white/80 p-3">
          <p className="mb-2 text-sm font-medium text-gray-700">Thank you! Download your personalized e-card:</p>
          <a ref={linkRef} download="ecard.png" href={url} className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:scale-105 transition">Download e-card ✨</a>
        </div>
      )}
    </div>
  )
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight){
  const words = text.split(' ')
  let line = ''
  for(let n=0;n<words.length;n++){
    const test = line + words[n] + ' '
    const m = ctx.measureText(test)
    if (m.width > maxWidth && n>0){
      ctx.fillText(line, x, y); line = words[n] + ' '; y += lineHeight
    } else {
      line = test
    }
  }
  ctx.fillText(line, x, y)
}
