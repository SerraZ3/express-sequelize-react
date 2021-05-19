# Transformando projeto EJS para React

![Screenshot](https://raw.githubusercontent.com/Marcelo-Diament/sequelize-aula-01/main/backend/public/images/sequelize-aula-01.png)

Nessa prática iremos transformar um projeto EJS em React e realizaremos a comunicação com a API

Para criar o projeto EJS do zero veja esse repositório [Sequilize #02 | Models e Model Querying](https://github.com/Marcelo-Diament/sequelize-aula-02) criado pelo professor [Marcelo Diament](https://github.com/Marcelo-Diament)

## Introdução

Nesse repositório criaremos um projeto simples, onde poderemos criar, consultar, editar e excluir usuários a partir de um banco de dados MySQL.

### Objetivo

O intuito é entendermos como:

1. Como se comunica o frontend (React) com o backend (API) através de requisições

2. Aprender a usar a ferramenta [Axios](https://www.npmjs.com/package/axios)

3. Aprender a lidar com dados proveniente do backend

### Pré Requisitos

Para executar essa prática, precisaremos de:

1. VS Code (ou outra IDE) para trabalharmos nosso código

2. GitBash (ou outro terminal) para executarmos nossos comandos de instalação de pacotes

3. Banco de dados MySQL (sugerimos o download do XAMPP/LAMP/MAMP - de acordo com seu sistema operacional)

4. Um SGBD (Sistema de Gestão de Banco de Dados) - pode ser o Workbench ou o phpMyAdmin, por exemplo

5. Node.js instalado (verifique se está instalado com o comando de terminal `node -v`)

6. NPM (ou Yarn) instalado (verifique se está instalado com o comando de terminal `npm -v`)

### Tecnologias

**Linguagens**

Basicamente utilizaremos JavaScript, SQL e Bash (comandos de terminal).

**Frameworks, Bibliotecas e Pacotes**

Para essa prática usaremos o Node.js como tecnologia de back end.

Para o servidor, utilizaremos o Express (e o pacote Express Generator para facilitar nossa vida).

Para a interface com o usuário, utilizaremos o React baseado no EJS.

Para o banco de dados, seguiremos com MySQL como linguagem (e o pacote MySQL2) e utilizaremos o Sequelize (e o Sequelize-CLI como dependência para desenvolvimento) para manipular o banco a partir do back end.

Por fim, usaremos o pacote nodemon para que o servidor seja automaticamente atualizado a cada alteração em nosso código.
