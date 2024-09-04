import logo from "../assets/logo/svg/fixit_logo_text.svg";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <div className="row justcenter wrap">
      <form action="submit" className="col nowrap form-login aligncenter">
        <img src={logo} className="logo1"/>
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
        <button className="btn_orange">Entrar</button>
        <a href="/">Voltar</a>
        <a href="password recovery">Esqueceu sua senha?</a>
      </form>
      </div>
    </>
  );
}

export default Login;
