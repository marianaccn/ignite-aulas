export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Título"}</strong>
      <p>{props.repository.description ?? "Descrição"}</p>
      <a href={props.repository.link}>Acessar repositórios</a>
    </li>
  );
}
