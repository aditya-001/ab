import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useLocation, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import WishesPage from './pages/WishesPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import MessagePage from './pages/MessagePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FloatingHeartsBg from './components/FloatingHeartsBg.jsx'
import MusicToggle from './components/MusicToggle.jsx'
import MotionToggle from './components/MotionToggle.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

export default function App() {
  const location = useLocation()
  const [motionEnabled, setMotionEnabled] = useState(() => {
    const saved = localStorage.getItem('motionEnabled')
    return saved ? JSON.parse(saved) : true
  })
  useEffect(() => localStorage.setItem('motionEnabled', JSON.stringify(motionEnabled)), [motionEnabled])

  return (
    <div
      className={`relative min-h-full overflow-x-hidden ${motionEnabled ? 'motion-ok' : ''}`}
      style={{
        background: 'linear-gradient(145deg, var(--bg1), var(--bg2), var(--bg3))'
      }}
    >
      <FloatingHeartsBg enabled={motionEnabled} />

      <header className="sticky top-0 z-20 border-b border-pink-200/50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="h-font shrink-0 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-1.5">
              <span>Happy Bday</span>
              <span className="text-lg sm:text-xl">💖</span>
            </Link>
            <div className="flex items-center gap-1.5 lg:hidden">
              <ThemeToggle />
              <MusicToggle />
            </div>
          </div>
          <nav className="flex max-w-full gap-1.5 sm:gap-2 overflow-x-auto py-0.5 text-xs sm:text-sm">
            <NavLink to="/" className={({isActive})=>`shrink-0 px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${isActive?'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/25':'text-gray-700 hover:text-pink-600 hover:bg-white/80'}`}>Home</NavLink>
            <NavLink to="/wishes" className={({isActive})=>`shrink-0 px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${isActive?'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/25':'text-gray-700 hover:text-pink-600 hover:bg-white/80'}`}>Wishes</NavLink>
            <NavLink to="/gallery" className={({isActive})=>`shrink-0 px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${isActive?'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/25':'text-gray-700 hover:text-pink-600 hover:bg-white/80'}`}>Gallery</NavLink>
            <NavLink to="/message" className={({isActive})=>`shrink-0 px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${isActive?'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/25':'text-gray-700 hover:text-pink-600 hover:bg-white/80'}`}>Message</NavLink>
            <NavLink to="/contact" className={({isActive})=>`shrink-0 px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${isActive?'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/25':'text-gray-700 hover:text-pink-600 hover:bg-white/80'}`}>Contact</NavLink>
          </nav>
          <div className="hidden lg:flex lg:items-center lg:gap-2 lg:shrink-0">
            <ThemeToggle />
            <MotionToggle enabled={motionEnabled} onToggle={setMotionEnabled} />
            <MusicToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-3 sm:px-4 py-4 sm:py-8 w-full">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishes" element={<WishesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="py-8 text-center text-sm text-gray-600">
        <span>Created with love & sweet birthday wishes. 💖✨</span>
      </footer>
    </div>
  )
}
