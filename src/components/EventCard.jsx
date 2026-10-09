import React from 'react'

export default function EventCard({ icon, title, when, details }) {
  return (
    <div className="rounded-2xl bg-white/70 border border-white/60 shadow p-4 flex items-start gap-3">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="font-semibold text-black/80">{title}</p>
        <p className="text-sm text-black/60">{when}</p>
        <p className="text-sm mt-1 text-black/70">{details}</p>
      </div>
    </div>
  )
}
