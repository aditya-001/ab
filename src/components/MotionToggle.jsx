import React from 'react'
export default function MotionToggle({ enabled, onToggle }) {
  return (
    <button className="px-3 py-1 rounded-full bg-white/70 hover:bg-white text-sm focus-ring" onClick={()=>onToggle(!enabled)} aria-pressed={enabled} title="Toggle animations">
      {enabled ? 'Motion: On' : 'Motion: Off'}
    </button>
  )
}
