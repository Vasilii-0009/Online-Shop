import './Footer.scss'
import React from 'react'

export default function Footer() {
   const date = new Date().getFullYear()
   return (
      <footer className='footer'>Copyrigth &copy; {`${date}`}</footer>
   )
}
