import React from "react";

function Register() {
  return (
    <section id="addUserSection" className="register-user">
      <form action="/users" method="POST" className="form">
        <div className="form__input-container">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            required
            placeholder="Benedito"
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="sobrenome">Sobrenome</label>
          <input
            type="text"
            name="sobrenome"
            id="sobrenome"
            required
            placeholder="Calixto"
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="bene@dito.com"
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            required
            placeholder="Senha123"
          />
        </div>
        <div className="form__btns">
          <button>Adicionar Usuário</button>
        </div>
      </form>
    </section>
  );
}

export default Register;
