import React from 'react'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { animeGalleryItems, localAnimeImages } from '../data/animeAssets.js'

export default function GalleryPage(){
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-pink-200/50 pb-4">
        <div>
          <h1 className="h-font text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
            Memories Gallery ✨
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            A sweet collection of lovely anime moments & memories.
          </p>
        </div>
      </div>

      <GalleryGrid items={animeGalleryItems} />
    </section>
  )
}
