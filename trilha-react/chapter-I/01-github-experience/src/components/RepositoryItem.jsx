const RepositoryItem = (props) => {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default name"}</strong>
      <p>{props.repository?.description ?? "Default description"}</p>

      <a href={props.repository?.html_url}>Acessar repositório</a>
    </li>
  );
};

export default RepositoryItem;
