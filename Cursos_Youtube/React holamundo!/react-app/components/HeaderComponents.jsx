import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponents() {
  return (
    <header>
        <h1>Bienvenidos</h1>
        <nav>
            <ul className='link-list'>
                <li>
                    <Link className='link' to="/home">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/blog">blog</Link>
                </li>
            </ul>
        </nav>
        <div>HeaderComponents</div>
    </header>
    
  )
}

export default HeaderComponents