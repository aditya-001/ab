import React, { useEffect, useState } from 'react'
export default function ThemeToggle() {
  const [contrast, setContrast] = useState(()=>localStorage.getItem('contrast')==='high')
  useEffect(()=>{
    localStorage.setItem('contrast', contrast?'high':'soft')
    document.documentElement.classList.toggle('contrast', contrast)
  },[contrast])
  return (
    <button className="px-3 py-1 rounded-full bg-white/70 hover:bg-white text-sm focus-ring" onClick={()=>setContrast(v=>!v)} title="Toggle contrast">
      {contrast ? 'High Contrast' : 'Soft Theme'}
    </button>
  )
}
