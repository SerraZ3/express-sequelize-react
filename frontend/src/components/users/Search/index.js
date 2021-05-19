import React from "react";

function Search() {
  return (
    <form action="/users/search/" method="POST" className="form">
      <div className="form__input-container search-param">
        <label htmlFor="searchParam">Buscar por</label>
        <select name="searchParam" id="searchParam">
          <option value="" disabled defaultValue>
            Selecione um parâmetro
          </option>
          <option value="id">ID</option>
          <option value="nome">Nome</option>
          <option value="sobrenome">Sobrenome</option>
          <option value="email">Email</option>
          <option value="id_funcao">Função</option>
        </select>
      </div>
      <div className="form__input-container search-value">
        <label htmlFor="searchValue">Valor buscado</label>
        <input
          type="text"
          name="searchValue"
          id="searchValue"
          required
          placeholder="Calixto"
        />
        <select name="searchRole" id="searchRole" className="hidden">
          <option value="" disabled defaultValue>
            Selecione um valor
          </option>
          <option value="1">Admin</option>
          <option value="2">Usuário Final</option>
        </select>
      </div>
      <div className="form__btns">
        <button>Buscar Usuário</button>
      </div>
    </form>
  );
}

export default Search;
