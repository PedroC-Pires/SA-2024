import logo from "../assets/fixit_logo2.png";
import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <div className="container">
        <form action="">
          <img src={logo} className="logo"></img>
          <h1>Login</h1>
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
