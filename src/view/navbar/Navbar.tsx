import React from 'react'
import { Link } from 'react-router-dom'
import { icon } from '../../assets/icon/icon'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-content-main'>
        <div><img src={icon.netflix} alt="" className='w-[92px]'/></div>
        <div className='nav-ul'>
          <Link to='/'>Inicio</Link>
          <Link to='/serie'>Serie</Link>
          <Link to='/pelicula'>Pelicula</Link>
          <Link to='/'>Novedades populares</Link>
        </div>
      </div>
      <div className='nav-input'>
        
        <input type="text" placeholder='Buscar'/>
      </div>
    </nav>
  )
}
