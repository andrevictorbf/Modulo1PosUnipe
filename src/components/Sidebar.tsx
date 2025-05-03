import React from 'react'
import ButtonSidebar from './ButtonSidebar'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className='flex flex-col gap-8 bg-primary min-h-full min-w-90 rounded-r-3xl text-white text-center drop-shadow-[4px_0px_8px] drop-shadow-black/25 py-8'>
      
      <div className='text-3xl text-shadow-[0px_4px_16px] text-shadow-black/25'>
        <h1>Seja bem-vindo,</h1>
        <p>Lipe</p>
      </div>

      
      <picture className='rounded-full overflow-hidden w-40 h-40 self-center drop-shadow-[0px_4px_16px] drop-shadow-black'>
        <img
          src="/images/userImage.JPG"
          alt="Imagem do Usuário"
        />
      </picture>

      <label className='text-2xl'>Gestor</label>

      <div className='flex grow flex-col px-5 gap-8'>
        <ButtonSidebar
          label='Minhas Unidades'
        />
        <ButtonSidebar
          label='Meu Estoque'
        />
        <ButtonSidebar
          label='Desempenho'
        />
        <ButtonSidebar
          label='Fornecedores'
        />
      </div>

      <div className="flex flex-col gap-2 self-center mt-4">
        <label className="text-xl max-w-30 text-center">Deseja sair?</label>
        <NavLink
          to={'/'}
          className='bg-tertiary hover:bg-tertiary/50 transition text-xl text-center p-2 rounded-2xl drop-shadow-[4px_4px_8px] drop-shadow-black/25'
        >
          Sair
        </NavLink>
      </div>

    </aside>
  )
}
