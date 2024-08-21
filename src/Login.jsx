import './App.css'
import logo from './assets/fixit_logo2.png'
import React from 'react'

function Login() {

  return (
    <>
    <div className='container'>
      <img src={logo} className='logo'></img>
      <h1>Login</h1>
      <input type="email" name="registerEmail" id="registerEmail" placeholder='E-mail' />
      <input type="password" name="registerPassword" id="registerPassword" placeholder='Senha'/>
      <button>Entrar</button>
    </div>
    </>
  )
}

export default Login
