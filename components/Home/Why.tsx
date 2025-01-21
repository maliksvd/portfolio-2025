'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { LogosNextjsIcon } from '@/components/Icons/Next'
import { LogosNuxtIcon } from '../Icons/Nuxt'
import { LogosPhp } from '../Icons/PHP'
import { LogosSwift } from '../Icons/Swift'
import { LogosExpoIcon } from '../Icons/Expo'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Why() {
  return (
    <div className="flex w-full items-center justify-center space-x-10 px-6 py-32 md:px-0">
      <div>
        <h2 className="mx-auto bg-gradient-title bg-clip-text text-center text-5xl font-medium tracking-tighter text-transparent lg:text-6xl">
          <div className="flex flex-col items-center">
            6 reasons
            <span>why working with me</span>
          </div>
        </h2>
        <div className="mt-20 grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            className="col-span-1 mx-auto w-full rounded-3xl bg-gradient-card px-10 py-24 text-white shadow-lg md:col-span-2"
          >
            <div className="flex flex-col md:flex-row md:space-x-48">
              <div className="max-w-lg">
                <h2 className="mb-4 text-2xl font-medium">Reason #1</h2>
                <h1 className="mb-6 text-5xl font-medium">
                  Building your projects tailor made
                </h1>
                <p className="mb-8 text-xl text-white/80">
                  Every project is unique, just like your needs. I take the time
                  to understand your goals, challenges, and vision to deliver
                  solutions that are custom-designed to fit perfectly. No
                  cookie-cutter approaches—just results crafted specifically for
                  you.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  'Make edits right on your site',
                  'Publish changes with one click',
                  'Increase your autonomy',
                  'Save time and money',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="p- mr-4 h-9 w-9 rounded-full border-2 border-white text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            className="w-full rounded-3xl border border-[#838383]/15 bg-white"
          >
            <div className="flex flex-col p-14">
              <p className="text-md mb-8 text-xl">Reason #2</p>
              <h2 className="mb-6 bg-gradient-title bg-clip-text text-5xl font-medium tracking-tighter text-transparent">
                Google is my best friend
              </h2>
              <p className="text-xl text-[#687076]">
                Give your SEO a boost with fine level controls over meta tags,
                markup, redirects and indexing rules.
              </p>
            </div>
            <Image
              className="w-full p-14"
              src="/google.svg"
              width={584}
              height={308}
              alt="Google is my best friend"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            className="w-full rounded-3xl border border-[#838383]/15 bg-white"
          >
            <div className="flex flex-col p-14">
              <p className="text-md mb-8 text-xl">Reason #3</p>
              <h2 className="mb-6 bg-gradient-title bg-clip-text text-5xl font-medium tracking-tighter text-transparent">
                Focus on performance and design quality
              </h2>
              <p className="text-xl text-[#687076]">
                Versatile with reliable tools like WordPress, Shopify or others,
                I quickly deliver robust solutions.
              </p>
            </div>
            <Image
              className="w-full"
              src="/perf.svg"
              width={584}
              height={308}
              alt="Google is my best friend"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            className="w-full rounded-3xl border border-[#838383]/15 bg-white p-6"
          >
            <div className="flex flex-col p-14">
              <p className="text-md mb-8 text-xl">Reason #4</p>
              <h2 className="mb-6 bg-gradient-title bg-clip-text text-5xl font-medium tracking-tighter text-transparent">
                Expertise multi-CMS platforms
              </h2>
              <p className="text-xl text-[#687076]">
                Versatile with reliable tools like WordPress, Shopify or others,
                I quickly deliver robust solutions.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            className="w-full rounded-3xl border border-[#838383]/15 bg-white p-6"
          >
            <div className="flex flex-col p-14">
              <p className="text-md text-md mb-8 text-xl">Reason #5</p>
              <h2 className="mb-6 bg-gradient-title bg-clip-text text-5xl font-medium tracking-tighter text-transparent">
                Smooth migrations, zero hassle
              </h2>
              <p className="text-xl text-[#687076]">
                I simplify every step of the process for a smooth transition.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            className="w-full rounded-3xl border border-[#838383]/15 bg-white p-6"
          >
            <div className="flex flex-col p-14">
              <p className="text-md text-md mb-8 text-xl">Reason #6</p>
              <h2 className="mb-6 bg-gradient-title bg-clip-text text-5xl font-medium tracking-tighter text-transparent">
                Tech that fits your vision
              </h2>
              <p className="text-xl text-[#687076]">
                My skills adapt perfectly to your technologies to maximize
                efficiency.
              </p>
              <div className="mt-8 flex items-center justify-start space-x-4">
                <LogosNextjsIcon className="border-input h-12 w-12 rounded-xl border p-2 text-white" />
                <LogosNuxtIcon className="border-input h-12 w-12 rounded-xl border p-2 text-white" />
                <LogosPhp className="border-input h-12 w-12 rounded-xl border p-2 text-white" />
                <LogosSwift className="border-input h-12 w-12 rounded-xl border p-2 text-white" />
                <LogosExpoIcon className="border-input h-12 w-12 rounded-xl border p-2 text-white" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            className="w-full rounded-3xl border border-[#838383]/15 bg-white p-6"
          >
            <div className="flex flex-col p-14">
              <p className="text-md text-md mb-8 text-xl">What&apos;s next?</p>
              <h2 className="mb-6 bg-gradient-title bg-clip-text text-5xl font-medium tracking-tighter text-transparent">
                Now is the time to work together
              </h2>
              <p className="text-xl text-[#687076]">
                Feel free to contact me if you have any questions or ideas.
              </p>
              <Button className="mt-8 max-w-xs rounded-full bg-[#0071E3] px-8 py-4 text-lg text-white">
                <Link href="mailto:malik@malikkrechiche.com">
                  Let&apos;s make it happen!
                </Link>
              </Button>{' '}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
