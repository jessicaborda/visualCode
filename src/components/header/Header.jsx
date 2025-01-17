import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderLinks } from './HeaderLinks'
import { HeaderDropdownMenu } from './HeaderDropdownMenu'
import './Header.css'

export const Header = () => {
  return (
    <nav className='headerContainer'>
        <HeaderLogo/>
        <HeaderLinks/>
        <HeaderDropdownMenu/>
    </nav>
  )
}
