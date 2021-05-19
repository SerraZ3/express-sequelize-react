import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Sequelize #02 | Models e Queries</h1>
      <nav className="header__nav">
        <a href="/" target="_self" rel="next" title="Acessar página iniciar">
          Início
        </a>
        <a
          href="/users/add"
          target="_self"
          rel="next"
          title="Cadastrar usuário"
        >
          Cadastro
        </a>
        <a
          href="/users"
          target="_self"
          rel="next"
          title="Ver listagem de usuários"
        >
          Usuários
        </a>
        <a
          href="https://github.com/Marcelo-Diament/sequelize-aula-02"
          target="_blank"
          rel="noreferrer"
          title="Ver repositório"
        >
          Repositório
        </a>
      </nav>
    </header>
  );
}

export default Header;
