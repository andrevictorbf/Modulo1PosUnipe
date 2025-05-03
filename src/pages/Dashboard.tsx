import React from 'react'
import Sidebar from '../components/Sidebar'
import Carrousel from '../components/Carrousel'

export default function Dashboard() {
  return (
    <main className='flex min-h-dvh'>
      <Sidebar/>

      <div className='overflow-hidden py-10 grow'>
        <Carrousel
          title='Nossos Principais Produtos'
        />
        <Carrousel
          title='Nossos Principais Produtos'
        />
      </div>

    </main>
  )
}
