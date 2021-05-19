import React, { useEffect, useState } from "react";

function Pagination({ page, pages, users, total, orderParam, orderDirection }) {
  const [currentPage, setCurrentPage] = useState();
  const renderLinks = () => {
    let rows = [];
    for (var i = 1; i <= pages; i++) {
      console.log(currentPage);
      rows.push(
        <a
          key={"pagination" + i}
          href={`?page=${i}&orderBy=${orderParam}_${orderDirection}`}
          className={i === currentPage ? "pages__btn--selected" : "pages__btn"}
        >
          {i}
        </a>
      );
    }
    return rows;
  };
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.get("page")) setCurrentPage(parseInt(urlParams.get("page")));
    else setCurrentPage(1);
  }, []);
  return (
    <div className="pagination">
      <p className="current-page">
        Página{" "}
        <b>
          {page} de {pages}
        </b>{" "}
        | Exibindo{" "}
        <b>
          {users.length} de {total}
        </b>{" "}
        usuários encontrados
      </p>
      <nav className="pages">{renderLinks()}</nav>
    </div>
  );
}

export default Pagination;
