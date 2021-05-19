import React from "react";
import Order from "../Order";
import Pagination from "../Pagination";
import Search from "../Search";
// import { Container } from './styles';

function Controls({ data }) {
  return (
    <>
      <section id="searchUserSection" className="search-user">
        <Order />
        <Search />
      </section>
      <section id="listPaginationSection">
        {data.pages && data.pages > 0 ? <Pagination {...data} /> : null}
      </section>
    </>
  );
}

export default Controls;
