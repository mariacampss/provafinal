import './Contato.css';
import React, { useState } from 'react';


const Contato = () => {
        const [enviado, setEnviado] = useState(false);
          const handleSubmit = (event) => {
          event.preventDefault();
          alert('Formulário enviado com sucesso!');
          setEnviado(true);
          }
          return (
        <div className="formulario-container">
        <form onSubmit={handleSubmit} className="formulario">
        <fieldset>
        <legend>Quem você deseja contactar?</legend>
        <div className="input-group">
        <input type="text" name="nome" placeholder="Digite o seu
        nome" />
        </div>
        <div className="input-group">
        <input type="number" name="numPessoas"
        placeholder="Quantidade de pessoas" />
        </div>
        <div className="input-group">
        <input type="email" name="email" placeholder="Digite o seu
        email" />
        </div>
        <div className="input-group">
        <label htmlFor="dtaNascimento">Data que você quer ver a
        pessoa</label>
        <input type="date" id="dtaNascimento" name="dtaNascimento"
        />
        </div>
        </fieldset>
        <fieldset>
        <legend>Complete a frase: "Filho de peixe, peixinho
        ___"</legend>
        <div className="checkbox-group">
        <input type="checkbox" id="fixacao" name="frase" value="é"
        />
        <label htmlFor="fixacao">É</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="projecao" name="frase"
        value="tem" />
        <label htmlFor="projecao">Jamais será</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="cheiro" name="frase"
        value="verde" />
        <label htmlFor="cheiro">Não é</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="cor" name="frase" value="bonito"
        />
        <label htmlFor="cor">Bonito</label>
        </div>
        </fieldset>
        <button type="submit" className="botao-enviar">Enviar</button>
        </form>
        {enviado && <p>Formulário enviado com sucesso!</p>}
        </div>
        );
        }
  
export default Contato;