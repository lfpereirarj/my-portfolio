import React from 'react'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Header = () => {
  return (
    <header className='w-full px-12 flex justify-between items-center h-28'>
      <Logo />
      <Menu />
    </header>
  )
}
