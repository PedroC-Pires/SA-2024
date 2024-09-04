import logo from "../assets/logo/svg/fixit_logo_text.svg";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <div className="row justcenter wrap">
      <form action="submit" className="col nowrap form-login aligncenter">
        <img src={logo} className="logo1"/>
        <h4>Recuperação de senha</h4>
        <input
          type="email"
          name="registerEmail"
          id="registerEmail"
          placeholder="E-mail ou CPF"
          className="input_white"
        />
        <button className="btn_orange">Enviar</button>
        <a href="login">Voltar</a>
      </form>
      </div>
    </>
  );
}

export default Login;
