import { useState } from 'react';
import logo from '../assets/fixit_logo2.png';

function App() {

  return (
    <>
    <div className='container'>
      <h1>Cadastro</h1>
      <input type="text" id="registerName" placeholder='Nome'/>
      <input type="email" name="registerEmail" id="registerEmail" placeholder='E-mail' />
      <input type="text" placeholder="Telefone" />
      <input type="password" name="registerPassword" id="registerPassword" placeholder='Senha'/>
      <input type="password" name="registerPassword" id="registerPassword" placeholder='Repita a senha'/>
      <button>Cadastrar</button>
      <a href="/">Já tenho cadastro</a>
    </div>
    </>
  )
}

export default App
