import './Header.scss'
import React from 'react'
import logo from '../../images/logo.svg'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
   return (
      <header className='header'>
         <img className='header__logo' src={logo} alt='logo' />
         <FaShoppingCart className='header__basket' />

      </header>
   )
}
