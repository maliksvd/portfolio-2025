'use client'

import { Button } from '../ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div className="mx-auto my-32 flex max-w-5xl flex-col items-center justify-center px-4 md:px-0">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 0.5 },
        }}
        className="bg-gradient-title bg-clip-text text-center text-4xl text-6xl font-medium tracking-tighter text-transparent md:text-5xl lg:text-8xl"
      >
        Building solutions that inspire inspire change.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 1 },
        }}
        className="mt-4 max-w-xl text-center text-xl text-[#687076]"
      >
        Crafting innovative, user-focused solutions that empower change, inspire
        action, and shape a more connected, impactful future.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 1.5 },
        }}
      >
        <Button className="mt-8 rounded-full bg-[#0071E3] text-lg text-white">
          Start a new project
        </Button>
      </motion.div>
    </motion.div>
  )
}
