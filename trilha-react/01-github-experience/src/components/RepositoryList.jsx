import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "teste",
  description: "Bem vindo ao teste",
  link: "https://github.com/",
};

const RepositoryList = () => {
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
