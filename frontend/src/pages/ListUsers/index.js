import React, { useEffect, useState } from "react";
import Controls from "../../components/users/Controls";
import List from "../../components/users/List";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
function Users() {
  const [data, setData] = useState({
    users: [],
    total: 0,
    page: 0,
    pages: 0,
    orderParam: 0,
    orderDirection: 0,
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams.get("page"));
        console.log(urlParams.get("orderBy"));
        let query = "";
        if (urlParams.get("page")) query += `page=${urlParams.get("page")}&`;
        if (urlParams.get("orderBy"))
          query += `orderBy=${urlParams.get("orderBy")}&`;

        const response = await axios.get(`/users?${query}`);

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Controls data={data} />
      <main>
        {data.users.length > 0 ? (
          <List users={data.users} />
        ) : (
          <section>
            <h3>Ops... não encontramos registros em nosso banco de dados</h3>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Users;
