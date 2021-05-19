import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { Container } from './styles';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section class="main-section">
          <h2 class="main-section__title">Página Inicial</h2>
          <h3 class="main-section__subtitle">
            Bem vindo à prática de Sequelize #02!
          </h3>
          <p class="main-section__description">
            Nesse repositório criaremos um projeto simples, onde poderemos
            criar, consultar, editar e excluir usuários a partir de um banco de
            dados MySQL.
          </p>
          <p class="main-section__description">
            O intuito é entendermos como conectar o backend (node.js) a um banco
            de dados, realizar o CRUD (Create, Read, Update e Delete) através do
            Sequelize e utilizarmos queries SQL baseadas em modelos para
            executarmos as ações (Model Queries).
          </p>
        </section>
        <div class="cta">
          <a
            href="/users"
            rel="next"
            target="_self"
            title="Ver listagem de usuários"
            class="cta__btn"
          >
            Ver Lista de Usuários
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
