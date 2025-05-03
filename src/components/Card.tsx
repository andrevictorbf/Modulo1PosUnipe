import React from 'react'

type CardProps = {
  title: string
  price: string
  srcImage: string
  altImage: string
}

export default function Card({title, price, srcImage, altImage}: CardProps) {
  return (
    <div className='flex flex-col min-w-100 min-h-55 bg-white rounded-2xl p-8'>
      <div className=''>
        <p className='text-2xl'>{title}</p>
        <p>R$ {price}</p>
      </div>
      <picture className='w-31 h-31 rounded-full overflow-hidden'>
        <img
          src={srcImage}
          alt={altImage}
        />
      </picture>
    </div>
  )
}
