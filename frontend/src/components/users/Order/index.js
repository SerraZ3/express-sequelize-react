import React from "react";

function Order() {
  const handleChange = (e) => {
    let { name, value } = e.target;

    window.location.search === ""
      ? (window.location.search = "?orderBy=" + value)
      : window.location.search.includes("orderBy=")
      ? (window.location.search =
          window.location.search.split("orderBy=")[0] + "orderBy=" + value)
      : (window.location.search += "&orderBy=" + value);
  };
  return (
    <div className="form__input-container order-by">
      <label htmlFor="orderBy">Ordenar por</label>
      <select
        name="orderBy"
        id="orderBy"
        onChange={handleChange}
        // onChange={() => alert("asd")}
      >
        <option value="" disabled defaultValue>
          Ordernar por...
        </option>
        <option value="id_ASC">Mais Antigos</option>
        <option value="id_DESC">Mais Recentes</option>
        <option value="nome_ASC">Nome A-Z</option>
        <option value="nome_DESC">Nome Z-A</option>
        <option value="sobrenome_ASC">Sobrenome A-Z</option>
        <option value="sobrenome_DESC">Sobrenome Z-A</option>
        <option value="email_ASC">Email A-Z</option>
        <option value="email_DESC">Email Z-A</option>
      </select>
    </div>
  );
}

export default Order;
