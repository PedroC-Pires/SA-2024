import logo from "../assets/logo/svg/fixit_logo_text.svg";
import "../styles/Register.css";



function App() {
  return (
    <>
      <div className="row justcenter wrap">
        <div className="col justcenter aligncenter">
          <img src={logo} className="logo1" />
          <h4>Registro</h4>
          <form action="submit" className="col wrap form-register" id="form-register">
            <input
              type="text"
              name="registerName"
              id="registerName"
              placeholder="Nome"
              className="input_white"
            />
            <input
              type="email"
              name="registerEmail"
              id="registerEmail"
              placeholder="E-mail"
              className="input_white"
            />
            <input
              type="text"
              name="registerCpf"
              id="registerCpf"
              placeholder="CPF"
              className="input_white"
            />
            <select name="estado" id="registerstado">
              <option value="null">Selecione um estado</option>
              <option value="ac">AC - Acre</option>
              <option value="al">AL - Alagoas</option>
              <option value="am">AM - Amazonas</option>
              <option value="ba">BA - Bahia</option>
              <option value="ce">CE - Ceará</option>
              <option value="df">DF - Distrito Federal</option>
              <option value="es">ES - Espírito Santo</option>
              <option value="go">GO - Goiás</option>
              <option value="ma">MA - Maranhão</option>
              <option value="mt">MT - Mato Grosso</option>
              <option value="ms">MS - Mato Grosso do Sul</option>
              <option value="mg">MG - Minas Gerais</option>
              <option value="pa">PA - Pará</option>
              <option value="pb">PB - Paraíba</option>
              <option value="pr">PR - Paraná</option>
              <option value="pe">PE - Pernambuco</option>
              <option value="pi">PI - Piauí</option>
              <option value="rj">RJ - Rio de Janeiro</option>
              <option value="rn">RN - Rio Grande do Norte</option>
              <option value="rs">RS - Rio Grande do Sul</option>
              <option value="ro">RO - Rondônia</option>
              <option value="rr">RR - Roraima</option>
              <option value="sc">SC - Santa Catarina</option>
              <option value="sp">SP - São Paulo</option>
              <option value="se">SE - Sergipe</option>
              <option value="to">TO - Tocantins</option>
            </select>
            <input
              type="password"
              name="registerSenha"
              id="registerSenha"
              placeholder="Senha"
              className="input_white"
            />
            <input
              type="password"
              name="repeatSenha"
              id="repeatSenha"
              placeholder="Repita sua senha"
              className="input_white"
            />
            <button className="btn_cyan">Entrar</button>
            <a href="login">Já tenho cadastro</a>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
