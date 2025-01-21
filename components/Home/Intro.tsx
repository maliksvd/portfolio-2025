'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <div className="container mx-auto flex w-full flex-col-reverse items-start justify-between space-x-0 px-6 py-20 md:flex-row md:items-center md:space-x-10 md:px-0 md:py-32">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          className="max-w-xl bg-gradient-title bg-clip-text text-left text-4xl text-5xl font-medium tracking-tighter text-transparent lg:text-6xl"
        >
          Over 9+ years in the programmation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          className="mt-6 max-w-xl text-left text-lg text-[#687076]"
        >
          I&rsquo;m a full-stack developer with a passion for building scalable
          and performant web applications. Experienced in React, Next.js, and
          TypeScript, I&rsquo;m excited to bring my expertise to your next
          project.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
      >
        <Image
          src="/me.jpg"
          alt="Malik Krechiche"
          width={500}
          height={300}
          className="mb-6 h-72 w-full rounded-2xl md:mb-0 md:h-96"
        />
      </motion.div>
    </div>
  )
}
