import { useState } from 'react'
import './App.css'

function Login() {

  return (
    <>
    <div className='container'>
      <h1>Login</h1>
      <input type="email" name="registerEmail" id="registerEmail" placeholder='E-mail' />
      <input type="password" name="registerPassword" id="registerPassword" placeholder='Senha'/>
      <button>Entrar</button>
    </div>
    </>
  )
}

export default Login
