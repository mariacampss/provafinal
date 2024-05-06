import React from 'react';
import './navbar.css';
import './App';

function Navbar( ) {
  return (
    <nav className="Navbar">
        <div className='logo'>
        <img src={require('./SENAI.png')} width={150} alt="Descrição da imagem" /> 
        </div>

        <div className='item-lista'>
            <ul>
               <a className='link' href='/'>Home</a> 
            </ul>

            <ul>
              <a className='link' href='/contato'>Contato</a>  
            </ul>
   
            <ul>
              <a className='link' href='b'>Quem Somos</a>
            </ul>
                
        
        </div>
    </nav>
  );
}

export default Navbar;