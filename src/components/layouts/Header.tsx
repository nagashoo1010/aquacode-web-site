import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header>
        <h1>AQUA CODE</h1>
        <nav>
          <ul>
            <li><Link to={'/'}>TOP</Link></li>
            <li>INFO</li>
            <li><Link to={'/staff'}>STAFF</Link></li>
            <li><Link to={'/contact'}>CONTACT</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
