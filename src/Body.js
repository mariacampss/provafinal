import React from 'react';
import './App';
import './body.css';


function Body (){
  return(
    <div className="bode">
      <div className="header">
        <h1>Bem-vindo à Página Inicial da AV2 (3ª tentativa)</h1>
        <p>Agora vai!!</p>
      </div>

      <div className="conteiner">
                <div className='imagens'>
                    <img src={require('./FOTO5.jpg')} className='CIMATEC' alt="CIMATEC" width={350} height={250}/>
                    <p className='titulos'>Vista de cima Cimatec Park</p>  
                </div>

                <div className='imagens'>
                    <img src={require('./FOTO6.jpg')} className='SENAI' alt="SENAI" width={350} height={250}/>
                    <p className='titulos'>Portaria Senai Cimatec</p>  
                </div>

                <div className='imagens'>
                    <img src={require('./FOTO7.jpg')} alt="SESI SAUDE" width={350} height={250}/>
                    <p className='titulos'>Portaria SESI Saúde Piatã</p>  
                </div>

                <div className='imagens'>
                    <img src={require('./HOME.jpg')} alt="SESI" width={350} height={250}/>
                    <p className='titulos'>Portaria SESI Piatã</p>  
                </div>
    </div>
    </div>
  );
}
export default Body;