import logo from "../assets/logo/FixIt Texto.png";
import React from "react";

function Login() {
  return (
    <>
      <div className="container">
        <form action="">
          <img src={logo} className="logo"></img>
          <input
            type="email"
            name="registerEmail"
            id="registerEmail"
            placeholder="E-mail"
            className="input_white"
          />
          <input
            type="password"
            name="registerPassword"
            id="registerPassword"
            placeholder="Senha"
            className="input_white"
          />
          <button className="btn_cyan">Entrar</button>
          <a href="register">Não tenho cadastro</a>
        </form>
      </div>
    </>
  );
}

export default Login;
