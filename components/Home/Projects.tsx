'use client'
import React from 'react'
import { Carousel, Card } from '@/components/ui/apple-cards-carousel'

export function Projects() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={{
        ...card,
        content: card.content || <div></div>, // Provide default content if undefined
      }}
      index={index}
      layout={true}
    />
  ))

  return (
    <div className="h-full w-full py-20">
      <h2 className="mx-auto bg-gradient-title bg-clip-text text-left text-5xl font-medium tracking-tighter text-transparent lg:text-6xl">
        Projects and Experiments
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const PDGenius = () => {
  return (
    <>
      <div
        key={'optic-genius'}
        className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-14"
      >
        <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl">
          Currently in development, PD Genius is an innovative experimental
          project that uses artificial intelligence and augmented reality to
          accurately calculate the pupillary distance of the human eye. By
          combining cutting-edge technology with precise calibration methods,
          the project aims to achieve a{' '}
          <span className="font-bold">90% success rate</span>, aligning with the
          accuracy standards required by opticians. PD Genius is designed to
          provide a seamless and intuitive experience, offering a reliable tool
          for applications ranging from e-commerce to professional optometry.
        </p>
      </div>
    </>
  )
}

const data = [
  {
    category: 'Project - Q3 2025',
    title: 'Optic Genius',
    src: 'https://images.unsplash.com/photo-1724215618906-1c19d1d6fb52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    category: 'Experimentation - Q4 2025',
    title: 'PD Genius',
    src: 'https://images.unsplash.com/photo-1698943457734-c3c99e390d43?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <PDGenius />,
  },
  {
    category: 'Website - Online',
    title: 'Le SocialRoom',
    src: '/lsr.png',
  },

  {
    category: 'E-Commerce - Q4 2025',
    title: 'BarniQC',
    src: 'https://framerusercontent.com/images/d1il0RUlkwbx0E2IaMllkrV7Y.jpg',
  },
]
