interface RepositoryItemProps {
  repository: {
    name: string, 
    description: string, 
    html_url: string,
  }
}

const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default name"}</strong>
      <p>{props.repository?.description ?? "Default description"}</p>

      <a href={props.repository?.html_url}>Acessar repositório</a>
    </li>
  );
};

export default RepositoryItem;
