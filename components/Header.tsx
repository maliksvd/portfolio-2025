'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
      className="sticky top-0 z-50 border-b border-[#0217351a] bg-white/[.80] px-6 py-2 backdrop-blur-3xl md:px-0"
    >
      <div className="gutter-px-1 container mx-auto flex w-full flex-row items-center justify-between gap-5">
        {' '}
        <div className="flex flex-row items-end gap-4 lg:gap-11">
          <Link href="/">Malik Krechiche</Link>
        </div>
        <div className="flex-row items-center gap-12 lg:flex">
          <Button variant="outline">Menu</Button>
        </div>
      </div>
    </motion.header>
  )
}
