import React from "react";

// import { Container } from './styles';

function Update({ user }) {
  return (
    <section id="editUserSection" className="edit-user">
      <form action={`/users/${user.id}`} method="POST" className="form">
        <div className="form__input-container">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            required
            placeholder="Benedito"
            value="<%= user.nome %>"
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
            value="<%= user.sobrenome %>"
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
            value="<%= user.email %>"
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
            value="<%= user.senha %>"
          />
        </div>
        <div className="form__btns">
          <button>Editar Usuário</button>
        </div>
      </form>
    </section>
  );
}

export default Update;
