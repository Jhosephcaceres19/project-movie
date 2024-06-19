import React from 'react'
import { Link } from 'react-router-dom'
import { icon } from '../../assets/icon/icon'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content-main">
        <div>
          <img src={icon.netflix} alt="" className="w-[92px]" />
        </div>
        <div className="nav-ul">
          <Link to="/">Inicio</Link>
          <Link to="/serie">Serie</Link>
          <Link to="/pelicula">Pelicula</Link>
          <Link to="/">Novedades populares</Link>
        </div>
      </div>
      <div className="nav-input">
        <svg
          className="absolute text-slate-400 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
        <input type="text" placeholder="Buscar" className='pl-5 text-black'/>
      </div>
    </nav>
  );
}
