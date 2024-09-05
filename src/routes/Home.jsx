import logo from "../assets/logo/svg/fixit_logo_text.svg";
import React from 'react';
import '../styles/Home.css';

function Home() {

  return (
    <>
      <div className="col justcenter aligncenter" id="">
        <img src={logo} className="logo1" />
        <h1>Sobre nós</h1>
        <p className='about-us'>
          Olá, somos a FixIt! Nosso objetivo é proporcionar suporte a profissionais que buscam conectar-se de maneira eficiente com seu público-alvo, ao mesmo tempo em que facilitamos a resolução de problemas para nossos clientes de forma descomplicada. Estamos aqui para tornar o processo de encontrar e interagir com o público mais simples e direto, garantindo que todos possam alcançar suas metas sem estresse ou complicações.
        </p>
      </div>
    </>
  )
}

export default Home
