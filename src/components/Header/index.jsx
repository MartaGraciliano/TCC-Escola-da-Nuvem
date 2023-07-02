import React from 'react';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import './Header.css';

function Header() {
  return (
    <header className='header-container'>
      <h1>Empregabilidade</h1>
      <div>
        <BsFillTelephoneForwardFill />
        <span>Fale Conosco: 0800 123 4567</span>
      </div>
    </header>
  )
}

export default Header