import React from 'react';
import './footer.css';
import './App';

function Footer ( ){
    return(
        <div className='rod'>
            <div className='logo2'>
            <img src={require('./SESI.png')} width={100} alt="logosesi" /> 
            </div>

            <p className='textinho'> © 2024 Todos os direitos reservados. <br></br> Contato: (71) 99999-9999</p>
        </div>
    );
}

export default Footer;