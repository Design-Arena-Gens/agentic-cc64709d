'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const cameraX = useTransform(scrollYProgress, [0, 1], [-20, 20])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Dynamic camera movement container */}
      <motion.div
        className="absolute inset-0"
        style={{ x: cameraX }}
        animate={{
          scale: [1.05, 1.1, 1.05],
          x: [-5, 5, -5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black to-black" />

        {/* Neon signs and buildings */}
        <div className="absolute inset-0">
          {/* Left building signs */}
          <motion.div
            className="absolute left-[10%] top-[15%] text-6xl font-bold text-pink-500 neon-text animate-flicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            夜
          </motion.div>

          <motion.div
            className="absolute left-[15%] top-[30%] text-4xl font-bold text-cyan-400 neon-text"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            CYBER
          </motion.div>

          {/* Right building signs */}
          <motion.div
            className="absolute right-[15%] top-[10%] text-7xl font-bold text-purple-500 neon-text animate-flicker"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          >
            街
          </motion.div>

          <motion.div
            className="absolute right-[10%] top-[35%] text-5xl font-bold text-blue-400 neon-text"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            NEON
          </motion.div>

          {/* Additional scattered signs */}
          <motion.div
            className="absolute left-[25%] top-[50%] text-3xl font-bold text-orange-500 neon-text"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
          >
            24/7
          </motion.div>

          <motion.div
            className="absolute right-[30%] top-[20%] text-4xl font-bold text-pink-400 neon-text animate-flicker"
          >
            東京
          </motion.div>

          {/* Vertical neon strips */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{
                left: `${10 + i * 7}%`,
                top: `${20 + (i % 3) * 15}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleY: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Rain effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 bg-gradient-to-b from-cyan-200 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${30 + Math.random() * 50}px`,
              }}
              animate={{
                y: ['-100vh', '100vh'],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Wet pavement reflections */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent">
          {/* Pavement texture */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                style={{ top: `${i * 5}%` }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Water puddles with ripples */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${15 + i * 10}%`,
                bottom: `${10 + (i % 3) * 10}%`,
                width: `${40 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 30}px`,
                background: 'radial-gradient(circle, rgba(6,214,255,0.3) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Main character - young woman silhouette */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ x: '-50vw', opacity: 0 }}
          animate={{
            x: ['50vw', '-50vw'],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Woman figure with depth of field effect */}
          <div className="relative" style={{ filter: 'blur(0px)' }}>
            {/* Body */}
            <div className="relative w-16 h-40">
              {/* Head */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-purple-300"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {/* Hair */}
                <div className="absolute -top-1 left-0 w-10 h-12 bg-gradient-to-b from-purple-900 to-purple-700 rounded-t-full -translate-x-1" />
                <motion.div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-purple-700 to-pink-600 rounded-b-full"
                  animate={{ scaleY: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Body */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-20 bg-gradient-to-b from-purple-600 to-pink-700 rounded-lg">
                {/* Jacket details */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-pink-400/20 rounded-lg" />
                <motion.div
                  className="absolute right-2 top-4 w-1 h-8 bg-cyan-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Left arm */}
              <motion.div
                className="absolute top-12 left-2 w-3 h-16 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full origin-top"
                animate={{ rotate: [0, 15, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Right arm */}
              <motion.div
                className="absolute top-12 right-2 w-3 h-16 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full origin-top"
                animate={{ rotate: [0, -15, 0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Left leg */}
              <motion.div
                className="absolute bottom-0 left-3 w-4 h-20 bg-gradient-to-b from-pink-700 to-purple-900 rounded-full origin-top"
                animate={{ rotate: [0, 10, 0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Right leg */}
              <motion.div
                className="absolute bottom-0 right-3 w-4 h-20 bg-gradient-to-b from-pink-700 to-purple-900 rounded-full origin-top"
                animate={{ rotate: [0, -10, 0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              {/* Glow around character */}
              <div className="absolute -inset-8 bg-gradient-radial from-pink-500/30 via-purple-500/20 to-transparent rounded-full blur-xl" />
            </div>

            {/* Reflection on wet pavement */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-20 reflection opacity-20">
              <div className="w-16 h-32 bg-gradient-to-t from-pink-500/40 to-purple-500/20 blur-md" />
            </div>
          </div>
        </motion.div>

        {/* Foreground bokeh particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${10 + Math.random() * 30}px`,
                height: `${10 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['rgba(255,0,110,0.6)', 'rgba(6,214,255,0.6)', 'rgba(131,56,236,0.6)'][
                    Math.floor(Math.random() * 3)
                  ]
                } 0%, transparent 70%)`,
                filter: 'blur(8px)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Atmospheric fog layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-full w-32 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              style={{
                left: `${i * 20}%`,
                transform: 'skewX(-20deg)',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                x: [-50, 50],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black"
           style={{
             background: 'radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.6) 100%)'
           }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </main>
  )
}
