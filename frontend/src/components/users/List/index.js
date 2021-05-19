import React from "react";

function List({ users }) {
  return (
    <section className="users">
      <table className="users__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Função</th>
            <th>Ver</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr id={`user${user.id}`} key={"user" + idx} className="user">
              <td className="user__id" data-title="ID">
                {user.id}
              </td>
              <td className="user__name" data-title="Nome">
                {user.nome}
              </td>
              <td className="user__lastname" data-title="Sobrenome">
                {user.sobrenome}
              </td>
              <td className="user__email" data-title="Email">
                {user.email}
              </td>
              <td className="user__pass" data-title="Senha">
                {user.senha}
              </td>
              <td className="user__function" data-title="Função">
                {user.id_funcao === 1 ? "Admin" : "Usuário Final"}
              </td>
              <td className="user__see">
                <form action={`/users/${user.id}`} method="GET">
                  <button className="user__see--btn">Ver</button>
                </form>
              </td>
              <td className="user__edit">
                <form action={`/users/${user.id}`} method="GET">
                  <input type="hidden" name="edit" value="edit" />
                  <button className="user__edit--btn">Editar</button>
                </form>
              </td>
              <td className="user__delete">
                <form action={`/users/${user.id}/delete`} method="POST">
                  <button className="user__delete--btn">Excluir</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default List;
