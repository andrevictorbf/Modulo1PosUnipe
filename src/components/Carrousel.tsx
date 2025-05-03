import React from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import Card from './Card'

type CarrouselProps = {
  title: string
}

export default function Carrousel({title}: CarrouselProps) {

  const cards = [
    {
      id: 1,
      title: 'Camisa Xadrez',
      price: '99,90',
      srcImage: '/images/produtos/blusa-xadrez.png',
      altImage: 'Camisa Xadrez',
    },
    {
      id: 2,
      title: 'Sapato Masculino',
      price: '199,90',
      srcImage: '/images/produtos/sapato-masculino.png',
      altImage: 'Sapato Masculino',
    },
    {
      id: 3,
      title: 'Calça Jeans',
      price: '120,90',
      srcImage: '/images/produtos/calca-jeans.png',
      altImage: 'Calça Jeans',
    }
  ]

  return (
    <div className='relative overflow-hidden max-w-224 mx-auto m px-8'>

      <h1 className='text-3xl text-shadow-[0px_4px_24px] text-shadow-black/37'>{title}</h1>

      <button
        className="absolute z-1 top-0 bottom-0 -left-8 sm:left-0 bg-gradient-to-l from-transparent to-primary-1"
        aria-label="Previous image"
      >
        <BsChevronCompactLeft
          className='w-23 h-full text-black drop-shadow-[2px_2px_0px] drop-shadow-secondary-1 hover:text-secondary-1 transition hover:drop-shadow-white'
        />
      </button>
      <button
        className="absolute z-1 top-0 bottom-0 -right-8 sm:right-0 bg-gradient-to-r from-transparent to-primary-1"
        aria-label="Next Image"
      >
        <BsChevronCompactRight
          className='w-23 h-full text-black drop-shadow-[2px_2px_0px] drop-shadow-secondary-1 hover:text-secondary-1 transition hover:drop-shadow-white'
        />
      </button>

      <div
        className='flex items-center gap-8 justify-between overflow-x-auto py-4 scrollbar-none'
      >
        {cards.map(card => (
          <Card
            key={card.id}
            {...card}
          />
        ))}
      </div>
    </div>

  )
}
