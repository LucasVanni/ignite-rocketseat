const repositoryName = "teste";

const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Default description</p>

          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
  );
};

export default RepositoryList;
