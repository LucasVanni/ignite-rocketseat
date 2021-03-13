import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos
// https://api.github.com/users/lucasvanni
// https://api.github.com/users/LucasVanni/repos

const repository = {
  name: "teste",
  description: "Bem vindo ao teste",
  link: "https://github.com/",
};

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // Faz a chamada para a api do github
    fetch("https://api.github.com/orgs/rocketseat/repos")
      // Transforma a resposta em json
      .then((response) => response.json())
      // Disponibiliza os dados para serem usados
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  );
};

export default RepositoryList;
