import React from 'react'

type ButtonSidebarProps = {
  label: string
}

export default function ButtonSidebar({label}: ButtonSidebarProps) {
  return (
    <button className='text-3xl py-4 px-8 w-full bg-secondary-variation3/30 hover:bg-secondary-variation3/60 transition rounded-lg drop-shadow-[0px_4px_4px] drop-shadow-black/25 hover:cursor-pointer'>
      {label}
    </button>
  )
}
